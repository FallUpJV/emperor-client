import { Component } from '@angular/core';

@Component ({
	selector: "page-settings",
	templateUrl: "settings.html"
})

export class SettingsPage {
	name: string;

	constructor() {
		this.name = "fdp0";
	}
}