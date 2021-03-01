import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';// del fichero se importa la clase App Modulo
import { environment } from './environments/environment';

if (environment.production) { 
  enableProdMode(); // esto arranca el modo produccion
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
