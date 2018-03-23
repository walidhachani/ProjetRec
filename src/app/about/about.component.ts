import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import {AboutService} from "../../services/about.service";


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',

  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  infos:{nom:String , email:String , tel:String} ;
  comments=[] ;
  commentaire={date:null,message:""}

  constructor( private aboutService:AboutService) {
    this.infos=this.aboutService.getInfos() ;
    this.comments=this.aboutService.getAllComments() ;
  }

  ngOnInit() {
  }

  onAddCommentaire(c){
    this.aboutService.addComment(c);

     this.commentaire.message="";

     this.comments= this.aboutService.getAllComments() ;
  }

}
