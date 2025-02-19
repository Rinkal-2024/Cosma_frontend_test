import { Component, ViewChild } from '@angular/core';
import {
  SpreadsheetComponent,
  SpreadsheetMainMenuItem,
  SpreadsheetModule,
} from '@progress/kendo-angular-spreadsheet';
// import { ImportService } from 'src/app/shared/services/import.service';
import { NotificationService } from '@progress/kendo-angular-notification';
import { Router } from '@angular/router';

@Component({
  selector: 'app-import-add',
  standalone: true,
  imports: [SpreadsheetModule],
  templateUrl: './import-add.component.html',
  styleUrl: './import-add.component.scss',
})
export class ImportAddComponent {
  @ViewChild('spreadsheet') spreadsheet: SpreadsheetComponent;
  selectedFile: File;
  fileData = [];
  message: string;

  public items: SpreadsheetMainMenuItem[] = [
    { id: 'file', active: true },
    { id: 'insert' },
  ];
  constructor(
    // private importService: ImportService,
    private notificationService: NotificationService,
     private router: Router,
  ) {}

  onExcelImport(e) {
    this.selectedFile = e.file;
  }

  // validateAndImport() {
  //   if (this.selectedFile) {
  //     this.importService.uploadFile(this.selectedFile).subscribe(
  //       (response) => {
  //         this.message = response.message;
  //         this.importService.setBulletins(response);
  //         this.notificationService.show({
  //           content: this.message,
  //           cssClass: 'k-notification k-notification-success',
  //           animation: { type: 'fade', duration: 400 },
  //           width: 300,
  //           height: 50,
  //         });
  //         this.router.navigate(['/dashboard']);
  //       },
  //       (error) => {
  //         console.error('Error importing data:', error);
  //       }
  //     );
  //   } else {
  //     alert('No file selected! Please select a file to import.');
  //   }
  // }
}
