import { Component } from "@angular/core";

@Component({
  selector: "MyServices",
  templateUrl: "./MyServices.component.html",
  styleUrls: ["MyServices.component.scss"]
})
export class MyServices {
  MyServicesSubText = "For all of my clients, I like to maintain a working relationship. So if there is a problem or a new addition to the site, I am always an email or text away.";

  MyServicesList = [
    {
      id: 1, 
      name: "Website Development", 
      desc: "If you need a site developed from the ground up or need new features added to your current site, I am here to help you get the most out of your online presence.  From Wordpress to Angular, I can take on your project.", 
      img: "data", 
    },
    {
      id: 2, 
      name: "WordPress", 
      desc: "Wordpress is great for those that need a site where they can post blogs often, promote products or bands and generally want more control over their site.  I can develop you a fully custom site that is optimized for SEO and performance. ", 
      img: "wordpress", 
    },
    {
      id: 3, 
      name: "Shopify", 
      desc: "Now that you have a product or an idea of a product that you want to sell online.  Having a custom made Shopify site that matches your brand and product is a great way to go.  Let me know you what a Shopify site can do for you.", 
      img: "shopify", 
    },
    {
      id: 4, 
      name: "Email Marketing", 
      desc: "From growing a list to getting your message in front of millions of users or potential clients.  Email marketing has been a solid performer for driving traffic that leads to sales.  Let's build your email templets and start sending it today. ", 
      img: "newsletter", 
    },
    {
      id: 5, 
      name: "Maintenance", 
      desc: "Somtimes your site gets slow due to a hand full of reasons, or maybe you just need a few changes here and there.  No matter what the need is, I am here to be the first and last call you make when you need your site working right away.", 
      img: "repair", 
    },
    {
      id: 6, 
      name: "Project Management", 
      desc: "II have years of experience at managing teams, planning sprints, making sure projects are done on time and under budget and most of all.  Keeping everyone on the same page and driving projects to the finish line. Let's talk about your project's needs.", 
      img: "clipboard", 
    },
    
  ];
}
