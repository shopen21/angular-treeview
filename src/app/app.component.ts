import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { TreeNode } from "app/entities/tree-node";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tree: TreeNode[] = [
    {
      id: 1, label: "Node 1", children: [
      { id: 4, label: "Leaf 1", children: [] },
      { id: 5, label: "Leaf 2", children: [] }
    ]
    },
    {
      id: 2, label: "Node 2", children: [
      {
        id: 6, label: "Node 3", children: [
        { id: 8, label: "Leaf 5", children: [] },
        { id: 9, label: "Leaf 6", children: [] }
      ]
      },
      { id: 7, label: "Leaf 4", children: [] }
    ]
    },
    { id:3, label: "Leaf 3", children: []}
  ];

  ngOnInit(): void {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            this.tree = [...this.tree, {id: 10 + i, label: "Leaf "+(5+i), children:[]}];
        }, i*1000);
      }
  }
}
