import { Component } from "@angular/core";

@Component({
  selector: "FindMELinks",
  styleUrls: ["FindMELinks.component.scss"],
  templateUrl: "./FindMELinks.component.html"
})
export class FindMELinks {
  findmeLinks = [
    {
      id: 1, 
      name: "linkedin", 
      link: "https://www.linkedin.com/in/jamesriter", 
      img: "linkedin"
    },
    {
      id: 2, 
      name: "GitHub", 
      link: "https://github.com/chaos67731/resume", 
      img: "github"
    },
    {
      id: 3, 
      name: "Facebook", 
      link: "https://www.facebook.com/JamesRiter", 
      img: "facebook"
    },
    {
      id: 4, 
      name: "CodePen", 
      link: "https://codepen.io/chaos67731", 
      img: "codepen"
    },
    {
      id: 5, 
      name: "Telegram", 
      link: "https://t.me/JamesRiter", 
      img: "telegram"
    },
    {
      id: 6, 
      name: "skype", 
      link: "skype:live:.cid.826ae10c54a9ad80?chat", 
      img: "skype"
    }
  ];
}
