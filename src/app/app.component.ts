import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'data-manage';

  constructor(private route:ActivatedRoute, public location:Location){}
  // ngOnInit() {
  //   console.log(this.route.snapshot.url)
  //   }
}
