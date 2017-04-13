import {
  Component, ContentChild, Input, OnChanges, TemplateRef
} from '@angular/core'
import {TreeNode} from "../entities/tree-node"
import {TreeNodeVM} from "./tree-node-vm"

@Component({
  selector: 'tree-view',
  templateUrl: './treeview.component.html',
  styleUrls: ['treeview.component.css']
})
export class TreeViewComponent implements OnChanges {
  @Input() private tree: TreeNode[];
  private treeVM: TreeNodeVM[];

  @Input() @ContentChild(TemplateRef) itemTemplate;

  ngOnChanges(): void {
    this.rebuildTreeVM()
  }

  rebuildTreeVM() {
    this.treeVM = this.tree.map((node: TreeNode) => this.getInitialNodeVM(node));
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

  canToggle(node: TreeNodeVM) {
    return node.children && node.children.length > 0;
  }
}
