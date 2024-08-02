import { Component, OnInit } from '@angular/core';
import { Project } from '../models/model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'HealthRay',
      technologies: 'Angular',
      description: [
        'Worked as a team lead to build some Modules Like Store,Assets',
        'Got to learn about Angular',
        'Learned Matireal, Ag-grid to build an UI',
      ],
    },
    {
      title: 'RenoVendor',
      technologies: 'Java(SpringBoot), thymeleaf',
      description: [
        'Worked with springBoot and diffrent technologies to solve Renovation difficulty',
        'Learned multiple technologies to build the product.',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
