const data = {
    'a': ['b', 'c'],
    'b': ['a', 'c', 'd'],
    'c': ['a', 'b'],
    'd': ['b']
}

console.warn(data.a);

// console.warn(data.b);
// output:- [ 'a', 'c', 'd' ]