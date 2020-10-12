import AsyncStorage from '@react-native-community/async-storage';
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const authReducer = ( state, action ) =>
{
    // let newState = { ...state };
    switch ( action.type ) 
    {

        case "add_error":
            return { ...state, errorMessage: action.payload };
        case "signin":
            return { ...state, errorMessage: "", token: action.payload };
        case "signup":
            return { ...state, errorMessage: "", token: null };
        case "clear_err_msg":
            return { ...state, errorMessage: "" };

        default:
            return state;
    }
};

const signup = dispatch =>
{
    return async ( { email, password }, cb ) =>
    {
        try 
        {
            await trackerApi.post( '/sign-up', { email, password } );

            dispatch(
                {
                    type: "signup"
                }
            );

            if ( cb ) cb();
        }
        catch ( error ) 
        {
            dispatch(
                {
                    type: "add_error",
                    payload: "Something went wrong. Could not sign up"
                }
            );
        }
    };
};

const signin = dispatch =>
{
    return async ( { email, password }, cb ) =>
    {

        try 
        {
            const response = await trackerApi.post( '/sign-in', { email, password } );

            await AsyncStorage.setItem( 'tracker-token', response.data.token );

            dispatch(
                {
                    type: "signin",
                    payload: response.data.token
                }
            );

            if ( cb ) cb();
        }
        catch
        {

            dispatch(
                {
                    type: "add_error",
                    payload: "Something went wrong. Could not sign in"
                }
            );
        }
    };
};

const signout = dispatch =>
{
    return () =>
    {

    };
};


const clearErrMsg = dispatch => () =>
{
    dispatch( { type: "clear_err_msg" } );
};


export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup, clearErrMsg },
    {
        token: null,
        errorMessage: ""
    }
);
