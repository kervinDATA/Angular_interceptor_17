import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NasaService } from './nasa.service'; // Import du service
import { CommonModule } from '@angular/common'; 
import { provideHttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'nasa-image-app';
  imgOfTheDay: string | undefined; // Déclaration de la propriété

  constructor(private nasaService: NasaService) {} // Injection du service

  ngOnInit() {
    this.nasaService.getImageOfTheDay().subscribe(data => {
      this.imgOfTheDay = data.url;
    });
  }
}
