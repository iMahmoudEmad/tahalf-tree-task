import { Component, Input } from '@angular/core';
import { TreeService } from 'src/app/tree.service';

@Component({
  selector: 'app-child-details',
  templateUrl: './child-details.component.html',
  styleUrls: ['./child-details.component.scss'],
})
export class ChildDetailsComponent {
  @Input({ required: true }) entity!: any;
  loading: boolean = false;
  concatValue!: any[];

  constructor(private treeService: TreeService) {
  }

  expandTree(event: any) {
    if (event.node) {
      this.loading = true;

      this.treeService.getFiles().subscribe((nodes) => {
        // event.node.children = [nodes];
        this.loading = false;
      });
    }
  }
}
