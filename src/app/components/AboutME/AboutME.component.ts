import { Component } from "@angular/core";

@Component({
  selector: "AboutME",
  templateUrl: "./AboutME.component.html",
  styleUrls: ["AboutME.component.scss"]
})
export class AboutME {
  aboutTitle = "About Me";
  aboutContent =
    "I have been work as a developer for over 14 years now and in that time I have worked on just about every aspect of web site development you can think of.  I like to stay focused on front end development and user experience.  I enjoy taking an idea and helping my clients understand what is needed and what could be added to a project to optimize their site for their client's needs.";
}
