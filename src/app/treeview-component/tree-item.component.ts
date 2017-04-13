import { Component, Input } from '@angular/core'
import { TreeNodeVM } from "./tree-node-vm"

@Component({
    selector: 'tree-item',
    template: `{{node.label}}`
})
export class TreeItemComponent {
    @Input() public node: TreeNodeVM;
}