import { headers } from "../data/headerslist";


export function GetRandomHeader(): string{
    var idx = Math.floor(Math.random() * headers.length);

    return headers[idx];
};