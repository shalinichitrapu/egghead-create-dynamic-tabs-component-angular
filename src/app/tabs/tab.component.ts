import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-tab',
  styles: [
    `
    .pane{
      padding: 1em;
    }
  `
  ],
  template: `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
      <ng-container *ngIf="template"
        [ngTemplateOutlet]="template"></ng-container>
    </div>
  `
})
export class TabComponent {
  @Input() tabTitle: string;
  @Input() active = false;
  @Input() template;
}
