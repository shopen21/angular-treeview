import { TreeNode } from "../entities/tree-node"

export class TreeNodeVM {
    constructor(
        private innerNode: TreeNode,
        public isExpanded?: boolean
    ) { }

    public get id() {
      return this.innerNode.id;
    }

    public get label() {
      return this.innerNode.label;
    }

    public get children() {
      return this.innerNode.children;
    }

    public get node() {
      return this.innerNode;
    }
}
