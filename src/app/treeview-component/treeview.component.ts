import {Component, ContentChild, forwardRef, Input, OnChanges} from '@angular/core'
import {TreeNode} from "../entities/tree-node"
import {TreeNodeVM} from "./tree-node-vm"
import {LeafItemTemplateComponent} from "./leaf-item-template.component";
import {NodeItemTemplateComponent} from "./node-item-template.component";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

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

  @Input() tree: TreeNode[];

  set selectedNode(value: TreeNode) {
    this.selectedNodeField = value;
    this.selectedNodeChange(this.selectedNodeField);
  }

  get selectedNode(): TreeNode {
    return this.selectedNodeField;
  }

  treeVM: TreeNodeVM[];

  private selectedNodeField: TreeNode = null;

  private selectedNodeChange = (_: any) => {
  };

  ngOnChanges(): void {
    this.rebuildTreeVM()
  }

  rebuildTreeVM() {
    this.treeVM = this.tree.map((node: TreeNode) => TreeViewComponent.getInitialNodeVM(node));
  }

  static getInitialNodeVM(node: TreeNode): TreeNodeVM {
    return new TreeNodeVM(node, false);
  }

  toggleNode(node: TreeNodeVM, $event) {
    $event.stopPropagation();
    if (!node.children) {
      return;
    }
    node.isExpanded = !node.isExpanded;
  }

  writeValue(value: TreeNode): void {
    this.selectedNode = value;
  }

  registerOnChange(fn: any): void {
    this.selectedNodeChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  selectNode(nodeVM: TreeNodeVM): void {
    this.selectedNode = nodeVM.node;
  }
}
