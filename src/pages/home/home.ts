import { Component } from '@angular/core';
import { Modal, ModalController } from 'ionic-angular';
import { Dialogs } from 'ionic-native';

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
    likesIncreased: boolean = false;
    dislikesIncreased: boolean = false;

  	constructor(modalCtrl: ModalController) {
        this.modalCtrl = modalCtrl;
  		this.posts = [{ message: "Bonjour", likes: 2, dislikes: 3 }, { message: "Bonsoir", likes: 50, dislikes: 3 }];
  		this.slideOptions = { direction: "vertical" };
  	}

  	showNewPost() {
        this.newPostModal = this.modalCtrl.create(NewPostPage, {});
        this.newPostModal.present();
  	}

    modifyLikes(index, bool) { // True for a like, false for a dislike
        if(bool) {
            if(!this.likesIncreased) {
                this.posts[index].likes++;
                this.likesIncreased = true;

                if(this.dislikesIncreased) {
                    this.posts[index].dislikes--;
                    this.dislikesIncreased = false;
                }
            }
            else {
                this.posts[index].likes--;
                this.likesIncreased = false;
            }
        }
        else  {
            if(!this.dislikesIncreased) {
                this.posts[index].dislikes++;
                this.dislikesIncreased = true;

                if(this.likesIncreased) {
                    this.posts[index].likes--;
                    this.likesIncreased = false;
                }
            }
            else {
                this.posts[index].dislikes--;
                this.dislikesIncreased = false;
            }
        }
    }
}
