import { Client } from "../../..";
import { DefaultResponse } from "../../../models/DefaultResponse";

export type GetActivitySessionsInsightsResponse = DefaultResponse & {
    speed: {
        stats: {
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
    
    altitude: {
        stats: {
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

    battery: {
        polylines: {
            points: {
                batteryLevel: number;
                batteryState: number;
                lowPowerMode?: boolean;
                
                timestamp: number;
            }[];
        }[];
    };
};

export function getActivitySessionsInsights(client: Client, activityId: string): Promise<GetActivitySessionsInsightsResponse> {
    const url = new URL(`${client.host}/api/activities/${activityId}/sessions/insights`);

    return Client.request(client, "GET", url);
};
