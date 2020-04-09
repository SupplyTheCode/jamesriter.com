import { Component } from "@angular/core";

@Component({
  selector: "MainNavList",
  templateUrl: "./MainNavList.component.html",
})
export class MainNavList {
  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
}
