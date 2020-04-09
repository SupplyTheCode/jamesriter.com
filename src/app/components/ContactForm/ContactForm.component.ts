import { Component } from "@angular/core";

@Component({
  selector: "ContactForm",
  templateUrl: "./ContactForm.component.html",
  styleUrls: ["ContactForm.component.scss"]
})
export class ContactForm {
  ContactFormTitle = "Let's talk!";
  ContactFormSub = "Feel free to contact me with any questions you may have.";

  ContactFormList = [
    // {
    //   id: 1, 
    //   name: "Call Me", 
    //   desc: "(702) 860-0153", 
    //   img: "phone", 
    // },
    {
      id: 2, 
      name: "Email Me", 
      desc: "me@JamesRiter.com", 
      img: "email", 
    },
    {
      id: 3, 
      name: "MY Locastion", 
      desc: "La Vegas, NV", 
      img: "pin", 
    }
  ];
}
