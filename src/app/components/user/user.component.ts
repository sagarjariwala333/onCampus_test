import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @ViewChild('pageContent') pageContent!: ElementRef;
  data: any;
  user: any;

  constructor(private apiService : ApiserviceService,private route: ActivatedRoute) {
    // Access the data sent from the source component using the state object
    this.data = this.route.snapshot.queryParamMap.get('id');

    this.loadData();
    console.log("data",this.data);
  }

  loadData()
  {
    this.apiService.getUser(this.data).subscribe((result:any) => {
      
      this.user = result.data;
      console.log("Single user",this.user);
    },
    (error:any)=>{
      console.log(error);
    })
  }

  downloadPage() {
    const element = this.pageContent.nativeElement;
    html2canvas(element).then((canvas) => {
      // Convert canvas to a data URL (JPEG image)
      const imageDataURL = canvas.toDataURL('image/jpeg');

      // Create a temporary link to trigger download
      const link = document.createElement('a');
      link.href = imageDataURL;
      link.download = 'page_image.jpeg';
      link.click();
    });
  }
  }
