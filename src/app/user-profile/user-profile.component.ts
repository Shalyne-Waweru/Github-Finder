import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient to enable us to make a request to the API
import { environment } from '../../environments/environment'; // Import environment which is where we put our API url
import { Profile } from '../profile'; // Import the Profile blueprint where we specified what we need from the API

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
 
  constructor() { 

  }

  getProfile(username:string){
    alert(username);
  }

  ngOnInit() {
    
  }

}
