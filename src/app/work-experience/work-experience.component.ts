import { Component, OnInit } from '@angular/core';
import { WorkExp } from '../models/model';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

WorkExp : WorkExp[] = [
    {
      role: 'Web Developer',
      company: 'Bigscal',
      duration: 'Aug 2023 - Now',
      description: [
        'Working on Helathcare project',
        'Working to develop new Modules to give benifit to Healthcare Industry.',
      ],
    },
    {
      role: 'Web Developer Trinee',
      company: 'Bigscal',
      duration: 'Jan 2023 - july 2023',
      description: [
        'Learn about Industry standered and develop my skills.',
        'Work on diffrent project with multiple language like Java and Angular.',
      ],
    },
  ]
  constructor() {}

  ngOnInit(): void {

  }
}
