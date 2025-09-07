console.log("  While-Loop ");
console.log(" =============== ");

// while loop repeatedly executes a block of code as long as a specified condition remains true. The break statement provides a way to terminate the loop's execution prematurely, regardless of whether the loop's condition is still true.

// First Example

let i = 0;

while (i <= 5) {
  console.log(" Number : " + i);
  i++;
}
console.log(" ================================ ");

// Second Example

let count = 0;

while (true) {
  // This creates an infinite loop
  console.log("Current count:" + count);
  count++;

  if (count > 5) {
    console.log("Count exceeded. Exit the loop.");
    break; // Terminates the loop when count is greater than 5
  }
}

console.log(" While Loop is finished. Final count :" + count);

console.log(" ================================ ");

// Third Example

function movie(n) {
  // n= Total capacity of Inox Screen
  let soldTickets = 0;
  let totalTickets = n;
  let avialable;

  console.log(" Total Capacity of Inox Screen is :  " + n);
  console.log(" Welcome to Inox for the Movie !!! ");
  console.log(" ================================ ");

  while (soldTickets <= totalTickets) {
    console.log(" Total Movie Ticket Sold " + soldTickets);
    avialable = totalTickets - soldTickets;
    console.log(" Available Tickets : " + avialable);
    soldTickets++;
  }

  console.log(
    " 😞😢 HouseFull !! Sorry 🙏🙏 , All Movie Tickets are Sold Out !!! "
  );
}

movie(95);

console.log(" ================================ ");
