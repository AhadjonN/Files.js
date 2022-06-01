const a = { x: 1, y: 1 };
const b = { x: 8, y: 4 };
const t1 = b.y - a.y;
const t2 = b.x - a.x;
const D = Math.sqrt(Math.pow(t1, 2) + Math.pow(t2, 2));
console.log(t1, t2)

