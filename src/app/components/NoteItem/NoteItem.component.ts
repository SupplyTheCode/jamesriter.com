import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "NoteItem",
  templateUrl: "NoteItem.component.html",
  styleUrls: ["NoteItem.component.scss"]
})
export class NoteItem implements OnInit {
  @Input() color: string = "teal";
  @Input() background: string;
  @Input() description: string;
  @Input() class: string;

  constructor() {}

  ngOnInit() {}
}
