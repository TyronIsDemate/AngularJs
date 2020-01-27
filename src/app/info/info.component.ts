import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  loading = true;
  loaded = false;

  constructor(private _route: ActivatedRoute, private apiServe: ApiServiceService) { }
  data: any

  ngOnInit() {
    const id = this._route.snapshot.params['id'] - 1
    this.apiServe.getData().subscribe(data => {
      console.log(data[id]);
      this.data = data[id]
    })
  }
}
