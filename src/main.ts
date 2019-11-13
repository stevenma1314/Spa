import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
// bootstrap mean starting point it excute the application 
// everyaplication shou have at least one 
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
