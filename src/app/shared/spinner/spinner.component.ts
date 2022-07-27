import { Component, OnInit } from '@angular/core';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  isLoading$ = this._spinnerService.isLoading$;

  constructor(private _spinnerService: SpinnerService) {}

  ngOnInit(): void {
  }

}
