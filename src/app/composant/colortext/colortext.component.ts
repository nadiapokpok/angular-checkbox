import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colortext',
  templateUrl: './colortext.component.html',
  styleUrls: ['./colortext.component.css']
})
export class ColortextComponent implements OnInit {

    marked = false;
    theCheckbox = false;
  constructor() { }

  ngOnInit() {
  }

  colour(e){
    this.marked= e.target.checked;
  }
}
