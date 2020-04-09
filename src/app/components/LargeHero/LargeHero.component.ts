import { Component } from "@angular/core";

@Component({
  selector: "LargeHero",
  templateUrl: "./LargeHero.component.html",
  styleUrls: ["LargeHero.component.scss"]
})
export class LargeHero {
  heroMainHeading = "Welcome";
  heroSubHeading = "I'm a Front-end Developer";
  heroInfo = "I work with start-ups, agencies, small businesses, and large businesses to achieve high-quality websites and outstanding user experience";
  heroSubInfo = "#FullService";
}
