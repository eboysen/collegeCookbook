import { Component } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'college-cookbook';
  collect;
  collecting;
  recipes:any;
  constructor(private store:Firestore){
    this.collect = collection(store,'recipes');
    this.collecting = collectionData(this.collect);
    
    this.collecting.subscribe((res)=>{
      console.log(res);
      this.recipes = res;
    });
  }

  ngOnInit(){
  }
}
