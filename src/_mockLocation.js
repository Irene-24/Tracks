import * as Location from "expo-location";

const tenMetersWithDegrees = 0.0001;

const getLocation = increment =>
{
    return {
        timestamp: 1602427569877,
        coords:
        {
            latitude: 6.489146940317022 + increment * tenMetersWithDegrees,
            longitude: 3.341185915217196 + increment * tenMetersWithDegrees,
            altitude: 5,
            altitudeAccuracy: 5,
            accuracy: 5,
            heading: 0,
            speed: 0
        }
    };
};

let counter = 0;

setInterval( () => 
{
    Location.EventEmitter.emit( "Expo.locationChanged",
        {
            watchId: Location._getCurrentWatchId(),
            location: getLocation( counter )
        } );

    counter++;
}, 1000 );
