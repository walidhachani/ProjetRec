import {Injectable} from "@angular/core";

@Injectable()



export  class AboutService{

  infos ={
    nom :"walid",
    email: "walid@gmail.com",
    tel:"34554333"
  }

  comments=[
    {date:new Date() , message:"A"},
    {date:new Date() , message:"B"},
    {date:new Date() , message:"C"}

  ];
  commentaire={date:null,message:""} ;

  addComment(c){
    c.date=new  Date() ;
    this.comments.push(c) ;

  }

  getAllComments(){
    return this.comments ;
  }

  getInfos(){
    return this.infos ;
  }
}
