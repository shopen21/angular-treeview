import { ContentChild, TemplateRef, ViewChild, Input } from "@angular/core";
export class ItemTemplateBaseComponent {
  @ContentChild(TemplateRef) externalTemplate: TemplateRef<any>;
  @ViewChild('innerItemTemplate') template: TemplateRef<any>;
  @Input() label:string;
}
