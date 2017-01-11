import { Component } from '@angular/core';
import { Modal, ModalController } from 'ionic-angular';

import { NewPostPage } from '../newpost/newpost';

@Component({
  	selector: 'page-home',
  	templateUrl: 'home.html'
})
export class HomePage {
    modalCtrl: ModalController;
	newPostModal: Modal;
	posts: {};
	slideOptions: {};

  	constructor(modalCtrl: ModalController) {
        this.modalCtrl = modalCtrl;
  		this.posts = [{ message: "Bonjour", likes: 2, dislikes: 3 }, { message: "Bonsoir", likes: 50, dislikes: 3 }];
  		this.slideOptions = { direction: "vertical" };
  	}

  	showNewPost() {
        this.newPostModal = this.modalCtrl.create(NewPostPage, {});
        this.newPostModal.present();
  	}

}
