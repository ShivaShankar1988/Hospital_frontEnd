import { platformBrowserDynamic } from 'ec2-3-110-50-200.ap-south-1.compute.amazonaws.com';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
