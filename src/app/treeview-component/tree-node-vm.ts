import { TreeNode } from "../entities/tree-node"

export class TreeNodeVM {
    constructor(
        public id: number,
        public isExpanded: boolean,
        public label: string,
        public children: TreeNode[]
    ) { }
}