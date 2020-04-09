import { Component, OnInit, Input } from "@angular/core";
import { Todo } from "src/app/models/Todo";
import { TodoService } from "../../services/todo.service";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.scss"]
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  constructor(private todoServices: TodoService) {}

  ngOnInit(): void {}

  // Set Classes
  setClasses() {
    let classes = {
      todo: true,
      "is-complete": this.todo.completed
    };
    return classes;
  }
  onToggle(todo) {
    todo.completed = !todo.completed;
  }
  onDelete(todo) {
    console.log("delete");
  }
}
