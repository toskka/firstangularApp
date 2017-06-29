import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { StatusPipe } from "app/shared/pipes/status.pipe";
import { StatusColorPipe } from "app/shared/pipes/statuscolor.pipe";

@NgModule({
    imports: [CommonModule],
    declarations: [StatusPipe, StatusColorPipe],
    providers: [],
    exports: [StatusPipe, StatusColorPipe]
})
export class SharedModule { }