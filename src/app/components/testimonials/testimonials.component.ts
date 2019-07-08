import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
cards=[
  {
    img:"../../../assets/images/testimonial-jane.jpg",
    name:"Jane Doe",
    text:"9 Time Escaper",
    content:"“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”"
  },
  {
    img:"../../../assets/images/testimonial-john.jpg",
    name:"John Smith",
    text:"4 Time Escaper",
    content:"“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur.”"
  },
  {
    img:"../../../assets/images/testimonial-cat.jpg",
    name:"Cat McKitty",
    text:"6 Time Escaper",
    content:"“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.”"
  }
]
  constructor() { }

  ngOnInit() {
  }

}
