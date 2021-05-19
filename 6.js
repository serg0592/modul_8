let arrLength = Math.round(Math.random() + 5);
console.log('длина', arrLength);
let a = [];
let similar = 0;
for (let i = 0; i < arrLength; i++) {
    a[i] = Math.round(Math.random() * 100);
    console.log(a[i])
}
for (let j = 0; j < arrLength; j++) {
    for (let h = 1; h < arrLength; h++) {
        if (j != h) {
            if (a[j] === a[h]) {
                console.log('true');
                similar += 1;
            } else {
                console.log('false');
            }
        }
    }
}
if (similar === arrLength) {
    console.log('все элементы одинаковые')
} else {
    console.log('кол-во одинаковых эл-ов', similar)
}