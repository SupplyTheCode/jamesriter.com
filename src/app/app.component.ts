import { Component } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd, Event } from "@angular/router";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  siteName = "JamesRiter.com";
  companyName = "RiterDesign";
  theYear: number = new Date().getFullYear();
  // Title
  constructor(titleService: Title, router: Router, activatedRoute: ActivatedRoute) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        var title = this.getTitle(router.routerState, router.routerState.root).join("-");
        titleService.setTitle(title);
      }
    });
  }
  getTitle(state, parent) {
    var data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if (state && parent) {
      data.push(...this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }
  //
}
