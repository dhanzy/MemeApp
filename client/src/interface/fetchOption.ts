export interface FetchOptions {
    method: "POST" | "GET" | "PUT" | "DELETE";
    headers?: {
        'Content-Type': string;
        'Authorization'?: string;
    };
    body?: BodyInit;
    credentials: RequestCredentials;
}