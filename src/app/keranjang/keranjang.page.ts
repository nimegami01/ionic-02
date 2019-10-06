import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-keranjang",
  templateUrl: "./keranjang.page.html",
  styleUrls: ["./keranjang.page.scss"]
})
export class KeranjangPage implements OnInit {
  public kontol = [
    {
      title: "Jonathan joestar",
      img:
        "https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/JoJo_Part_1_Phantom_Blood.jpg/250px-JoJo_Part_1_Phantom_Blood.jpg",
      harga: "50000"
    },
    {
      title: "joseph joestar",
      img:
        "https://vignette.wikia.nocookie.net/jjba/images/2/24/JosukeAnime.PNG/revision/latest/scale-to-width-down/347?cb=20171212081940",
      harga: "7000"
    },
    {
      title: "Josuke Joestar",
      img:
        "https://vignette.wikia.nocookie.net/jjba/images/1/1e/GiornoAV.png/revision/latest/scale-to-width-down/350?cb=20190412003136",
      harga: "2000"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
