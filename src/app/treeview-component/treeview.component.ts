import {Component, ContentChild, forwardRef, Input, OnChanges} from '@angular/core'
import {TreeNode} from "../entities/tree-node"
import {TreeNodeVM} from "./tree-node-vm"
import {LeafItemTemplateComponent} from "./leaf-item-template.component";
import {NodeItemTemplateComponent} from "./node-item-template.component";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { INode } from "app/treeview-component/i-node";

@Component({
  selector: 'tree-view',
  templateUrl: './treeview.component.html',
  styleUrls: ['treeview.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TreeViewComponent),
      multi: true
    }
  ]
})
export class TreeViewComponent implements OnChanges, ControlValueAccessor {
  @Input() @ContentChild(LeafItemTemplateComponent) leafTemplateHolder: LeafItemTemplateComponent;
  @Input() @ContentChild(NodeItemTemplateComponent) nodeTemplateHolder: NodeItemTemplateComponent;
  @Input() tree: INode[];
  @Input() ngModelProperty: string;  

  @Input() isDisabled: boolean;

  set selectedItem(value: any) { 
    if(value === this.selectedNodeField){
      return;
    }
    this.selectedNodeField = value;
    this.selectedNodeChange(this.selectedNodeField);
  }

  get selectedItem(): any {
    return this.selectedNodeField;
  }

  treeVM: TreeNodeVM[];

  private selectedNodeField: any = null;

  private selectedNodeChange = (_: any) => {
  };
  
  private nodeTouched = (_: any) => {
  };

  ngOnChanges(): void {
    this.rebuildTreeVM()
  }

  rebuildTreeVM() {
    this.treeVM = this.tree.map((node: INode) => TreeViewComponent.getInitialNodeVM(node));
  }

  static getInitialNodeVM(node: INode): TreeNodeVM {
    return new TreeNodeVM(node, false);
  }

  toggleNode(node: TreeNodeVM, $event) {
    $event.stopPropagation();
    if (!node.children || this.isDisabled) {
      return;
    }
    node.isExpanded = !node.isExpanded;
  }

  writeValue(value: any): void {
    this.selectedItem = value;
  }

  registerOnChange(fn: any): void {
    this.selectedNodeChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.nodeTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  selectNode(nodeVM: TreeNodeVM): void {
    if(this.isDisabled)
    {
      return;
    }
    this.selectedItem = this.ngModelProperty ? nodeVM.node[this.ngModelProperty]:nodeVM.node;
    this.nodeTouched(nodeVM);
  }
}
