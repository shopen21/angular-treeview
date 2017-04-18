import { TreeNode } from "../entities/tree-node"
import { INode } from "app/treeview-component/i-node";

export class TreeNodeVM {
    constructor(
        private innerNode: INode,
        public isExpanded?: boolean
    ) { }

    public get children() {
      return this.innerNode.children;
    }

    public get isLeaf() {
      return this.children == undefined;
    }

    public get node() {
      return this.innerNode;
    }
}
