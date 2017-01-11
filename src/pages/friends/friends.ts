import { Component } from '@angular/core';

@Component({
	selector: "page-friends",
	templateUrl: "friends.html"
})

export class FriendsPage {
	friendsList: string[];
	
	constructor() {
		this.friendsList = ["fdp", "fdp2", "fdp3"];
	}
}