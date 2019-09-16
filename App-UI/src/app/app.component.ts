import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private apiService : ApiServiceService) { }

  items : any = [];

  ngOnInit(): void {
    this.apiService.getApiData('http://localhost:5000/api/values').subscribe(_ => {
      this.items = _;
    });
  }
}
