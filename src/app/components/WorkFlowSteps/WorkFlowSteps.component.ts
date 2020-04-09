import { Component } from "@angular/core";

@Component({
  selector: "WorkFlowSteps",
  styleUrls: ["WorkFlowSteps.component.scss"],
  templateUrl: "./WorkFlowSteps.component.html"
})
export class WorkFlowSteps {
  workflowSteps = [
    {
      id: 1, 
      name: "Goals & Planning", 
      desc: "The first thing we will do is sit down and talk about the goals of the site, what the business needs are and most of all, what your user's needs are.  From there we will start planning the order of things to do, and start setting deadlines. ", 
    },
    {
      id: 2, 
      name: "Design & Develop ", 
      desc: "In the planning phase, we should have picked a framework for your site, and now we will start coming up with content, imagery and start developing the site with your business's needs and user's needs in mind.", 
    },
    {
      id: 3, 
      name: "Measure Performance", 
      desc: "After the site is live, we will review all the work and make changes as needed.  After that, we start seeing how users are using your site and often we will find ways to get higher conversions.", 
    }
  ];
}
