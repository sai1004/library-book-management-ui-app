import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ReturnBooksPageComponent } from "./pages/return-books-page/return-books-page.component";

const routes: Routes = [{ path: "", component: ReturnBooksPageComponent }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
