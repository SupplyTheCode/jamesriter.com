import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./page/home";
import { AboutComponent } from "./page/about";
import { ContactComponent } from "./page/contact";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    data: { title: "James Riter - Front End Developer" }
  },
  {
    path: "about",
    component: AboutComponent,
    data: { title: "About James Riter" }
  },
  {
    path: "contact",
    component: ContactComponent,
    data: { title: "Contact James Riter" }
  },

  // otherwise redirect to home
  { path: "**", redirectTo: "" }
];

export const appRoutingModule = RouterModule.forRoot(routes);
