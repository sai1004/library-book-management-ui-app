import { Component, OnInit } from "@angular/core";
import { ReturnBooksService } from "./return-books.service";

@Component({
    selector: "app-return-books-page",
    templateUrl: "./return-books-page.component.html",
    styleUrls: ["./return-books-page.component.scss"],
})
export class ReturnBooksPageComponent implements OnInit {
    profiles: any[] = [];

    constructor(private _returnService: ReturnBooksService) {}

    ngOnInit() {
        this.loadAllProfies();
    }

    loadAllProfies() {
        this._returnService.getAllProfiles().subscribe((data: any) => {
            if (data) {
                this.profiles = data;
            }
        });
    }
}
