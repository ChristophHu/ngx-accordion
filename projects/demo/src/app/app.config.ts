import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { routes } from './app.routes';
import { TemplateComponent } from './template/template.component';
import { provideHttpClient } from '@angular/common/http';
import { provideGithubPagesDemo } from '@christophhu/ngx-github-pages-demo';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(),
    provideGithubPagesDemo({ username: 'christophhu', repository: 'ngx-accordion', version: '19.2.0', token: null, template: TemplateComponent }),
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes)
  ]
}
