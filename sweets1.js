// Варіант з while
let count = prompt("скільки цукерок у коробці");
let n = count / 2;
while (count > 0) {
  let q = confirm("Ще цукерку?");
  if (q) {
    count--;
    alert(count);
    if (count > n) {
      alert("багато");
    } else {
      alert("мало");
    }
    if (count < 3) {
      alert("Майже закінчились");
    }
  }
}
alert("Цукерки закінчились!");
