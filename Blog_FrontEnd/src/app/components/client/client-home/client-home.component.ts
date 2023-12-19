import { Component } from '@angular/core';
import { BlogService } from '../../service/blog-service.service';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.css']
})
export class ClientHomeComponent {
  url: string = "/client/home";
  userName: string = '';
  constructor(
    private BlogService: BlogService,
  ) {
    if (this.BlogService.getUserName() !== null) {
      this.userName = this.BlogService.getUserName();
    }

  }


      
    }
