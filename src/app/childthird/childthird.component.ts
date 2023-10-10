import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-childthird',
  templateUrl: './childthird.component.html',
  styleUrls: ['./childthird.component.css']
})
export class ChildthirdComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  @Input() namevalues = 'this is test code';

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked called");
  }
  constructor() {
    console.log("constructer called");
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("ngonchanges called " + changes['namevalues'].currentValue);
  }

  ngOnInit() {
    console.log("ngOnInit called");
  }
  ngDoCheck() {
    console.log("ngDoCheck called");
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit called");
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called");
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit called");
  }
}
