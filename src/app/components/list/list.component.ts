import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  data: any[] = [];

  constructor(private apiService : ApiserviceService,
    private router : Router) {}
  
  ngOnInit(): void {
    this.loadData();
  }

  loadData()
  {
    this.apiService.getList().subscribe((result:any)=>{
      console.log(result);
      this.data = result.data;
      console.log("data",this.data)
    },(error:any)=>{
      console.log(error);
    })
  }

  navigate(user:any)
  {
    console.log("Button clicked...",user);
    this.router.navigate(['/user'],{ queryParams: {id: user.id} });
  }

}
