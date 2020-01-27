import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navigations',
  templateUrl: './navigations.component.html',
  styleUrls: ['./navigations.component.css']
})
export class NavigationsComponent implements OnInit {

  constructor(private _route:Router) { }

  ngOnInit() {
  }


  toHome(){
    this._route.navigate([''])
  }
}
