var buttonEl = document.querySelector(".Button");
var buttonAddEl = document.querySelector(".Button-bonus");
var switchButtonEl = document.querySelector(".switchBtn");
var inputNumberEl = document.querySelector(".inputNumber");
var resultEl = document.querySelector(".result");
var firstResultEl = document.querySelector(".firstResult");
var secondResultEl = document.querySelector(".secondResult");
var thirdResultEl = document.querySelector(".thirdResult");
var fourthResultEl = document.querySelector(".fourthResult");
var fifthResultEl = document.querySelector(".fifthResult");
var seventhResult = document.querySelector(".seventhResult");
var eightResult = document.querySelector(".eighthResult");
var nineResult = document.querySelector(".ninthResult");
var nineBonusResult = document.querySelector(".ninthResult-bonus");
var tenthResult = document.querySelector(".tenthResult");
var newArrayValue = document.querySelector(".bonus-array");

buttonEl.addEventListener("click", handleMultitasks);
var numberList = [];

function handleMultitasks() {
  if (inputNumberEl.value === "") {
    alert("Nhập vào giá trị");
    return;
  }
  numberList.push(Number(inputNumberEl.value));
  var totalTask1 = totalPositiveNumber();
  var resultTask2 = countPositiveNumber();
  var resultTask3 = findMinNumber();
  var resultTask4 = findMinPositiveNumber();
  var resultTask5 = findLastEvenNumber();
  var resultTask10 = compareNumberList();
  var resultTask7 = sortArrayFromLess();
  var resultTask8 = findPrimeNumber();
  resultEl.textContent = `Các số trong mảng GỐC bao gồm: ${numberList}`;
  firstResultEl.textContent = totalTask1;
  secondResultEl.textContent = resultTask2;
  thirdResultEl.textContent = resultTask3;
  fourthResultEl.textContent = resultTask4;
  fifthResultEl.textContent = resultTask5;
  seventhResult.textContent = resultTask7;
  eightResult.textContent = resultTask8;
  tenthResult.textContent = resultTask10;
  inputNumberEl.value = "";
}

buttonAddEl.addEventListener("click", () => {
  var resultTask9 = countNewArray();
  nineResult.textContent = resultTask9;
  newArrayValue.value = "";
});

function compareNumberList() {
  var message = "Số dương nhiều hơn số âm";
  var negativeNumberList = [];
  var positiveList = [];

  for (var i = 0; i < numberList.length; i++) {
    if (numberList[i] <= 0) {
      negativeNumberList.push(numberList[i]);
    } else {
      positiveList.push(numberList[i]);
    }
  }

  if (negativeNumberList.length === positiveList.length) {
    message = "Số âm bằng số dương";
  }

  if (negativeNumberList.length > positiveList.length) {
    message = "Số âm nhiều hơn số dương";
  }
  return message;
}
//số nguyên tố chỉ chia hết cho 1 và chính nó, và ko đc chia hết cho khoảng từ 1 tới nó
// 14/2

/*
15
*/

function countNewArray() {
  var newInputValue = +newArrayValue.value;
  numberList.push(newInputValue);
  var count = 0;
  for (var i = 0; i < numberList.length; i++) {
    if (Number.isInteger(numberList[i])) {
      count += 1;
    }
  }

  return `Số lượng số nguyên của cả mảng mới và cũ là ${count}`;
}

function findPrimeNumber() {
  var message = "Đây không phải số nguyên tố";
  if (numberList[0] === 2) return (message = "Số nguyên tố đầu tiên là 2");
  if (numberList[0] === 3) return (message = "Số nguyên tố đầu tiên là 3");
  for (var i = 0; i < numberList.length; i++) {
    if (numberList[i] === 2) return (message = "Số nguyên tố đầu tiên là 2");
    if (numberList[i] === 3) return (message = "Số nguyên tố đầu tiên là 3");

    for (var j = 3; j < numberList[i]; j++) {
      if (numberList[i] % j === 0) {
        console.log("🚀111---->", 111);
        message;
        break;
      }
      if (numberList[i] % j !== 0 && numberList[i] % 2 !== 0) {
        return (message = `Mảng có nguyên tố đầu tiên là ${numberList[i]}`);
      }
    }
    // return message;
  }
  return message;
}

function sortArrayFromLess() {
  var sortNumberList = [...numberList];
  sortNumberList.sort((a, b) => a - b);
  return `Thự tự trong mảng từ nhỏ tới lớn là ${sortNumberList}`;
}

function findMinPositiveNumber() {
  var message = "Mảng ko có số dương";
  var minPositiveNumber = numberList[0];

  if (minPositiveNumber < 0) {
    for (var i = 0; i < numberList.length; i++) {
      if (numberList[i] < 0) {
        message;
      }
      if (numberList[i] > 0) {
        var minNumber = numberList[i];
        if (numberList[i] < 0) {
          return;
        } else {
          message = `Số dương nhỏ nhất trong mảng là ${minNumber}`;
        }
      }
    }
    return message;
  }
  if (minPositiveNumber > 0) {
    for (var i = 0; i < numberList.length; i++) {
      if (numberList[i] < minPositiveNumber && numberList[i] > 0) {
        minPositiveNumber = numberList[i];
      }
      message = `Số dương nhỏ nhất trong mảng là ${minPositiveNumber}`;
    }
  }

  return message;
}

function findPositiveNumber(arrNumber) {
  var positiveNumberList = [];
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > 0) {
      positiveNumberList.push(arrNumber[i]);
    }
  }
  return positiveNumberList;
}

function totalPositiveNumber() {
  var arrPositiveNumber = findPositiveNumber(numberList);
  var total = 0;
  for (var i = 0; i < arrPositiveNumber.length; i++) {
    total += arrPositiveNumber[i];
  }
  return `Tổng các số dương trong mảng là ${total}`;
}

function countPositiveNumber() {
  var arrPositiveNumber = findPositiveNumber(numberList);
  var totalCount = 0;
  arrPositiveNumber.filter((number) => {
    if (number > 0) totalCount++;
  });
  return `Số lượng số dương trong mảng là ${totalCount}`;
}

function findMinNumber() {
  var minNumber = numberList[0];
  for (var i = 0; i < numberList.length; i++) {
    if (numberList[i] < minNumber) {
      minNumber = numberList[i];
    }
  }
  return `Số nhỏ nhất trong mảng là ${minNumber}`;
}

function findLastEvenNumber() {
  // var lastEvenNumber = -1;
  var message = "Mang ko co so chan nen la -1";

  numberList.filter((number) => {
    if (number % 2 === 0) {
      message = `Số chẵn cuối cùng trong mảng là ${number}`;
    }
  });
  return message;
}

switchButtonEl.addEventListener("click", handleSwitch);
function handleSwitch() {
  var newArray = [...numberList];
  var sixthResult = document.querySelector(".sixthResult");
  var firstIndex = +document.querySelector(".first-inputSwitch").value;
  var secondIndex = +document.querySelector(".second-inputSwitch").value;
  var firstValue = newArray[firstIndex];
  var secondValue = newArray[secondIndex];
  newArray[firstIndex] = secondValue;
  newArray[secondIndex] = firstValue;

  sixthResult.textContent = `Thứ tự sau khi đổi chỗ là ${newArray}`;
  document.querySelector(".first-inputSwitch").value = "";
  document.querySelector(".second-inputSwitch").value = "";
}
