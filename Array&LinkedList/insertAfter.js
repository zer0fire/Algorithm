function insertAfter(p, val) {
    if (p === null) {
        return
    }
    let newNode = new Node()
    newNode.next = p. next
    p.next = newNode
}