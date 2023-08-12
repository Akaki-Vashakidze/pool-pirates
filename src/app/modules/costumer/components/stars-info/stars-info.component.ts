import { Component } from '@angular/core';
import { kidsSkills, skills } from 'src/assets/ENUMS/enums';

@Component({
  selector: 'app-stars-info',
  templateUrl: './stars-info.component.html',
  styleUrls: ['./stars-info.component.scss']
})
export class StarsInfoComponent {
  kidsRules = [
    kidsSkills.JUMP,
    kidsSkills.PUTSHEAD,
    kidsSkills.HOLDBREATH10,
    kidsSkills.DIVESBOTTOM,
    kidsSkills.BACKFLOAT,
    kidsSkills.BACKSTROKE,
    kidsSkills.BREASTSTROKE,
    kidsSkills.ALONE5,
    kidsSkills.HEADDIVE,
    kidsSkills.ACCROSSPOOL
  ]

  Rules = [
    skills.BACKSTROKE,
    skills.BREASTSTROKE,
    skills.FREESTYLE,
    skills.HEADDIVE,
    skills.HOLD25,
    skills.BUTTERFLYUNDERWATER,
    skills.BUTTERFLY,
    skills.LAP30,
    skills.FREETURN,
    skills.LAPS8
  ]
}
