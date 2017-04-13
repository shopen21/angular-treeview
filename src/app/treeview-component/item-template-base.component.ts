import {ContentChild, TemplateRef, ViewChild} from "@angular/core";
export class ItemTemplateBaseComponent {
  @ContentChild(TemplateRef) externalTemplate: TemplateRef<any>;

  @ViewChild('innerItemTemplate') template: TemplateRef<any>;
}
