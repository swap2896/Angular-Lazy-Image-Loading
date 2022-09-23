import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  screenWidth = window.innerWidth;  
  screenHeight = window.innerHeight;  
  title = 'lazy-load-images-angular';
  image1 = 'https://images.unsplash.com/photo-1581789164394-810293cd79ce';
  image2 = 'https://images.unsplash.com/photo-1562690868-60bbe7293e94';
  image3 = 'https://images.unsplash.com/photo-1536677813196-8fed27bcecdc';
  image4 = 'https://images.unsplash.com/photo-1599198688091-926a8df3c9be';
}
