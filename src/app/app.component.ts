import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() { }

  contacts: any = [];

  showError: string = '';
  newUserPhoneNumber: any;
  newUserName: string = '';
  newUserEmail: string = '';
  baseUrl: any = '../assets/user.png';

  addContact() {
    if (this.newUserName !== '' 
    && this.newUserEmail !== '' 
    && this.newUserPhoneNumber !== '') {
      this.contacts.push({
        Source: this.baseUrl,
        Name: this.newUserName,
        Email: this.newUserEmail,
        Number: this.newUserPhoneNumber
      });
      this.showError = '';
      this.newUserName = '';
      this.newUserEmail = '';
      this.newUserPhoneNumber = '';
      this.baseUrl = '../assets/user.png';
    } else {
      this.showError = 'Fields Should not be Empty.';
    }
  }

  fetchImageUrl(event: any) {
    if (event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = ((eve: any) => {
        this.baseUrl = eve.target.result;
      })
    }
  }
}