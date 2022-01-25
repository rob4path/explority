import { Component, Input, OnInit } from '@angular/core';

import { CdkDragStart } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() title: string;
  @Input() url?: string;
  @Input() isDraggable = false;
  public dragging: boolean;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  handleDragStart(event: CdkDragStart): void {
    this.dragging = true;
    console.log('handleDragStart', this.dragging);
  }

  handleClick(event: MouseEvent): void {
    if (this.dragging) {
      this.dragging = false;
      console.log('handleClick', this.dragging);
      return;
    }
    if (this.url) {
      this.router.navigateByUrl(this.url);
      console.log('btn clicked!');
    }
  }
}
