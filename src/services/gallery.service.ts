import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export  class GalleryService {

  constructor(private http:Http){

  }



  search(motCle:String,size:number,page:number){
   return this.http.get("https://pixabay.com/api/?key=8461247-49e0bc45b8e7c517eabb291da&q="+motCle+"&per_page="+size+"&page="+page)
      .map(resp=>resp.json())


  }


}
