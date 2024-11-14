import {Component} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-hello-world',
  standalone: true,
  imports: [MatButtonModule, MatInputModule, FormsModule],
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.css'
})
export class HelloWorldComponent {
  itemImageurl = "https://cdn.pixabay.com/photo/2022/11/25/09/33/car-7615816_1280.jpg";
  otsikko = "ihanaa ihmiset";


  onbuttonClicked() {

    if(this.itemImageurl == 'https://cdn.pixabay.com/photo/2022/11/25/09/33/car-7615816_1280.jpg')
    {this.itemImageurl = 'https://cdn.pixabay.com/photo/2020/01/31/06/12/glowing-mushrooms-4807192_1280.jpg'}

    else{
      this.itemImageurl = 'https://cdn.pixabay.com/photo/2022/11/25/09/33/car-7615816_1280.jpg'
    }
  }
}