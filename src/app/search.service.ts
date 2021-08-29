
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from './user';
import { Repo } from './repo';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  user!:User;
  repos!:Repo;

  constructor(private http:HttpClient) { 
    this.user = new User("",0,0,0,"","","");
    this.repos = new Repo("","","","",new Date());
  }

  getProfile(username:string){
    interface ApiResponse{
        name:string;
        login: string;
        url:string
        avatar_url:string;
        followers:number;
        following:number;
        public_repos:number;
    }

    let userUrl = 'https://api.github.com/users/'+username+'?client_id='+environment.clientId + "&client_secret="+environment.clientSecret;

    let promise = new Promise<void>((resolve,reject) =>{
      this.http.get<ApiResponse>(userUrl).toPromise().then
      (response => {
        this.user = response;

        resolve()
      },
      error=>{
        this.user.name = "We couldn’t find any users matching the name given"

        reject(error)
        })
      })
      return promise;
    }

    getRepo(username:string){
      interface ApiResponse{
        name:string;
        html_url:string;
        description:string;
        language:string;
        created_at:Date
        
      }
      let repoUrl = 'https://api.github.com/users/'+username+'/repos?order=created&sort=asc?client_id='+environment.clientId + '&client_secret='+environment.clientSecret;
      let promise = new Promise<void>((resolve,reject) =>{
        this.http.get<ApiResponse>(repoUrl).toPromise().then
        (response => {
            this.repos = response;
            console.log(this.repos);
          resolve()
        },
        error=>{
          this.repos.name = "We couldn’t find any repositories matching the name given"
  
          reject(error)
          })
        })
        return promise;

    }
  }