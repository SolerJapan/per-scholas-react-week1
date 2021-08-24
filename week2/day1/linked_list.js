var ListNode = /** @class */ (function () {
    function ListNode(value) {
        this.value = value;
        this.next = null;
    }
    return ListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.size = 0;
    }
    return LinkedList;
}());
var ll = new LinkedList();
// trying to pop an empty list
console.log(ll.pop());
console.log(ll.push(10));
console.log(ll.push(20));
console.log(ll.push(30));
console.log(ll.pop());
