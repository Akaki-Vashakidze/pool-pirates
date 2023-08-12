import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-kids',
  templateUrl: './star-kids.component.html',
  styleUrls: ['./star-kids.component.scss']
})
export class StarKidsComponent {
  @Input() size:any;
}
