import { Component } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { TreeNode } from "app/entities/tree-node";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tree: TreeNode[] = [
      {
          id: 1, label: "Folder1", children: [
              { id: 4, label: "File1", children: [] },
              { id: 5, label: "File2", children: [] }
          ]
      },
      {
          id: 2, label: "Folder2", children: [
              {
                  id: 6, label: "Folder4", children: [
                      { id: 8, label: "File5", children: [] },
                      { id: 9, label: "File6", children: [] }
                  ]
              },
              { id: 7, label: "File4", children: [] }
          ]
      },
      { id:3, label: "Folder3", children: []}
  ];

  treeBS = new BehaviorSubject<TreeNode[]>(this.tree);
}
