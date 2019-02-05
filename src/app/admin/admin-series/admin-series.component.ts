import { Component, OnInit } from '@angular/core';
import { SerieService } from 'src/app/shared/serie.service';

@Component({
  selector: 'app-admin-series',
  templateUrl: './admin-series.component.html',
  styleUrls: ['./admin-series.component.css']
})
export class AdminSeriesComponent implements OnInit {

  constructor(private serieService: SerieService) { }
  searchText: string ="";
  serieArray=[];
  showDeleteMessage: boolean;
  ngOnInit() {
    this.serieService.getSeries().subscribe(
      list =>{
        this.serieArray = list.map( item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        })
      });
  }


  onDelete($key){
    if(confirm('Are you sure to delete this record ? ')){
      this.serieService.deleteSerie($key);
      this.showDeleteMessage = true;
      setTimeout(()=> this.showDeleteMessage = false , 3000);
    }
  }
  filterCondition(serie){
    return serie.title.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }

}
