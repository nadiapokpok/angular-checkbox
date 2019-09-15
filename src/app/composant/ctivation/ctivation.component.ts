import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ctivation',
  templateUrl: './ctivation.component.html',
  styleUrls: ['./ctivation.component.css']
})
export class CtivationComponent implements OnInit {

  //isDisabled = true;
  isHidden = true;
  
  
  theCheckbox = false;
  constructor() { }

  ngOnInit() {
  }
  flip() {
    //this.isDisabled = !this.isDisabled;
    this.isHidden = !this.isHidden
  }
  myClick() {
    alert('was clicked')
  }
  
  
}

