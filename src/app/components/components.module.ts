import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { SharedModule } from "../shared/shared.module";
import { ReturnBookFormComponent } from "./return-book-form/return-book-form.component";

@NgModule({
    declarations: [HeaderComponent, FooterComponent, ReturnBookFormComponent],
    imports: [CommonModule, SharedModule],
    exports: [ReturnBookFormComponent],
})
export class ComponentsModule {}
