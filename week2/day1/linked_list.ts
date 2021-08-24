class ListNode<T> {
    value: T;
    next: ListNode<T> | null;
    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList<T> {
    head: ListNode<T> | null;
    size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    // push method 
  
  	// pop method
}

const ll = new LinkedList<number>();

// trying to pop an empty list
console.log(ll.pop());

console.log(ll.push(10));
console.log(ll.push(20));
console.log(ll.push(30));

console.log(ll.pop());