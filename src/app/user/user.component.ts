import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user!:User;
  repos:any;
  
  constructor(public userService:SearchService) {
   }
   searchUser(username:string){
     this.userService.getProfile(username).then((success)=>{
      this.user = this.userService.user;
     },
     (error)=>{
       console.log(error)
     });
     this.userService.getRepo(username).then((success)=>{
      this.repos = this.userService.repos;
     },
     (error)=>{
       console.log(error)
     });
   }

  ngOnInit(): void {
    this.searchUser('sha-lin');
  }

}
