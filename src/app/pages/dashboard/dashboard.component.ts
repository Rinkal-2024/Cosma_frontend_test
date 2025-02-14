import {
  Component,
  ViewEncapsulation,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerModule } from '@progress/kendo-angular-layout';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ExcelModule } from '@progress/kendo-angular-treelist';
import { PDFModule } from '@progress/kendo-angular-treelist';
import { TreeListModule } from '@progress/kendo-angular-treelist';
import { IconsModule } from '@progress/kendo-angular-icons';
import { LabelModule } from '@progress/kendo-angular-label';
import { ButtonsModule, KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IntlModule } from '@progress/kendo-angular-intl';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { TranslateModule } from '@ngx-translate/core';

import {
  searchIcon,
  fileExcelIcon,
  filePdfIcon,
  fileTxtIcon,
  SVGIcon,
} from '@progress/kendo-svg-icons';
import * as svgIcons from '@progress/kendo-svg-icons';
import { ContextService, GridModule } from '@progress/kendo-angular-grid';
import { LocalizationService } from '@progress/kendo-angular-l10n';

interface dataStatusItem {
  text: string;
  statusItems?: dataStatusItem[];
}
interface dataColumnsItem {
  text: string;
  columnsItems?: dataColumnsItem[];
}

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    DrawerModule,
    InputsModule,
    ExcelModule,
    PDFModule,
    TreeListModule,
    IconsModule,
    LabelModule,
    ReactiveFormsModule,
    FormsModule,
    IntlModule,
    DateInputsModule,
    ButtonsModule,
    KENDO_BUTTONS,
    LayoutModule,
    CommonModule,
    DropDownsModule,
    TranslateModule,
    GridModule
  ],
  providers :[ContextService ,LocalizationService] ,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardComponent {
  public svgSearch: SVGIcon = searchIcon;
  public fileExcelIcon: SVGIcon = fileExcelIcon;
  public filePdfIcon: SVGIcon = filePdfIcon;
  public fileTxtIcon: SVGIcon = fileTxtIcon;
  public allIcons = svgIcons;
  //public value: Date = new Date();
  public range = { start: null, end: null };
  public min: Date = new Date(1987, 2, 10);
  public max: Date = new Date(2050, 2, 10);
  public valueStart: Date = new Date(2024, 2, 7);
  //public valueStart: Date | null = null;
  public valueEnd: Date = new Date(2025, 2, 7);
  //public valueEnd: Date | null = null;

  public source: { text: string; value: number }[] = [
    { text: 'Small', value: 1 },
    { text: 'Medium', value: 2 },
    { text: 'Large', value: 3 },
  ];

  //public selectedType = this.typeData[1];

  public typeData: { text: string; value: number }[];

  constructor() {
    this.typeData = this.source.slice();
  }

  handleFilter(typeValue) {
    this.typeData = this.source.filter(
      (s) => s.text.toLowerCase().indexOf(typeValue.toLowerCase()) !== -1
    );
  }

  public dataStatus1: string[] = [
    'Baseball',
    'Basketball',
    'Cricket',
    'Field Hockey',
    'Football',
    'Table Tennis',
    'Tennis',
    'Volleyball',
  ];
  public statusValue: string[];

  public dataStatus: dataStatusItem[] = [
    {
      text: 'APP - Applicabile',
    },
    {
      text: 'AT - Applicata',
    },
    {
      text: 'IMP - Implementata',
    },
  ];

  public dataColumns: dataColumnsItem[] = [
    {
      text: 'Furniture',
      columnsItems: [
        { text: 'Tables & Chairs' },
        {
          text: 'Sofas',
          columnsItems: [
            { text: 'Bean Bag' },
            { text: 'Armchair' },
            { text: 'Modular' },
          ],
        },
        { text: 'Occasional' },
      ],
    },
    {
      text: 'Decor',
      columnsItems: [
        { text: 'Bed Linen' },
        { text: 'Curtains & Blinds' },
        { text: 'Carpets' },
      ],
    },
  ];

  public tagMapper(tags: string[]): string[] | string[][] {
    return tags.length < 3 ? tags : [tags];
  }

  gridData = [
    { type: "Cel", state: "ANN", description: "Electrical harnesses", date: "12/16/2021", easaAD: "EU 2021-0282", faAD: "F-1986-125-048", pa: "X", sb: "05.00.60 -TELEX", workReport: "IN COSTRUZIONE" },
    { type: "Cel", state: "ANN", description: "Electrical harnesses", date: "12/16/2021", easaAD: "EU 2021-0282", faAD: "F-1986-125-048", pa: "", sb: "05.00.60 -TELEX", workReport: "IN COSTRUZIONE" },
    { type: "Cel", state: "ANN", description: "Electrical harnesses", date: "12/16/2021", easaAD: "EU 2021-0282", faAD: "F-1986-125-048", pa: "", sb: "05.00.60 -TELEX", workReport: "IN COSTRUZIONE" },
    { type: "Cel", state: "ANN", description: "Electrical harnesses", date: "12/16/2021", easaAD: "EU 2021-0282", faAD: "F-1986-125-048", pa: "", sb: "05.00.60 -TELEX", workReport: "IN COSTRUZIONE" },
    { type: "Cel", state: "ANN", description: "Electrical harnesses", date: "12/16/2021", easaAD: "EU 2021-0282", faAD: "F-1986-125-048", pa: "", sb: "05.00.60 -TELEX", workReport: "IN COSTRUZIONE" },
  ];
}
