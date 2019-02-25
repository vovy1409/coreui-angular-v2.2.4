import { Component, OnInit } from '@angular/core';
import { Major, MajorService } from '../../services/major.service';

@Component({
  selector: 'app-major',
  templateUrl: './major.component.html',
  styleUrls: ['./major.component.scss']
})
export class MajorComponent implements OnInit {
  majors: Major[] = [];
  major: Major = {} as Major;
  constructor(private majorService: MajorService) { }

  ngOnInit() {
    this.majorService.getAll().subscribe(result => {
      this.majors = result.majors;
    });
  }
  save() {
    console.log(this.major);
    this.majorService.add(this.major).subscribe(result => {
    });
  }
}
