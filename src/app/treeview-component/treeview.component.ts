import { Component, Input, OnInit,TemplateRef, ContentChild } from '@angular/core'
import { TreeNode } from "../entities/tree-node"
import { TreeNodeVM } from "./tree-node-vm"
import { BehaviorSubject } from "rxjs/BehaviorSubject"

import {TreeItemComponent} from "./tree-item.component"

@Component({
    selector: 'tree-view',
    templateUrl: './treeview.component.html',
    styleUrls: ['treeview.component.css']
})
export class TreeViewComponent implements OnInit{
    @Input() private treeBS: BehaviorSubject<TreeNode[]>;
    private treeVM: TreeNodeVM[];

    ngOnInit(): void {
        this.treeBS.subscribe((newTree: TreeNode[]) => {
            this.rebuildTreeVM(newTree);
        });
    }

    rebuildTreeVM(newTree: TreeNode[]) {
        this.treeVM = newTree.map((node: TreeNode) => this.getInitialNodeVM(node));
    }

    getInitialNodeVM(node: TreeNode): TreeNodeVM {
        return new TreeNodeVM(
            node.id,
            false,
            node.label,
            node.children
        );
    }

    toggleNode(node: TreeNodeVM) {
        if (! node.children) {
            return;
        }
        node.isExpanded = ! node.isExpanded;
    }

    canToggle(node: TreeNodeVM) {
      return node.children && node.children.length > 0;
    }

    getChilden(node: TreeNode): BehaviorSubject<TreeNode[]> {
        return new BehaviorSubject<TreeNode[]>(node.children);
    }
}
