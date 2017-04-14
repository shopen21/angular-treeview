import {
  Component, ContentChild, Input, OnChanges, TemplateRef, forwardRef
} from '@angular/core'
import { TreeNode } from "../entities/tree-node"
import { TreeNodeVM } from "./tree-node-vm"
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TreeViewComponent),
    multi: true
};

@Component({
  selector: 'tree-view',
  templateUrl: './treeview.component.html',
  styleUrls: ['treeview.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class TreeViewComponent implements OnChanges, ControlValueAccessor {
  private onChangeCallback = (_:any)=>{};
  private _innerNode: TreeNode;

  set selectedNode(node:TreeNode){
    this._innerNode = node;
    this.onChangeCallback(node);
  }
  get selectedNode():TreeNode{
    return this._innerNode;
  }

  // object we pass througth ngModel
  writeValue(obj: any): void {
    this.selectedNode = obj;
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {}
  setDisabledState(isDisabled: boolean): void {}

  @Input() private tree: TreeNode[];
  private treeVM: TreeNodeVM[];

  @Input() @ContentChild("leafTemplate") leafTemplate:TemplateRef<any>;
  @Input() @ContentChild("nodeTemplate") nodeTemplate:TemplateRef<any>;

  ngOnChanges(): void {
    this.rebuildTreeVM()
  }

  rebuildTreeVM() {
    this.treeVM = this.tree.map((node: TreeNode) => this.getInitialNodeVM(node));
  }

  getInitialNodeVM(node: TreeNode): TreeNodeVM {
    return new TreeNodeVM(node, false);
  }

  nodeClick(node: TreeNodeVM) {
    if (node.isLeaf) {
      this.selectedNode = node;
      return;
    }
    node.isExpanded = !node.isExpanded;
  }

  canToggle(node: TreeNodeVM) {
    return true//node.children && node.children.length > 0;
  }
}
