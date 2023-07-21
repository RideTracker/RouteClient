import { Client } from "../../..";
import { DefaultResponse } from "../../../models/DefaultResponse";

export type GetActivitySessionsSpeedResponse = DefaultResponse & {
    speeds: {
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

            speed: number;
        }[];
    }[];
};

export function getActivitySessionsSpeed(client: Client, activityId: string): Promise<GetActivitySessionsSpeedResponse> {
    const url = new URL(`${client.host}/api/activities/${activityId}/sessions/speed`);

    return Client.request(client, "GET", url);
};
