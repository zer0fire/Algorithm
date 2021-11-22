/**
 * 
 * @param {String} words 
 */
function maxProduct(words) {
  let map = new Map()
  for(let i in words) {
    let str = words[i]
    let t = 0, m = str.length
    for(let i = 0; i < m; i++) {
      let u = str.charAt(i).charCodeAt() - 'a'.charCodeAt()
      t |= (1 << u)
    }
    if (!map.has(t) || map.get(t) < m) {
      map.set(t, m)
    }
  }
  let ans = 0
  for(let a of map.keys()) {
    for(let b of map.keys()) {
      if ((a & b) === 0) {
        ans = Math.max(ans, map.get(a))
      }
    }
  }
  return ans
}