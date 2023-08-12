import { Component } from '@angular/core';

@Component({
  selector: 'app-stars-info',
  templateUrl: './stars-info.component.html',
  styleUrls: ['./stars-info.component.scss']
})
export class StarsInfoComponent {
  kidsRules = [
    'Jumps in the water',
    'Puts head underwater',
    'Hold breath more than 5 seconds',
    'Swims to the bottom(1.5m)',
    'Lies on back and floats',
    'Swims Backstroke',
    'Swims BreastStroke',
    'Swims Freestyle',
    'Head dive in the pool',
    'Swims across the pool(25m)'
  ]

  Rules = [
    'Swims Backstroke',
    'Swims BreastRoke',
    'Swims Freestyle',
    'Head dive in the pool',
    'Hold breath more than 25 seconds',
    'Can do underwater Butterfly kicks',
    'Swims Butterfly',
    'Swims one lap less than 30 seconds',
    'Can do freestyle turn',
    'Can do 8 laps(200m) without brake'
  ]
}
