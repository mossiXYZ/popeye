import { Component, OnInit } from '@angular/core';
import { SerieService } from 'src/app/shared/serie.service';

@Component({
  selector: 'app-serie-form',
  templateUrl: './serie-form.component.html',
  styleUrls: ['./serie-form.component.css']
})
export class SerieFormComponent implements OnInit {

  constructor(private serieService: SerieService) { }
  submitted: boolean;
  formControls = this.serieService.form.controls;
  showSuccessMessage: boolean;
  genres =[1,2,3];
  unGenre="coco";
  ngOnInit() {
  }

  onSubmit(){
    this.submitted =true; 
    if(this.serieService.form.valid){
      if ( this.serieService.form.get('$key').value == null)
        this.serieService.insertSerie(this.serieService.form.value);
      else
        this.serieService.updateSerie(this.serieService.form.value); 
   
      this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 3000);


    //if (this.serieService.form.get('$key').value == null){
      //insert
      //else update
      
    this.submitted = false; 
    this.serieService.form.reset();
    }
  }

  onBack(){
    this.serieService.form.reset();
  }
}



