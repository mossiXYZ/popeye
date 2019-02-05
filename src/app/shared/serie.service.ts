import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  constructor(private firebase: AngularFireDatabase) { }

  serieList: AngularFireList<any>

  form = new FormGroup({
    $key: new FormControl(null),
    title: new FormControl('', Validators.required),
    description: new FormControl(''),
    year: new FormControl(''),
    imgUrl: new FormControl('')
  });

  getSeries(){
    this.serieList = this.firebase.list('series');
    return this.serieList.snapshotChanges();
  }

  insertSerie(serie){
    this.serieList.push({
      title: serie.title,
      description: serie.description,
      year: serie.year,
      imgUrl: serie.imgUrl
    });
  }


  populateFrom(serie){
    this.form.setValue(serie);
  }

  updateSerie(serie){
    this.serieList.update(serie.$key,{
      title: serie.title,
      description: serie.description,
      year: serie.year,
      imgUrl: serie.imgUrl
     });
  }
  deleteSerie($key: string){
    this.serieList.remove($key); 
  }

}
