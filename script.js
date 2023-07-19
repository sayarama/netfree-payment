function show_hide() {
  const click = document.getElementById("list-items");
  const tap = document.getElementById("virtual-acc");
  if (click.style.display === "none") {
    click.style.display = "block";
    click.style.borderColor = "none"
    click.style.borderTopColor = "#e7e7e9"
    click.style.borderTopWidth = ".8px"
    tap.style.borderBottom = "none";
    tap.style.borderColor = "#1d8965";
    tap.style.borderBottomLeftRadius = "0";
    tap.style.borderBottomRightRadius = "0"
  } else {
    click.style.display = "none";
    tap.style.borderBottom = "3px solid #e7e7e9";
    click.style.borderColor = "#1d8965"
    tap.style.borderColor = "#e7e7e9"
    tap.style.borderBottomLeftRadius = "10px";
    tap.style.borderBottomRightRadius = "10px"
  }
}

function show_hide1() {
    const click = document.getElementById("list-items1");
    const tap = document.getElementById("virtual-acc1");
    if (click.style.display === "none") {
      click.style.display = "block";
      click.style.borderColor = "none"
      click.style.borderTopColor = "#e7e7e9"
      click.style.borderTopWidth = ".8px"
      tap.style.borderBottom = "none";
      tap.style.borderColor = "#1d8965";
      tap.style.borderBottomLeftRadius = "0";
      tap.style.borderBottomRightRadius = "0"
    } else {
      click.style.display = "none";
      tap.style.borderBottom = "3px solid #e7e7e9";
      click.style.borderColor = "#1d8965"
      tap.style.borderColor = "#e7e7e9"
      tap.style.borderBottomLeftRadius = "10px";
      tap.style.borderBottomRightRadius = "10px"
    }
}

function show_hide2() {
    const click = document.getElementById("list-items2");
    const tap = document.getElementById("virtual-acc2");
    if (click.style.display === "none") {
      click.style.display = "block";
      click.style.borderColor = "none"
      click.style.borderTopColor = "#e7e7e9"
      click.style.borderTopWidth = ".8px"
      tap.style.borderBottom = "none";
      tap.style.borderColor = "#1d8965";
      tap.style.borderBottomLeftRadius = "0";
      tap.style.borderBottomRightRadius = "0"
    } else {
      click.style.display = "none";
      tap.style.borderBottom = "3px solid #e7e7e9";
      click.style.borderColor = "#1d8965"
      tap.style.borderColor = "#e7e7e9"
      tap.style.borderBottomLeftRadius = "10px";
      tap.style.borderBottomRightRadius = "10px"
    }
}

function show_hide3 () {
    const click = document.getElementById("list-items3");
    const tap = document.getElementById("virtual-acc3");
    if (click.style.display === "none") {
      click.style.display = "block";
      click.style.borderColor = "none"
      click.style.borderTopColor = "#e7e7e9"
      click.style.borderTopWidth = ".8px"
      tap.style.borderBottom = "none";
      tap.style.borderColor = "#1d8965";
      tap.style.borderBottomLeftRadius = "0";
      tap.style.borderBottomRightRadius = "0"
    } else {
      click.style.display = "none";
      tap.style.borderBottom = "3px solid #e7e7e9";
      click.style.borderColor = "#1d8965"
      tap.style.borderColor = "#e7e7e9"
      tap.style.borderBottomLeftRadius = "10px";
      tap.style.borderBottomRightRadius = "10px"
    }
}

// function hover () {
//     const press = document.getElementById("green-click")
//     if (press.style.borderColor === "blue") {
//         press.style.borderColor = "blue"
//     } else {
//         press.style.borderColor = "red"
//     }
// }


const countdownTime = 120;

// Function to update the timer
function updateTimer() {
  const timerElement = document.getElementById("timer");
  const currentTime = new Date().getTime();
  const endTime = currentTime + countdownTime * 60 * 1000;

  setInterval(() => {

    const currentTime = new Date().getTime();
    const timeRemaining = endTime - currentTime;

    if (timeRemaining <= 0) {
      updateTimer();
    } else {
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
      timerElement.textContent = minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
    }
  }, 1000);
}


updateTimer();
