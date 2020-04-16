import { Component } from "@angular/core";

@Component({
  selector: "MainNavList",
  templateUrl: "./MainNavList.component.html",
})
export class MainNavList {
  OffSet = "-30";
  NavItems = [
    {
      name: "Home",
      url: "Home",
      title: "James Riter",
      class: "color-inherit link pv2 ph1 mh1 pointer",
    },
    {
      name: "About",
      url: "About",
      title: "About - James Riter",
      class: "color-inherit link pv2 ph1 mh1 pointer",
    },
    {
      name: "Work Flow",
      url: "WorkFlow",
      title: "James Riter's Work Flow",
      class: "color-inherit link pv2 ph1 mh1 pointer",
    },
    {
      name: "Services",
      url: "Services",
      title: "James Riter's Services",
      class: "color-inherit link pv2 ph1 mh1 pointer",
    },
    {
      name: "Portfolio",
      url: "Portfolio",
      title: "James Riter's Portfolio",
      class: "color-inherit link pv2 ph1 mh1 pointer",
    },
    {
      name: "Contact",
      url: "Contact",
      title: "Contact James Riter",
      class: "color-inherit link pv2 ph1 mh1 pointer",
    },
  ];
}
