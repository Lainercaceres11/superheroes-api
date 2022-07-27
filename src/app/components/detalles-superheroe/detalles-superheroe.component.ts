import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-detalles-superheroe',
  templateUrl: './detalles-superheroe.component.html',
  styleUrls: ['./detalles-superheroe.component.css']
})
export class DetallesSuperheroeComponent implements OnInit {
  index!: number;
  firstAppearance = ""
  fullname = ""
  publisher = ""
  ocupattion = ""
  groupAffiliation = ""
  imagen = ""

  constructor(private a_r: ActivatedRoute, private _dataService: DataService) { }

  ngOnInit(): void {
    this.index = this.a_r.snapshot.params['id'];
    this._dataService.obtenerDetallesEmpleados(this.index).subscribe(response =>{
      console.log(response)
      this.imagen = response.images.md
      this.firstAppearance = response.biography.firstAppearance
      this.fullname = response.biography.fullName
      this.publisher = response.biography.publisher
      this.ocupattion = response.work.occupation
      this.groupAffiliation = response.connections.groupAffiliation
    })
  }
}
