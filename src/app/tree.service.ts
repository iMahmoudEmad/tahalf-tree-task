import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TreeService {
  constructor(private http: HttpClient) {}

  getFiles() {
    return this.http
      .get<any>('assets/treeData.json');
  }
}
