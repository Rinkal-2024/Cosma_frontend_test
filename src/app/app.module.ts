import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";

import { SharedModule } from './shared/shared.module';

import { LayoutModule } from "@progress/kendo-angular-layout";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { IconsModule } from "@progress/kendo-angular-icons";
import { GridModule } from '@progress/kendo-angular-grid';
import { NavigationModule } from "@progress/kendo-angular-navigation";

import { InputsModule } from "@progress/kendo-angular-inputs";
import { ExcelModule } from "@progress/kendo-angular-treelist";
import { PDFModule } from "@progress/kendo-angular-treelist";
import { TreeListModule } from "@progress/kendo-angular-treelist";
import { LabelModule } from "@progress/kendo-angular-label";

import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { IntlModule } from "@progress/kendo-angular-intl";
import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";


//import { AppComponent } from "./app.component";
//import { ContentComponent } from "./content.component";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ButtonsModule,
    LayoutModule,
    IconsModule,
    SharedModule,
    GridModule,
    NavigationModule,
    InputsModule,
    ExcelModule,
    PDFModule,
    TreeListModule,
    LabelModule,
    ReactiveFormsModule, 
    FormsModule,
    IntlModule,
    DateInputsModule,
    DropDownsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  //declarations: [AppComponent, ContentComponent],
  //bootstrap: [AppComponent],
})
export class AppModule {}
