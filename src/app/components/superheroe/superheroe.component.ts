import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-superheroe',
  templateUrl: './superheroe.component.html',
  styleUrls: ['./superheroe.component.css']
})
export class SuperheroeComponent implements OnInit {
listData: any[] = []; 
loading = true

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this.getPersonajes();
  }

  getPersonajes(){
    this.loading = true
    this._dataService.obtenerPersonajes().subscribe(res =>{
      console.log('respuesta', res.items)
      this.listData = []
      this.listData = res.items
      this.loading = false
    })
  }

}
