function Hitung() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let operator = Number(document.getElementById("operator").value);

  let hasil;

  switch (operator) {
    case 1:
      hasil = num1 + num2;
      break;
    case 2:
      hasil = num1 - num2;
      break;
    case 3:
      hasil = num1 * num2;
      break;
    case 4:
      hasil = num1 / num2;
      break;
    default:
      hasil = "input tidak valid";
      break;
  }

  document.getElementById("hasilp").innerHTML = hasil;
}

function show() {
  let message = document.getElementById("message");
  message.classList.toggle("show");
}
