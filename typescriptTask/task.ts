// 1
type Student = {
  id: number;
  name: string;
  age: number;
};

const student1: Student = { id: 1, name: "Yousef", age: 22 };
console.log("Student:", student1);

// 2
let numbers: number[] = [10, 20, 30, 40];
console.log("Numbers:", numbers);

// 3
let mixedArray1: (string | number)[] = [1, "Hello", 2, "World"];
console.log("String or Number Array:", mixedArray1);

// 4.
let mixedArray2: [string, number][] = [
  ["Age", 25],
  ["Year", 2025],
];
console.log("String and Number Array:", mixedArray2);

// 5
function greet(name: string = "Guest"): void {
  console.log(`Hello, ${name}!`);
}
greet();        
greet("Ali");   

// 6
function displayInfo(id: number, name?: string): void {
  console.log("ID:", id, "Name:", name ?? "No Name Provided");
}
displayInfo(101);
displayInfo(102, "Hamada");

// 7
function sum(a: number, b: number): number {
  return a + b;
}
// console.log(sum()); 
console.log(sum(5, 7)); 

// 8
enum ITIBranches {
  SmartVillage,
  Alexandria,
  Assiut,
  Mansoura,
  Sohag
}

// 9. 
console.log("ITI Branches:");
for (let branch in ITIBranches) {
  if (isNaN(Number(branch))) { 
    console.log(branch);
  }
}
