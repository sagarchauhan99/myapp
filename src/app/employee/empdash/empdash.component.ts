import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empdash',
  templateUrl: './empdash.component.html',
  styleUrls: ['./empdash.component.scss']
})
export class EmpdashComponent implements OnInit {
  public name
  public pass
  public id
  constructor() { }

  ngOnInit() {
    getvalue()
  }

}
function getvalue() {

  throw new Error('Function not implemented.');
}

