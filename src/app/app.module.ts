import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { FriendsPage } from '../pages/friends/friends';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { ConnectPage } from '../pages/connect/connect';
import { NewPostPage } from '../pages/newpost/newpost';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    SettingsPage,
    FriendsPage,
    ConnectPage,
    NewPostPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    SettingsPage,
    FriendsPage,
    ConnectPage,
    NewPostPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
