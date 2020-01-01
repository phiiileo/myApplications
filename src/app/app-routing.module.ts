import { AboutAppsComponent } from './Applications/about-apps/about-apps.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RqqaComponent } from './Applications/rqqa/rqqa.component';
import { CalculatorComponent } from './Applications/calculator/calculator.component';
import { TodoAppComponent } from './Applications/todo-app/todo-app.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "todoapp", component: TodoAppComponent },
  { path: "calculator", component: CalculatorComponent },
  { path: "rqqa", component: RqqaComponent },
  { path: "about", component: AboutAppsComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RouteComponents = [
  HomeComponent,
  TodoAppComponent,
  CalculatorComponent,
  RqqaComponent,
  PageNotFoundComponent,
  HeaderComponent,
  FooterComponent,
  HomeComponent,
  AboutAppsComponent
]