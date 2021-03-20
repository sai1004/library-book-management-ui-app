import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ReturnBooksService } from "src/app/pages/return-books-page/return-books.service";

@Component({
    selector: "app-return-book-form",
    templateUrl: "./return-book-form.component.html",
    styleUrls: ["./return-book-form.component.scss"],
})
export class ReturnBookFormComponent implements OnInit {
    hasUnitNumber = false;
    returnBookform: FormGroup;
    errorMessage: string;
    booksList: any[] = [];

    constructor(private fb: FormBuilder, private _returnService: ReturnBooksService) {}

    ngOnInit() {
        this.returnBookform = this.creatForm();
    }

    @Input()
    profiles: any;

    creatForm() {
        return this.fb.group({
            bookId: [null, Validators.required],
            name: [null, Validators.required],
            email: [null, Validators.required],
            mobile: [null, Validators.required],
            status: [null, Validators.required],
            return_due_date: [null, Validators.required],
            fine: [null, Validators.required],
        });
    }

    checkValidUser() {
        let returnVal = false;
        let currentEmail = this.returnBookform.value.email;

        this.profiles.forEach((profile) => {
            if (currentEmail == profile.email) {
                console.log("email", currentEmail);
                returnVal = true;
            }
        });
        return returnVal;
    }

    onSubmit() {
        // alert("Thanks!");
        if (this.returnBookform.valid) {
            this.checkValidUser();
            if (this.checkValidUser()) {
                this._returnService.sendReturnBookForm(this.returnBookform.value);
            } else {
                this.errorMessage = "User is Not Valid Please Enter valid User Email";
            }
        }
    }

    autoPopulateForm() {
        this.booksList.forEach((book) => {
            if (this.returnBookform.value.bookId == book.bookId) {
                this.returnBookform.patchValue({
                    return_due_date: book["return_due_date"],
                });
            }
        });
    }

    loadBooks() {
        this._returnService.getAllBooks().subscribe((books: any) => {
            if (books) {
                this.booksList = books;
            }
        });
    }
}
