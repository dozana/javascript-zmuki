let day = new Date().getDay(); // Get the current day of the week (0-6, where 0 is Sunday)

switch (day) {
  case 0:
    console.log("It's Sunday!");
    break;
  case 1:
    console.log("It's Monday!");
    break;
  case 2:
    console.log("It's Tuesday!");
    break;
  case 3:
    console.log("It's Wednesday!");
    break;
  case 4:
    console.log("It's Thursday!");
    break;
  case 5:
    console.log("It's Friday!");
    break;
  case 6:
    console.log("It's Saturday!");
    break;
  default:
    console.log("Invalid day!");
}