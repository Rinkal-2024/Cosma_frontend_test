import { HttpClient, provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom, LOCALE_ID } from '@angular/core';
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';
import { provideTranslateService } from "@ngx-translate/core";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CldrIntlService, IntlService } from '@progress/kendo-angular-intl';
import { DEFAULT_LANGUAGE } from 'src/app/app.constants';

import '@progress/kendo-angular-intl/locales/en/all';
import '@progress/kendo-angular-intl/locales/de/all';
import '@progress/kendo-angular-intl/locales/it/all';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: IntlService,
      useClass: CldrIntlService,
    },
    {
      provide: LOCALE_ID,
      useValue: DEFAULT_LANGUAGE
    },
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideHttpClient(),
    provideTranslateService({defaultLanguage: DEFAULT_LANGUAGE}),
    importProvidersFrom(
      BrowserAnimationsModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      }),
    )
  ],
};
