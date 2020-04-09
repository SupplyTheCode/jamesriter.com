import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { appRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./page/home";
import { AboutComponent } from "./page/about";
import { ContactComponent } from "./page/contact";
import { MainNav } from "./components/MainNav/MainNav.component";
import { NoteItem } from "./components/NoteItem/NoteItem.component";
import { TodosComponent } from "./components/Todos/todos/todos.component";
import { TodoItemComponent } from "./components/todo-item/todo-item.component";
import { MainNavList } from "./components/MainNavList/MainNavList.component";
import { LargeHero } from "./components/LargeHero/LargeHero.component";
import { AboutME } from "./components/AboutME/AboutME.component";
import { WorkFlow } from "./components/WorkFlow/WorkFlow.component";
import { MyServices } from "./components/MyServices/MyServices.component";
import { HireMe } from "./components/HireMe/HireMe.component";
import { MyWork } from "./components/MyWork/MyWork.component";
import { ContactForm } from "./components/ContactForm/ContactForm.component";
import { FindMELinks } from "./components/FindMELinks/FindMELinks.component";
import { WorkFlowSteps } from "./components/WorkFlowSteps/WorkFlowSteps.component";
import { svgSprite } from "./components/svgSprite/svgSprite.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MainNav,
    NoteItem,
    TodosComponent,
    TodoItemComponent,
    MainNavList,
    LargeHero,
    AboutME,
    WorkFlow,
    MyServices,
    HireMe,
    MyWork,
    ContactForm,
    FindMELinks,
    WorkFlowSteps,
    svgSprite,
  ],
  imports: [BrowserModule, appRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
