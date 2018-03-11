import { DialogComponent } from './../dialog/dialog.component';
import { Observable } from 'rxjs/observable';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
  isChecked = true;

  colors = [
    { id: 1, name: 'Red' },
    { id: 2, name: 'Green' },
    { id: 3, name: 'Blue' }
  ];
  color = 2;

  categories = [
    { name: 'Beginner' },
    { name: 'Intermediate' },
    { name: 'Advanced' },
  ];

  minDate = new Date(2017, 1, 1);
  maxDate = new Date(2018, 2, 28);

  progress = 0;
  timer;
  isLoading = false;
  constructor(private dialog: MatDialog) {
    this.isLoading = true;
    /*  this.getCourses()
       .subscribe(x => this.isLoading = false); */

    this.timer = setInterval(() => {
      this.progress++;
      if (this.progress === 100) {
        clearInterval(this.timer);
      }
    }, 20);
  }

  ngOnInit() {
  }

  onChange($event) {
    console.log($event);
  }

  selectedCategory(categeory) {
    this.categories
      .filter(c => c !== categeory)
      .forEach(c => c['selected'] = false);

    categeory.selected = !categeory.selected;
  }

  getCourses() {
    // return Observable.timer(2000);
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      data: { courseId: 1 }
    })
      .afterClosed()
      .subscribe(result => console.log(result));
  }
}
