import { Component } from '@angular/core';

@Component({
  selector: 'app-left-column',
  templateUrl: './left-column.component.html',
  styleUrls: ['./left-column.component.css']
})
export class LeftColumnComponent {
  public fields = [{ 
    text: 'Designer',
    icon: 'fa-briefcase'
  }, {
    text: 'London, UK',
    icon: 'fa-home'
  }, {
    text: 'ex@mail.com',
    icon: 'fa-envelope'
  }, {
    text: '1224435534',
    icon: 'fa-phone'
  }]

  public skills = [{
    text: 'Adobe Photoshop',
    percentage: 90
  }, {
    text: 'Photography',
    percentage: 80
  }, {
    text: 'Illustrator',
    percentage: 75
  }, {
    text: 'Media',
    percentage: 50
  }]

  public languages = [{
    text: 'English',
    width: 100
  }, {
    text: 'Spanish',
    width: 50
  }, {
    text: 'German',
    width: 25
  }]
}
