import { Injectable } from '@angular/core';
import { Facebook, HTTP, Dialogs } from 'ionic-native';
import { AppConfig } from '../app/app.config';

@Injectable()

export class FBConnection {
	error: any;

	login() {
		Facebook.browserInit(AppConfig["FBID"]);
		let logInformations = Facebook.login(["public_profile", "user_friends"]);
		
		HTTP.post(AppConfig.server, logInformations, {}).catch(error => {
			this.error = error;
			Dialogs.alert(this.error, "Error");
		});
	}
}