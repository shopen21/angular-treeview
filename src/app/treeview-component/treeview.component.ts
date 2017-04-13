import { Component, Input, OnInit,TemplateRef, ContentChild } from '@angular/core'
import { TreeNode } from "../entities/tree-node"
import { TreeNodeVM } from "./tree-node-vm"
import { BehaviorSubject } from "rxjs/BehaviorSubject"

import {TreeItemComponent} from "./tree-item.component"

@Component({
    selector: 'tree-view',
    templateUrl: './treeview.component.html',
    styles: [`
        .inner-tree{
            padding-left: 5px;
        }
        .inactive{
            color: grey;
        }
        ul{
            list-style-type: none;
        }
    `]
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

    private toggleNode(node: TreeNodeVM) {
        if (! node.children) {
            return;
        }
        node.isExpanded = ! node.isExpanded;
    }

    private getChilden(node: TreeNode): BehaviorSubject<TreeNode[]> {
        return new BehaviorSubject<TreeNode[]>(node.children);
    }
}