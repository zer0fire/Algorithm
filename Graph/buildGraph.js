class Graph {
    constructor(vert) {
        this.vertices = vert || [];
        this.edges = {}
    }

    addVert(vert) {
        this.vertices.push(vert)
        return this.vertices
    }

    addEdge(vert1, vert2) {
        this.edges[`${vert1}$_${vert2}`] = 1
        return Object.keys(this.edges).length
    }

    deleteEdge(vert1, vert2) {
        delete this.edges[`${vert1}$_${vert2}`]
        return Object.keys(this.edges).length
    }

    showGraph() {
        const list = []
        const keys = Object.keys(this.edges)
        for (var i = 0; i < this.vertices.length; ++i) {
            for (var j = 0; j < keys.length; ++j) {
              if(keys[j].includes(this.vertices[i])) {
                list.push(this.edges[keys[j]].split('$_$'))
              }
            }
        }
        return list
    }
}


function paintGraph(list) {
    let map = new Map()
    for(let i = 0; i < list.length; i++) {
        const start = list[i][0]
        const end = list[i][1]
        let startDOM
        let endDOM
        if (map.has(start)) {
            startDOM = map.get(start)
        } else {
            startDOM = document.createElement('div')
            startDOM.innerText = start
        }
        if (map.has(end)) {
            endDOM = map.get(end)
        } else {
            endDOM = document.createElement('div')
            endDOM.innerText = end
        }
        const startPos = startDOM.getBoundingClientRect()
        const endPos = endDOM.getBoundingClientRect()

    }
}