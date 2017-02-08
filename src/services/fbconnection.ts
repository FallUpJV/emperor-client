import { Injectable } from '@angular/core';
import { Facebook, Dialogs } from 'ionic-native';
import { AppConfig } from '../app/app.config';

@Injectable()

export class FBConnection {
	connected: boolean = false;
	login(view) {
		Facebook.browserInit(AppConfig["FBID"]);
		Facebook.login(["public_profile", "user_friends"]).then(informations => {
			//Dialogs.alert(informations.status);
			view.dismiss();
		}).catch(error => {
			Dialogs.alert("Connection problems !", "Error");
			//Dialogs.alert(error.errorMessage);
		});
	}

	reloadStatus() {
		Facebook.getLoginStatus().then(informations => {
			this.connected = true;
		}).catch(error => {
			this.connected = false;
		})

		return this.connected;
	}
}