import { Injectable } from "@angular/core";
import { HttpService } from "src/app/shared/services/http.service";

@Injectable({
    providedIn: "root",
})
export class ReturnBooksService {
    private profile_url: string = "/profile";
    private books_url: string = "/books";
    private return_books_url: string = "/return_books";

    constructor(private _http: HttpService) {}

    getAllProfiles() {
        return this._http.get(this.profile_url);
    }

    getAllBooks() {
        return this._http.get(this.books_url);
    }

    sendReturnBookForm(reqData: any) {
        return this._http.post(this.return_books_url, reqData);
    }
}
