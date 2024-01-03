import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { TG_TOKEN } from 'src/env';
import { Telegraf, Markup } from 'telegraf';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

// const bot = new Telegraf(TG_TOKEN);
// // bot.command('start', (ctx) => {
// //   ctx.reply('Hi, Press on button');
// // });
// bot.launch();
