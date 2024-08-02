import { Component, OnInit } from '@angular/core';
import { Skills } from '../models/model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills : Skills[] = [
     {
      name: 'Angular, Angular Material',
      level: 'Expert',
      rating: 85,
    },
    {
      name: 'HTML, CSS, JS',
      level: 'Expert',
      rating: 85,
    },
    {
      name: 'JAVA',
      level: 'Intermidiate',
      rating: 70,
    },
  ]
  constructor() {}

  ngOnInit(): void {
    
  }

}
