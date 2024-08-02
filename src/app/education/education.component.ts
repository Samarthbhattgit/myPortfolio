import { Component, OnInit } from '@angular/core';
import { Education } from '../models/model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

educationInfo: Education[] = [
    {
      institute: 'SAL Engineering and Technical Institute (GTU)',
      course: 'B.E. computer Engineering',
      duration: '2019-2023',
      score: '80%',
    },
    {
      institute: 'Shrddha Vidhya Mandir',
      course: 'HSC',
      duration: '2017-2019',
      score: '63.83%',
    },
    {
      institute: 'Kalyan High School',
      course: 'SSC',
      duration: '2016-2017',
      score: '71.83%',
    },
  ]; 
  constructor() {}

  ngOnInit(): void {
    
  }

}
