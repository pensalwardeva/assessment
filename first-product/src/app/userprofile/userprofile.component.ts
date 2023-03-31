import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UrlSegment } from '@angular/router';
import { ApiService } from '../api.service';
import { datamodel } from '../register/model';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  
  data:undefined|any[];

  constructor( private api:ApiService) {}

  ngOnInit() {
    this.getUserProfile()
  }

  getUserProfile(){
    this.api.getUser().subscribe(res=>{
      this.data = res;
    })
  }


  


}
