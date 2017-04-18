import { Component, OnInit } from '@angular/core';
import { TreeNode } from "app/entities/tree-node";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tree: any[] = [
    {
      id: 1, label: "Node 1", children: [
      { id: 4, label: "Node 1", children: [] },
      { id: 5, name: "Leaf 2"}
    ]
    },
    {
      id: 2, label: "Node 2", children: [
      {
        id: 6, label: "Node 4", children: [
        { id: 8, name: "Leaf 5" },
        { id: 9, name: "Leaf 6" }
      ]
      },
      { id: 7, name: "Leaf 4" }
    ]
    },
    { id:3, name: "Leaf 3"}
  ];

  selectedItem: any = 6;
  treeDisabled:boolean = false;

  // selectSpecificNode(): void {
  //   this.selectedItem = this.tree[0].children[1];
  // }

  ngOnInit(): void {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            this.tree = [...this.tree, {id: 10 + i, name: "Leaf "+(5+i)}];
        }, i*1000);
      }
  }
}
