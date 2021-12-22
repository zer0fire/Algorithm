function deleteNextNode(p) {
    if (p === null || p.next === null) {
        return
    }
    p.next = p.next.next
}

function deleteNode(head, p) {
    if (p === null || head === null) {
        return
    }
    let prev = null
    let q = head
    while (q !== null) {
        if (q === p) {
            break
        }
    }

    prev.next = prev.next.next
}