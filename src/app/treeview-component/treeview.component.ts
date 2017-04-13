﻿import { Component, Input, OnChanges, TemplateRef, ContentChild } from '@angular/core'
import { TreeNode } from "../entities/tree-node"
import { TreeNodeVM } from "./tree-node-vm"
import { BehaviorSubject } from "rxjs/BehaviorSubject"


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
export class TreeViewComponent implements OnChanges{
    @Input() private tree: TreeNode[];
    private treeVM: TreeNodeVM[];

    ngOnChanges(): void {
        this.rebuildTreeVM()
    }

    rebuildTreeVM() {
        this.treeVM = this.tree.map((node: TreeNode) => this.getInitialNodeVM(node));
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
}