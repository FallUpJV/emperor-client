import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { FBConnection } from '../../services/fbconnection';


@Component({
	selector: "page-connect",
	templateUrl: "connect.html",
	providers: [FBConnection]
})

export class ConnectPage {
	constructor(private view: ViewController, private FacebookConnect: FBConnection) {
	}

	login() {
		this.FacebookConnect.login(this.view);
	}
}