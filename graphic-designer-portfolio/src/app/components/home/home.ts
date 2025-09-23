import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html'
})
export class Home {

  public teneillePicture1: string = "/assets/teneille.jpeg"
  public teneillePicture2: string = "/assets/t2.jpg"

}
