import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule, MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  imports: [RouterLink, MatIconModule],
  templateUrl: './home.html'
})
export class Home {

  public teneillePicture1: string = "/assets/teneille.jpeg"
  public teneillePicture2: string = "/assets/t2.jpg"

}
