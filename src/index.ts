import { AuthClient, RequestMethod } from "@ridetracker/authclient";

export * from "@ridetracker/authclient";

export * from "./models/DefaultResponse";

export * from "./controllers/activities/sessions/getActivitySessionsAltitude";
export * from "./controllers/activities/sessions/getActivitySessionsSpeed";

export class Client extends AuthClient {
    static async request(client: AuthClient, method: RequestMethod, url: URL, initialHeaders?: Record<string, string>, body?: BodyInit | undefined): Promise<any> {
        return new Promise((resolve, reject) => {
            super.request(client, method, url, initialHeaders, body).then(async (response) => {
                if(response.status !== 200)
                    throw new Error("Unexpected HTTP error, status code " + response.status + " " + response.statusText + "\nBody: " + (await response.text()));
            
                const result = await response.json();

                resolve(result);
            }).catch((error: any) => {
                console.error(error);

                if(typeof(error) === "string" && error.startsWith("Unexpected HTTP error"))
                    return resolve({ success: false });

                reject(error);
            });
        });
    };
};

