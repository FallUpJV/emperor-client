import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component ({
	templateUrl: "newpost.html",
	selector: "page-newpost"
})

export class NewPostPage {
	view: ViewController;
	friendsList: string[];
	post: any;
	messageForUser: string;

	constructor(view: ViewController) {
		this.post = {};
		this.view = view;
		this.friendsList = ["fdp", "fdp2", "fdp3"];
		this.messageForUser = "Something new ?";
	}

	dismiss() {
		this.view.dismiss();
	}
}