import {Component} from "@angular/core";
import {ItemTemplateBaseComponent} from "./item-template-base.component";

@Component({
  selector: 'leaf-template',
  template: `
    <ng-template #innerItemTemplate let-node>
      <span *ngIf="!externalTemplate">* {{node.label}}</span>
      <ng-template *ngIf="externalTemplate"
                   [ngTemplateOutlet]="externalTemplate"
                   [ngTemplateOutletContext]="{$implicit: node}"></ng-template>
    </ng-template>`
})
export class LeafItemTemplateComponent extends ItemTemplateBaseComponent {
}
