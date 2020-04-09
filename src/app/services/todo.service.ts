import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Todo } from "../models/Todo";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  todosURL: string = "https://jsonplaceholder.typicode.com/todos";
  todosLimit = "?_limit=5";

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosURL}${this.todosLimit}`);

    // return [
    //   {
    //     id: 1,
    //     title: "Todo 1",
    //     completed: false
    //   },
    //   {
    //     id: 2,
    //     title: "Todo 2",
    //     completed: true
    //   },
    //   {
    //     id: 3,
    //     title: "Todo 3",
    //     completed: false
    //   }
    // ];
  }
}
