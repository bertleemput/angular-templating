import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent {
  @Input() @HostBinding('style.background') color: string;
}
