import { UserServiceService } from './../user-service.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-user',
  templateUrl: './set-user.component.html',
  styleUrls: ['./set-user.component.scss']
})
export class SetUserComponent implements OnInit {

  username = '';

  constructor(private userService : UserServiceService) { }

  ngOnInit(): void {
  }

  setUserService(){
    this.userService.setUser(this.username);
  }

  getUserService(){
    console.log(this.userService.getUser());
  }



}
