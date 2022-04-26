import { Component, Input } from '@angular/core';
import { AssetsPathService } from './assets-path.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public assetsPath: AssetsPathService,
  ) {}




  ngOnInit(){

  }

  
}
