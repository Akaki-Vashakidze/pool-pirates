import { Component } from '@angular/core';
import { easySkills,middleSkills,hardskills } from 'src/assets/ENUMS/enums';

@Component({
  selector: 'app-stars-info',
  templateUrl: './stars-info.component.html',
  styleUrls: ['./stars-info.component.scss']
})
export class StarsInfoComponent {
  easySkills = [
    easySkills.JUMP,
    easySkills.PUTSHEAD,
    easySkills.HOLDBREATH10,
    easySkills.DIVESBOTTOM,
    easySkills.BACKFLOAT,
    easySkills.BACKSTROKE,
    easySkills.FLOATS,
    easySkills.ALONE5,
    easySkills.HEADDIVE,
    easySkills.ACCROSSPOOL
  ]

  middleSkills = [
    middleSkills.HOLD25,
    middleSkills.HEADDIVE,
    middleSkills.KICKS,
    middleSkills.BREASTKICK,
    middleSkills.FLIPTURN,
    middleSkills.BACKSTROKE,
    middleSkills.BREASTSTROKE,
    middleSkills.FREESTYLE,
    middleSkills.LAP40,
    middleSkills.UNDERWATER7
  ]

  highSkills = [
    hardskills.BACKSTROKE40,
    hardskills.BREASTSTROKE40,
    hardskills.FREESTYLE35,
    hardskills.BUTTERFLY,
    hardskills.HEADDIVE,
    hardskills.HOLD40,
    hardskills.BUTTERFLYUNDERWATER,
    hardskills.UNDERWATER10,
    hardskills.FREETURN,
    hardskills.LAPS8
  ]
}
