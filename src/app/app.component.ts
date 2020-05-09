import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: Observable<any[]>;
  title = 'my-diary';
  constructor(firestore: AngularFirestore,public auth: AngularFireAuth) {
    this.auth.authState.subscribe((value)=>{console.log(value)});
  }

  ngOnInit(){
    console.log('hi');
  }

  login() {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.auth.signOut();
  }
}
