import { Component } from "@angular/core";

@Component({
  selector: "MyWork",
  templateUrl: "./MyWork.component.html",
  styleUrls: ["MyWork.component.scss"]
})
export class MyWork {
  MyWorkTitle = "MY WORK";
  MyWorkDesc = "Over the past 14 years, I have been lucky to work with some great local & international companies in a wide range of fields. Here are just a few projects I enjoyed working on.";

  MyWorkList = [
    {
      name: "PaperDate",
      url: "https://www.paperdate.io/", 
      desc: "MiddleMan (Ruby) / SCSS", 
      img: "/assets/img/sites/paperdate.io.webp", 
      imgJpg: "/assets/img/sites/paperdate.io.jpg", 
    },
    {
      name: "StuccowerX",
      url: "http://stuccowerx.com/", 
      desc: "WordPress", 
      img: "/assets/img/sites/stuccowerx.com.webp", 
      imgJpg: "/assets/img/sites/stuccowerx.com.jpg", 
    },
    {
      name: "Talentless",
      url: "https://talentless.co/", 
      desc: "Shopify / SCSS", 
      img: "/assets/img/sites/Talentless.webp", 
      imgJpg: "/assets/img/sites/Talentless.jpg", 
    },
    {
      name: "Shop Salice Rose",
      url: "https://shopsalicerose.com/", 
      desc: "Shopify", 
      img: "/assets/img/sites/ShopSaliceRose.com.webp", 
      imgJpg: "/assets/img/sites/ShopSaliceRose.com.jpg", 
    },
    // 
    {
      name: "Las Vegas Machine & Fab",
      url: "http://lasvegasmachineandfab.com/", 
      desc: "WordPress", 
      img: "/assets/img/sites/lasvegasmachineandfab.com.webp", 
      imgJpg: "/assets/img/sites/lasvegasmachineandfab.com.jpg", 
    },
    {
      name: "We Save Homes",
      url: "https://wesavehomeslv.com/", 
      desc: "MiddleMan (Ruby) / SCSS", 
      img: "/assets/img/sites/wesavehomeslv.com.webp", 
      imgJpg: "/assets/img/sites/wesavehomeslv.com.jpg", 
    },
    // 
    {
      name: "HealthySleep",
      url: "https://healthysleep.org/", 
      desc: "WordPress", 
      img: "/assets/img/sites/HealthySleep.webp", 
      imgJpg: "/assets/img/sites/HealthySleep.jpg", 
    },
    {
      name: "Hells Offspring",
      url: "https://hellsoffspring.com/", 
      desc: "HTML/SCSS/JS", 
      img: "/assets/img/sites/HellsOffspring.com.webp", 
      imgJpg: "/assets/img/sites/HellsOffspring.com.jpg", 
    },
    {
      name: "Influencer.co",
      url: "https://influencer.co/", 
      desc: "Laravel / Blade / SCSS", 
      img: "/assets/img/sites/Influencer.co.webp", 
      imgJpg: "/assets/img/sites/Influencer.co.jpg", 
    },
    {
      name: "JamesRiter",
      url: "http://jamesriter.com/", 
      desc: "Angular / SCSS", 
      img: "/assets/img/sites/jamesriter.com.webp", 
      imgJpg: "/assets/img/sites/jamesriter.com.jpg", 
    },
    {
      name: "Liquor Outlet",
      url: "http://lvliquoroutlet.com/", 
      desc: "WordPress", 
      img: "/assets/img/sites/lvliquoroutlet.com.webp", 
      imgJpg: "/assets/img/sites/lvliquoroutlet.com.jpg", 
    },
    {
      name: "Smart Display",
      url: "https://github.com/chaos67731/Home-Information/tree/1.2.0", 
      desc: "React / API / SCSS", 
      img: "/assets/img/sites/HomeInfo.webp", 
      imgJpg: "/assets/img/sites/HomeInfo.jpg", 
    },
  ];  
}
