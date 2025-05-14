import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule,MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'apiform';
  

  ngOnInit() {
    document.body.style.backgroundColor = '#fec115';
  }
  
} 


