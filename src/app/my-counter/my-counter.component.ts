import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
@Component({
  selector: "app-my-counter",
  templateUrl: "./my-counter.component.html",
  styleUrls: ["./my-counter.component.css"]
})
export class MyCounterComponent implements OnInit {
  count$: Observable<any>;
  constructor() {}

  ngOnInit(): void {}
  increment() {}
  decrement() {}
  reset() {}
}
