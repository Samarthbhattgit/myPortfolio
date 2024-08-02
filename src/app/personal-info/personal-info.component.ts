import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  myData: string[][] =[
    ['Name' , 'Samarth Bhatt'],
    ['DOB', '23/07/2001'],
    ['Work Exp', '1.5 Years'],
    ['Education', 'B.E (2023)'],
    ['Interests', 'cars & bike'],
  ];

  aboutMe: string[] = [
    'Hi, I am a Software Engineer with 1.5 years of experience in software industry.',
    'Worked as trainee and developer in Bigscal for various technologies',
    'Delivered all product withing deadlines. Always eager to learn new technologies.',
    // 'Currently, working as CEO of Google Alphabet',
  ];

  constructor() {}

  ngOnInit(): void {
    
  }

}
