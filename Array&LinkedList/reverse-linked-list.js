function reverseList (head) {
    let root = head
    let val = null
    while(root) {
        let ca = root.next
        root.next = val
        root = ca
        val = root
    }
    return val
}