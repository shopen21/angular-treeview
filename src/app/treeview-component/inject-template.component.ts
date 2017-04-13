import {Component, Input, OnInit, ViewContainerRef, TemplateRef} from '@angular/core';

@Component({
  selector: 'inject-template',
  template: ``
})
export class InjectTemplateComponent implements OnInit {
  @Input() template: TemplateRef<any>;
  @Input() data: any;

  constructor(private viewContainer: ViewContainerRef) {
  }

  ngOnInit() {
    if (!this.template) return;

    this.viewContainer.createEmbeddedView(this.template, {data: this.data})
  }
}
