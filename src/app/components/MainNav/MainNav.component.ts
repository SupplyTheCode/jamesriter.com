import { Component, HostListener, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "MainNav",
  templateUrl: "./MainNav.component.html",
  styleUrls: ["MainNav.component.scss"],
})
export class MainNav {
  public shouldShow = true;
  constructor(@Inject(DOCUMENT) private document: Document) {}

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("NavHeader").classList.add("bg-black-90");
      document.getElementById("NavHeader").classList.add("NavHeaderDown");
      document.getElementById("NavHeaderSVG").classList.add("NavHeaderSVGDown");
    } else {
      document.getElementById("NavHeader").classList.remove("bg-black-90");
      document.getElementById("NavHeader").classList.remove("NavHeaderDown");
      document.getElementById("NavHeaderSVG").classList.remove("NavHeaderSVGDown");
    }
  }
  name = "MainNav";
}
