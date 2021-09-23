import "./styles.css";

var billAmount = document.querySelector("#bill");
var cashGiven = document.querySelector("#cash");
var msg = document.querySelector("#message");
var next = document.querySelector("#next");
var check = document.querySelector("#check");
var hiddenTable = document.querySelector("#hidden-table");
var cashHidden = document.querySelector("#hidden");

var notes = [2000, 500, 100, 20, 10, 5, 1];
var noOfNotes = document.querySelectorAll(".output");

function calculateNotes() {
  msg.innerText = "";
  if (billAmount.value < 0) {
    message("Bill amount cannot be less than 0");
    hiddenTable.style.display = "none";
    return;
  }
  if (cashGiven.value < 0) {
    message("Cash cannot be less than 0");
    hiddenTable.style.display = "none";
    return;
  }
  if (billAmount.value > cashGiven.value) {
    message(
      "Given cash is less than the actual bill amount, Ready to Wash Plates?"
    );
    hiddenTable.style.display = "none";
  } else if (billAmount.value === cashGiven.value) {
    msg.innerText = "No change is needed to be given";
    hiddenTable.style.display = "none";
  } else if (billAmount.value < cashGiven.value) {
    var diffAmount = cashGiven.value - billAmount.value;
    var amtToPay = diffAmount;
    hiddenTable.style.display = "block";
    for (var i = 0; i < notes.length; i++) {
      noOfNotes[i].innerText = Math.trunc(diffAmount / notes[i]);
      diffAmount = diffAmount % notes[i];
    }
    message("Return Change : " + amtToPay);
  }
}
function billCheck() {
  if (billAmount.value > 0) {
    cashHidden.style.display = "block";
    next.style.display = "none";
    hideMsg();
  } else if (billAmount.value < 0) {
    message("Bill amount can't be negative value");
  }
}
next.addEventListener("click", billCheck);
check.addEventListener("click", calculateNotes);

function hideMsg() {
  msg.innerText = "";
}
function message(message) {
  msg.innerText = message;
}
