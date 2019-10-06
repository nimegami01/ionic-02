import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tambahpost",
  templateUrl: "./tambahpost.page.html",
  styleUrls: ["./tambahpost.page.scss"]
})
export class TambahpostPage implements OnInit {
  public form = [
    { val: "Action", isChecked: false },
    { val: "Over Power", isChecked: false },
    { val: "Supranatural", isChecked: false },
    { val: "Isekai", isChecked: false }
  ];

  constructor() {}

  ngOnInit() {}
}
