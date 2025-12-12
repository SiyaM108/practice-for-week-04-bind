// Your code here
const Employee = require("./employee");

const john = new Employee("John Wick", "Dog Lover");

// ---- sayName after 2 seconds ----
setTimeout(john.sayName.bind(john), 2000);

// ---- sayOccupation after 3 seconds ----
setTimeout(john.sayOccupation.bind(john), 3000);
