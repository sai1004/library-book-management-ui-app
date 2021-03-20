import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class HttpService {
    headers: HttpHeaders;
    CONTENT_TYPE: string = "application/json; charset=utf-8";

    httpOptions = {
        headers: new HttpHeaders({
            "Content-Type": "application/json",
        }),
    };

    private host = "http://localhost:3000";

    constructor(private http: HttpClient) {}

    get(url: string, data?: any, loader?: boolean) {
        url = this.host + url;
        return this.http.get(url);
    }

    post(url: string, data: any, loader?: boolean) {
        url = this.host + url;
        return this.http.post(url, data, this.httpOptions);
    }

    put(url: string, data: any, loader?: boolean) {
        url = this.host + url;
        return this.http.put(url, data);
    }

    delete(url: string, data: any, loader?: boolean) {
        url = this.host + url;
        return this.http.delete(url + data);
    }

    getById(url: string, Id: any, loader?: boolean) {
        url = this.host + url;
        return this.http.get(url + Id);
    }

    getCoreData(url: string, loader?: boolean) {
        url = this.host + url;
        return this.http.get(url);
    }

    getJsonData(url: string) {
        return this.http.get(url);
    }
}
