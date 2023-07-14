import { Component } from '@angular/core';
import { TreeService } from './tree.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TreeService],
})
export class AppComponent {
  table!: any;
  loading: boolean = false;
  selectedEntity!: { label: string; properties: any[]; children: any[] };

  constructor(private treeService: TreeService) {
    this.loading = true;

    this.treeService.getFiles().subscribe((nodes) => {
      this.loading = false;
      this.table = [nodes];
    });
  }
}
