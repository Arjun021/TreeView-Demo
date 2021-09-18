import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TreeModel } from './treeView.model';

@Component({
  selector: 'app-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.scss'],
})
export class TreeviewComponent implements OnInit {
  public list: TreeModel[] = [];

  constructor() {}

  ngOnInit() {}

  /**
   * On click of add root button create new node and push in array
   */
  addRootFolder() {
    this.list.push({
      name: '',
      type: 'folder',
      children: [],
      id: this.generateUniqueId(),
    });
    this.list[this.list.length - 1]['isEditable'] = true;
  }

  /**
   * On click li, switch the name to input tag
   * @param item : node object
   */
  onClickList(item: any) {
    item.isEditable = true;
  }

  /**
   * To update the node with new input, if input value will be empty then that node will get removed
   * @param item : node object
   * @param inputValue : current value in input box
   */
  updateNode(item: any, inputValue: any) {
    if (inputValue) {
      item.name = inputValue;
      item.isEditable = false;
    } else {
      this.removeNode(this.list, item.id);
    }
  }

  /**
   * Function is for remove any particular node
   * @param listArray : List array
   * @param removeNodeId : Reference id of object
   * @returns
   */
  removeNode(listArray: any, removeNodeId: any) {
    for (const [i, e] of listArray.entries()) {
      if (e.id === removeNodeId) {
        listArray.splice(i, 1);
        continue;
      }
      if (e.children) {
        this.removeNode(e.children, removeNodeId);
      }
    }
    return listArray;
  }

  /**
   * On click of and folders plus icon, insert button node in  its childeren
   * @param item : node item
   */
  insertNode(item: any) {
    item.children.push({
      name: '',
      type: 'unset',
      children: [],
    });
  }

  /**
   * On click of file or folder selection, change node type and setup node accordingly
   * @param item : node object
   * @param type : 'file': 'folder'
   */
  addFileFolderNode(item: any, type: string) {
    item.type = type;
    item.name = '';
    item.isEditable = true;
    (item.children = []), (item.id = this.generateUniqueId());
  }

  /**
   * This function is for creating unique id
   * @returns : unique id
   */
  generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
}
