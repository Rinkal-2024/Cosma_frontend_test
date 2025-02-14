import {
  Component,
  ViewEncapsulation,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
} from '@angular/core';
import { BreadCrumbItem } from '@progress/kendo-angular-navigation';
import { ButtonsModule, KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { IconsModule } from '@progress/kendo-angular-icons';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { LayoutModule } from '@progress/kendo-angular-layout';
import {
  arrowRotateCcwIcon,
  homeIcon,
  SVGIcon,
  documentManagerIcon,
  userIcon,
  gearIcon,
  questionCircleIcon,
} from '@progress/kendo-svg-icons';
import { Router } from '@angular/router';
import { ROUTE_PATHS } from 'src/app/app.routes';
import { DEFAULT_LANGUAGE, LANGUAGES } from 'src/app/app.constants';
import { TranslateService } from '@ngx-translate/core';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { TitleCasePipe } from '@angular/common';
import { LanguageService } from 'src/app/shared/services/language.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-header',
  standalone: true,
  imports: [
    KENDO_BUTTONS,
    ButtonsModule,
    NavigationModule,
    IconsModule,
    LayoutModule,
    DropDownsModule,
    TitleCasePipe,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeaderComponent implements OnInit {
  public svgGear: SVGIcon = gearIcon;
  public svgQuestionCircleIcon: SVGIcon = questionCircleIcon;
  public userSvg: SVGIcon = userIcon;

  public user1 = {
    name: 'Mario Rossi',
    role: 'Administrator',
    SVGIcon1: userIcon,
  };

  public hIcon: SVGIcon = homeIcon;
  public items1: BreadCrumbItem[] = [
    {
      text: 'Technical Bulletins',
      title: 'Technical Bulletins',
      svgIcon: documentManagerIcon,
    },
  ];
  //public items1: BreadCrumbItem[] = [...defaultItems];
  public homeIcon: SVGIcon = homeIcon;
  public rotateIcon: SVGIcon = arrowRotateCcwIcon;
  profileData = [
    { text: 'My Profile' },
    { text: 'Change Password' },
    { text: 'Log Out' },
  ];
  user = { firstName: '', lastName: '', accountType: '' };
  public listItems = LANGUAGES;
  public selectedLanguage: string = DEFAULT_LANGUAGE;

  constructor(
    private router: Router,
    private translate: TranslateService,
    private languageService: LanguageService
  ) {
    this.translate.setDefaultLang(DEFAULT_LANGUAGE);
    this.translate.use(DEFAULT_LANGUAGE);
  }

  ngOnInit(): void {
    this.userData();
    this.loadLanguageFromLocalStorage();
  }

  userData() {
    const userData = localStorage.getItem('userData');
    if (userData) {
      try {
        const parsedData = JSON.parse(userData);
        this.user.firstName = parsedData.firstName;
        this.user.lastName = parsedData.lastName;
        this.user.accountType = parsedData.accountType;
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    } else {
      console.warn('No user data found in localStorage.');
    }
  }

  onItemSelect(event): void {
    const selectedItem = event;
    if (selectedItem.text === 'Log Out') {
      this.onLogout();
    } else if (selectedItem.text === 'My Profile') {
      this.router.navigate([ROUTE_PATHS.DASHBOARD, 'profile']);
    }
  }

  onLogout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    this.router.navigate(['/login']);
  }

  onSetting() {
    this.router.navigate([ROUTE_PATHS.DASHBOARD, 'settings']);
  }
  loadLanguageFromLocalStorage() {
    const language = localStorage.getItem('language') || DEFAULT_LANGUAGE;
    this.selectedLanguage = language;
    this.translate.use(language);
  }

  onLanguageChange(selectedLanguage: string) {
    this.selectedLanguage = selectedLanguage;
    this.translate.use(selectedLanguage);
    localStorage.setItem('language', selectedLanguage);

    this.languageService.updateLanguage(selectedLanguage).subscribe(
      (response: unknown) => {
        const res = response as { user: { language: string } };
        this.selectedLanguage = res.user.language;
      },
      (error) => {
        console.error('Error updating language:', error);
      }
    );
  }
}
