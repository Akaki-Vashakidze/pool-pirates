import { Component } from '@angular/core';
import { TranslationService } from 'src/app/modules/shared/services/translation.service';
import { BaseComponent } from 'src/app/modules/shared/utils/base.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent extends BaseComponent {
  constructor(private _tr:TranslationService){
    super(_tr)
  }

}
