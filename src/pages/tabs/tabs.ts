import { Component } from '@angular/core';
import { Modal, ModalController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { ConnectPage } from '../connect/connect';
import { FriendsPage } from '../friends/friends';
import { SettingsPage } from '../settings/settings';

@Component({
  	templateUrl: 'tabs.html'
})

export class TabsPage {
    modalCtrl: ModalController
    connectModal: Modal;
  	tab1Root: any = HomePage;
  	tab2Root: any = FriendsPage;
  	tab3Root: any = SettingsPage;

  	constructor(modalCtrl: ModalController) {
        this.modalCtrl = modalCtrl;
  		this.connectModal = this.modalCtrl.create(ConnectPage, {});
  		this.connectModal.present();
  	}
}
