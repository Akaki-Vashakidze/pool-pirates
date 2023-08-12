import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-off',
  templateUrl: './star-off.component.html',
  styleUrls: ['./star-off.component.scss']
})
export class StarOffComponent implements OnInit {
  @Input() size:any;

  ngOnInit(): void {
  }
}
