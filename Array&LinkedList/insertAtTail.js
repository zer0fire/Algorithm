function Node(val, next) {
    this.val = val
    this.next = next
}


let head = new Node()
let tail = head
function insertAtTail(value) {
    let newNode = new Node()
    tail.next = newNode
    tail = newNode
}