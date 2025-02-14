import {Component, OnInit,} from '@angular/core';
import { GridModule } from '@progress/kendo-angular-grid';
import { NavigationModule,} from '@progress/kendo-angular-navigation';
import {
  LayoutModule,
  DrawerItem,
  DrawerItemExpandedFn,
  DrawerSelectEvent,
} from '@progress/kendo-angular-layout';
import {
  SVGIcon,
  menuIcon,
  unlockIcon,
  lockIcon,
  chevronDownIcon,
  chevronUpIcon,
  arrowRotateCcwIcon,
  homeIcon,
} from '@progress/kendo-svg-icons';
import { IconsModule } from '@progress/kendo-angular-icons';
import {
  ButtonsModule,
  KENDO_BUTTONS,
  ButtonSize,
  ButtonRounded,
  ButtonFillMode,
  ButtonThemeColor,
} from '@progress/kendo-angular-buttons';
import { KENDO_TYPOGRAPHY } from '@progress/kendo-angular-typography';
import { items } from 'src/app/data/items';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [LayoutModule, IconsModule, ButtonsModule, KENDO_TYPOGRAPHY, KENDO_BUTTONS, GridModule, NavigationModule ,TranslateModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit{
    public homeIcon: SVGIcon = homeIcon;
    public rotateIcon: SVGIcon = arrowRotateCcwIcon;
    public sizeMedium: ButtonSize = 'medium';
    public roundedMedium: ButtonRounded = 'medium';
    public fillModeSolid: ButtonFillMode = 'solid';
    public themeBaseColor: ButtonThemeColor = 'base';
    public themePrimaryColor: ButtonThemeColor = 'primary';
    public themeSecondaryColor: ButtonThemeColor = 'secondary';
    public themeTertiaryColor: ButtonThemeColor = 'tertiary';
    public themeInfoColor: ButtonThemeColor = 'info';
    public themeSuccessColor: ButtonThemeColor = 'success';
    public themeWarningColor: ButtonThemeColor = 'warning';
    public themeErrorColor: ButtonThemeColor = 'error';
    public themeDarkColor: ButtonThemeColor = 'dark';
    public themeLightColor: ButtonThemeColor = 'light';
    public themeInverseColor: ButtonThemeColor = 'inverse';
    public selected = 'Inbox';
    public menuSvg: SVGIcon = menuIcon;
    public expandedIndices = [2];
    public unlockSvg: SVGIcon = unlockIcon;
    public lockSvg: SVGIcon = lockIcon;
    public chevronDownSvg: SVGIcon = chevronDownIcon;
    public chevronUpSvg: SVGIcon = chevronUpIcon;
    isOpen = false;

    toggleContent() {
      this.isOpen = !this.isOpen;
    }
    onKeydown(event: KeyboardEvent) {
      if (event.key === 'Enter' || event.key === ' ') {
        this.toggleContent();
        event.preventDefault();
      }
    }

    public isItemExpanded: DrawerItemExpandedFn = (item): boolean => {
      return this.expandedIndices.indexOf(item.id) >= 0;
    };

    public items: DrawerItem[] = items;

    constructor(private router : Router , private translate: TranslateService){}
    ngOnInit(): void {
      // Translate the items on initialization
      this.translateItems();

      this.translate.onLangChange.subscribe(() => {
        this.translateItems();
      });
    }


    public onSelect(ev: DrawerSelectEvent): void {
      this.selected = ev.item.text;
      const current = ev.item.id;
      if (ev.item.navigateTo) {
        this.router.navigate([ev.item.navigateTo]);
      }

      if (this.expandedIndices.indexOf(current) >= 0) {
        this.expandedIndices = this.expandedIndices.filter(
          (id) => id !== current
        );
      } else {
        this.expandedIndices.push(current);
      }
    }
    private translateItems(): void {
      this.items = this.items.map((item) => {
        if (item.text) {
          this.translate.get(item.text).subscribe((translatedText: string) => {
            item.text = translatedText;
          });
        }
        return item;
      });
    }

    public code = `
        const handleChange = ({ target }) => {
          const { name, value } = target;
          const newData = Object.assign({}, data, { [name]: value });
          setData(newData);
        }`;
}
