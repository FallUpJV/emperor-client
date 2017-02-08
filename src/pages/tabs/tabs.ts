import { Component } from '@angular/core';
import { Modal, ModalController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { ConnectPage } from '../connect/connect';
import { FriendsPage } from '../friends/friends';
import { SettingsPage } from '../settings/settings';
import { FBConnection } from '../../services/fbconnection';

@Component({
    templateUrl: 'tabs.html',
    providers: [FBConnection]
})

export class TabsPage {
    modalCtrl: ModalController;
    connectModal: Modal;
  	tab1Root: any = HomePage;
  	tab2Root: any = FriendsPage;
  	tab3Root: any = SettingsPage;

  	constructor(modalCtrl: ModalController, private FacebookConnect: FBConnection) {
        this.modalCtrl = modalCtrl;
  		this.connectModal = this.modalCtrl.create(ConnectPage, {});
  		if(this.FacebookConnect.reloadStatus() == false) this.connectModal.present();
  	}
}
