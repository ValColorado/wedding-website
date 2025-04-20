import { Component } from '@angular/core';

@Component({
  selector: 'app-travel-info',
  imports: [],
  templateUrl: './travel-info.component.html',
  styleUrl: './travel-info.component.css'
})
export class TravelInfoComponent {

  venueAddress ="6785 Brown Mountain Beach Rd Lenoir, NC 28645";
  googleMapsUrl:string;
  appleMapsUrl:string;

  constructor() {
    this.googleMapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(this.venueAddress)}`;
    this.appleMapsUrl = `https://maps.apple.com/?q=${encodeURIComponent(this.venueAddress)}`;

  }

   // Dynamically open in the appropriate map app
   openMap(platform: string): void {
    if (platform === 'apple') {
      window.open(this.appleMapsUrl, '_blank');
    } else {
      window.open(this.googleMapsUrl, '_blank');
    }
  }

}
