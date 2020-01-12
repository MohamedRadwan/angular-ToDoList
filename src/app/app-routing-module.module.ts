import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";
import { TodosComponent } from "./components/todos/todos.component";

const routes: Routes = [
  {
    path: "",
    component: TodosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModuleModule {}
