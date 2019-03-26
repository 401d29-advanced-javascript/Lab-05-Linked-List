'use strict';


class Node {
  constructor(value) {
    this.value = value,
    this.next = null;
  };

  printNode() {
    console.log('printNode(): ', this.value);
    return this.value.toString();
  };

};

let node = new Node(1);
node.printNode();

class LinkedList {
  constructor() {
    this.head = null;
  };

  //Insert Before
  insertBefore(newNode, value){
    let currentNode = head;
    while(currentNode !== value){
      if(currentNode.next === null) {
        return null;
      };
      current = current.next;
    };
    insert(newNode);
    currenNode = head;
    return (newNode)
  };

  //Insert After
  insertAfter(newNode,value) {
    let current = head;
    while(current.next !== value) {
      current = current.next;
    };
    insert(newNode);
    current = head;
    return newNode;
  };

  //Append node at the end of a linked list
  append(node) {
    current = head;
    while(current.next !== null) {
      current.current.next;
    };
    current.next = newNode;
    return current;
    current = head;
  }

  prepend(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    console.log(this.head);
    return this.head;
  };

  includes(value) {
    let currentNode = this.head;
    let isInList = false;
    if(currentNode.value === value) {
      isInList = true;
    };
    console.log('currentNode:',currentNode);
    console.log('before while loop');
    while(currentNode !== null) {
      console.log('currentNode: ', currentNode);
      if(currentNode.value === value) {
        isInList = true;
      };
      currentNode = currentNode.next;
    };
    return isInList;
  };

  print() {
    let currentNode = this.head;
    let str = '';
    if(currentNode === null) {
      return '';//If the list is empty  ie. if the current head of the list exists but has
                         //no value, then the value is null and that is returned instead
    }
    while (currentNode !== null) {
      console.log('print(): ', currentNode.value);
      str += `${currentNode.printNode()} `;
      
      currentNode = currentNode.next;
    };
    return str;
  };

};
let list = new LinkedList();