// Array helper
module.exports.chunk = (a, n) => { const r=[]; for(let i=0;i<a.length;i+=n) r.push(a.slice(i,i+n)); return r; };

// Updated: 1775067399476
