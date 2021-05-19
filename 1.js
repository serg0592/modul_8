let a=prompt('Введите число');
a=+a;
console.log(typeof(a), a);
console.log("NaN ?", isNaN(a));
if (a%2 === 0){
    console.log('четное');
} else if (a%2 === 1) {
    console.log('нечетное');
} else {
    console.log('Упс, кажется вы ошиблись');
}