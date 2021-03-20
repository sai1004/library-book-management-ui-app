import { ErrorHandler, ModuleWithProviders, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "./material.module";

import { RangeValidatorDirective } from "./directives/range.directive";
import { MaxRangeValidatorDirective } from "./directives/maxrange.directive";
import { HeightInInchValidatorDirective } from "./directives/heightInInch.directive";
import { HeightInFtValidatorDirective } from "./directives/heightInInFt.directive";
import { CommaPipe } from "./pipes/custom-pipe";
import { WeightKgValidatorDirective } from "./directives/weightKg.directive";
import { WeightLbValidatorDirective } from "./directives/weightLb.directive";
import { DecimalMask } from "./directives/decimal-mask.directive";
import { ComponentsModule } from "../components/components.module";

@NgModule({
    imports: [CommonModule, FlexLayoutModule, FormsModule, ReactiveFormsModule, HttpClientModule, MaterialModule],
    declarations: [
        RangeValidatorDirective,
        WeightKgValidatorDirective,
        HeightInInchValidatorDirective,
        MaxRangeValidatorDirective,
        HeightInFtValidatorDirective,
        WeightLbValidatorDirective,
        CommaPipe,
        DecimalMask,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        MaterialModule,
        RangeValidatorDirective,
        WeightKgValidatorDirective,
        MaxRangeValidatorDirective,
        HeightInInchValidatorDirective,
        HeightInFtValidatorDirective,
        WeightLbValidatorDirective,
        CommaPipe,
        DecimalMask,
    ],
})
export class SharedModule {}
