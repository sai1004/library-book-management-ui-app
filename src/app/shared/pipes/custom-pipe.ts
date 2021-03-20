import { Pipe, PipeTransform } from "@angular/core";

// import * as moment from "moment";

// @Pipe({
//     name: "age",
// })
// export class AgePipe implements PipeTransform {
//     transform(value: string | moment.Moment): any {
//         if (!value) return value;

//         return moment().diff(value, "years") + " Years Old";
//     }
// }

@Pipe({
    name: "comma",
})
export class CommaPipe implements PipeTransform {
    transform(value: any): any {
        if (!value) return value;
        return new Intl.NumberFormat("en-IN").format(value);
    }
}
