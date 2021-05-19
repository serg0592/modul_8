let arrLength = Math.round(Math.random() * 10);
console.log('длина', arrLength);
let a = [];
for (let i=0; i<arrLength; i=i+1) {
    a[i] = prompt();
}
for (i=0; i<arrLength; i=i+1) {
    console.log(a[i]);
}