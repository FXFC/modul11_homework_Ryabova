function getSimleNumber(num) {
  if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        return "Составное число";
      }
    }
    return "Простое число";
  } else {
    return "Число должно быть больше 1";
  }
    
}

console.log(getSimleNumber(1010));

\\не понимаю, как отсортировать числа больше 1000