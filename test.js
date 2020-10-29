const shifts = [
  { start: 6, end: 12 },
  { start: 8, end: 16 },
  { start: 22, end: 23 },
  { start: 4, end: 12 },
  { start: 4, end: 5 },
  { start: 23, end: 9 },
  { start: 24, end: 8 },
  { start: 4, end: 23 },
  { start: 22, end: 4 }
];

const getHoursBetween = (start, end, shift = false) => {

  const hours = [];

  if (start < end) {
    for (let i = start; i < end; i++) hours.push(i);
  }

  if (start > end) {
    for (let i = start; i <= 24; i++) hours.push(i);

    if (shift) {
      for (let i = 1; i <= end; i++) hours.push(i);
    }
    else {
      for (let i = 1; i < end; i++) hours.push(i);
    }

  }

  return hours;
}

const shiftHours = {
  day: getHoursBetween(6, 22, true),
  night: getHoursBetween(22, 5, true)
}

console.log('Shift hours: ')
console.log(` Day: ${shiftHours.day}`);
console.log(` Night: ${shiftHours.night}`);

console.log('\nShifts: ');
shifts.forEach((shift, index) => {

  const hours = getHoursBetween(shift.start, shift.end);
  const dayHours = hours.filter(x => shiftHours.day.includes(x));
  const nightHours = hours.filter(x => shiftHours.night.includes(x));

  console.log(` ${index}: (${shift.start}-${shift.end})`)
  console.log(`    D(${dayHours}) (${dayHours.length})`);
  console.log(`    N(${nightHours}) (${nightHours.length})\n`)

});