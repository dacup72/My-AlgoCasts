// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    // this.head = new Node(data, this.head);
    this.insertAt(data, 0);
  }

  size() {
    let node = this.head;
    let counter = 0

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    // return this.head;
    return this.getAt(0);
  }

  getLast() {
    // if (!this.head) {
    //   return null;
    // }

    // let node = this.head;
    // while (node) {
    //   if (!node.next) {
    //     return node;
    //   }
    //   node = node.next;

    // }
    return this.getAt(this.size() -1);
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return null;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return null;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let node = this.head;
    let prevNode = null;

    while (node.next) {
      prevNode = node;
      node = node.next
    }

    prevNode.next = null;
  }

  insertLast(data) {
    // if(!this.head) {
    //   this.head = new Node(data);
    //   return;
    // }

    // this.getLast().next = new Node(data);
    this.insertAt(data, this.size());
  }

  getAt(num) {
    let i = 0;
    let node = this.head;

    while(node) {
      if(i === num) {
        return node;
      }
      node = node.next;
      i++;
    }
    return null;
  }

  removeAt(num) {
    if(!this.head) {
      return null;
    }

    if(num === 0) {
      this.removeFirst();
      return;
    }

    let prevNode = this.getAt(num - 1);
    if(!prevNode || !prevNode.next) {
      return null;
    }

    prevNode.next = prevNode.next.next;
  }

  insertAt(data, index) {
    if(!this.head) {
      this.head = new Node(data);
      return;
    }

    if(index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;

    
  }
}

module.exports = { Node, LinkedList };
