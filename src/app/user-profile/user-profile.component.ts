import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient to enable us to make a request to the API
import { environment } from '../../environments/environment'; // Import environment which is where we put our API url
import { User } from '../user-class/user'; // Import the User blueprint where we specified what we need from the API
import { Repository } from '../user-repo-class/repository';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
 
  //1. Create a property 'user' and assign it the type of our 'User' class
  user:User;

  //4. Create a 'repos' array property
  repos:any[];

  //2. Inject a private http property of the type HttpClient in the constructor.
  constructor(private http:HttpClient) { 
    
  }

  getProfile(username:string){
    //3. Create an interface to inform Angular the kind of response we'll receive from the API
    interface ApiResponse{
      avatar_url:string,
      html_url:string,
      login:string,
      followers:number,
      following:number,
      public_repos:number,
      created_at:Date
    }

    this.http.get<ApiResponse>(environment.apiUrl + 'users/' + username).subscribe(data=>{
      // Succesful API request
      this.user = new User(data.avatar_url, data.html_url, data.login, data.followers, data.following, data.public_repos, data.created_at)
    })
  }

  // --------> 5. Get the Repositories Details' from the API
  getRepos(username:string){
    interface RepoApiResponse{
      name:string,
      description:string,
      html_url:string
    }

    this.http.get<RepoApiResponse>(environment.apiUrl + 'users/' + username + '/repos').subscribe((repos:any) =>{
      // Succesful API request   
      this.repos = repos;
    },
    //Failed API request
    error =>{
      console.log("An error has occurred!");
    });
  }

  ngOnInit() {
    
  }

}
