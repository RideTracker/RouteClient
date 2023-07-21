import { Client } from "../../..";
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

export function getActivitySessionsAltitude(client: Client, activityId: string): Promise<GetActivitySessionsAltitudeResponse> {
    const url = new URL(`${client.host}/api/activities/${activityId}/sessions/altitude`);

    return Client.request(client, "GET", url);
};