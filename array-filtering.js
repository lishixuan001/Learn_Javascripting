var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filtereven (number) {
  return number % 2 === 0;
}
numbers = numbers.filter(filtereven);
console.log(numbers);
