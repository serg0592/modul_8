let arrLength = Math.round(Math.random() + 5);
console.log('длина', arrLength);
let a = [], b, similar = 0, ch = 0, nch = 0, nl = 0;
for (let i = 0; i < arrLength; i++) {
a[i] = prompt();
b = +a[i];
if (isNaN(b) === true){
console.log(a[i], 'NaN');
} else if (a[i] === null){
console.log("null");
nl += 1;
} else if (b%2 === 0){
ch += 1;
console.log(a[i]);
} else {
nch += 1;
console.log(a[i]);
}
}
console.log('четных', ch, ', нечетных', nch, ', null', nl);