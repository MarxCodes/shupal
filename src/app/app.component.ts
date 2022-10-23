import { AfterContentInit, Component, OnInit } from '@angular/core';
import { BasicServiceService } from './basic-service.service';
import { ChildrenOutletContexts, RouteReuseStrategy } from '@angular/router';
import { routeAnimations } from './animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]

})
export class AppComponent implements OnInit {
  title = 'shupal';

  constructor(private service: BasicServiceService, private contexts: ChildrenOutletContexts) {

  }

  ngOnInit() {
    // this.service.getAllFakeStore().subscribe()
  }


  getRouteAnimationData() {
    // console.log(this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'])
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  // ngAfterContentInit() {
  //   console.log(this.getRouteAnimationData())
  // }

}
