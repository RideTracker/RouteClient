import { AuthClient } from "@ridetracker/authclient";
import { DefaultResponse } from "../../../models/DefaultResponse";

export type GetActivitySessionsAltitudeResponse = DefaultResponse & {
    altitudes: {
        minimum: number;
        maximum: number;
        average: number;
    };

    polylines: {
        points: {
            coordinate: {
                latitude: number;
                longitude: number;
            };

            altitude: number;
        }[];
    }[];
};

export function getActivitySessionsAltitude(client: AuthClient, activityId: string): Promise<GetActivitySessionsAltitudeResponse> {
    const url = new URL(`${client.host}/api/activities/${activityId}/sessions/altitude`);

    return AuthClient.request(client, "GET", url);
};