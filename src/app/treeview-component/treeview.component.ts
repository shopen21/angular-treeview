import {
  Component, ContentChild, Input, OnChanges, TemplateRef
} from '@angular/core'
import {TreeNode} from "../entities/tree-node"
import {TreeNodeVM} from "./tree-node-vm"
import {LeafItemTemplateComponent} from "./leaf-item-template.component";
import {NodeItemTemplateComponent} from "./node-item-template.component";
import {ControlValueAccessor} from "@angular/forms";

@Component({
  selector: 'tree-view',
  templateUrl: './treeview.component.html',
  styleUrls: ['treeview.component.css']
})
export class TreeViewComponent implements OnChanges {
  @Input() @ContentChild(LeafItemTemplateComponent) leafTemplateHolder: LeafItemTemplateComponent;
  @Input() @ContentChild(NodeItemTemplateComponent) nodeTemplateHolder: NodeItemTemplateComponent;

  @Input() tree: TreeNode[];

  selectedNode: TreeNode = null;

  treeVM: TreeNodeVM[];

  ngOnChanges(): void {
    this.rebuildTreeVM()
  }

  rebuildTreeVM() {
    this.treeVM = this.tree.map((node: TreeNode) => this.getInitialNodeVM(node));
    this.selectedNode = this.treeVM && this.treeVM.length > 0 && this.treeVM[0].node;
  }

  getInitialNodeVM(node: TreeNode): TreeNodeVM {
    return new TreeNodeVM(node, false);
  }

  toggleNode(node: TreeNodeVM) {
    if (!node.children) {
      return;
    }
    node.isExpanded = !node.isExpanded;
  }
}
