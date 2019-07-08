import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
servicesContent=[
  {
    img:"../../../assets/images/icons/rain.svg",
    header:"We’ll Watch the Weather",
    body:"Download our app and we’ll send you a notice if it’s about to rain in the next 20 minutes around your current location. A good rain can be refreshing, but sometimes you just want to stay dry."
  },
  {
    img:"../../../assets/images/icons/wifi.svg",
    header:"Wi-Fi Waypoints",
    body:"We only send you on trips to places we can personally vouch for as being amazing. Which means we’ve mapped out where local wi-fi spots are and marked them in our app’s map view."
  },
  {
    img:"../../../assets/images/icons/globe.svg",
    header:"Global Guides",
    body:"We’ve scoured the entire planet for the best retreats and beautiful vistas. If there’s a corner of the world you want to escape to we know the most scenic and inspiring locations."
  },
  {
    img:"../../../assets/images/icons/fire.svg",
    header:"Survival Kit",
    body:"Everytime you book an escape with us we send you a survival kit with the finest materials. The kit will allow you to setup a tent, start a fire, scratch your own back and lower your taxes."
  }
]
  constructor() { }

  ngOnInit() {
  }

}
