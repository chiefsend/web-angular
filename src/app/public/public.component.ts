import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api/api.service";
import { Share } from "../api/models";

@Component({
  selector: "app-public",
  templateUrl: "./public.component.html",
  styleUrls: ["./public.component.css"],
})
export class PublicComponent implements OnInit {
  shares: Share[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getAllShares().subscribe(
      (data) => {
        this.shares = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
