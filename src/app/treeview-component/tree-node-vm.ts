import { TreeNode } from "../entities/tree-node"

export class TreeNodeVM {
    constructor(
        private innerNode: TreeNode,
        public isExpanded?: boolean
    ) { }

    public get children() {
      return this.innerNode.children;
    }

    public get label() {
      return this.innerNode.label;
    }

    public get isLeaf() {
      return !this.children || this.children.length === 0;
    }

    public get node() {
      return this.innerNode;
    }
}
