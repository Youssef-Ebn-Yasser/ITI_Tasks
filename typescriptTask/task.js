var student1 = { id: 1, name: "Yousef", age: 22 };
console.log("Student:", student1);
// 2
var numbers = [10, 20, 30, 40];
console.log("Numbers:", numbers);
// 3
var mixedArray1 = [1, "Hello", 2, "World"];
console.log("String or Number Array:", mixedArray1);
// 4.
var mixedArray2 = [
    ["Age", 25],
    ["Year", 2025],
];
console.log("String and Number Array:", mixedArray2);
// 5
function greet(name) {
    if (name === void 0) { name = "Guest"; }
    console.log("Hello, ".concat(name, "!"));
}
greet();
greet("Ali");
// 6
function displayInfo(id, name) {
    console.log("ID:", id, "Name:", name !== null && name !== void 0 ? name : "No Name Provided");
}
displayInfo(101);
displayInfo(102, "Hamada");
// 7
function sum(a, b) {
    return a + b;
}
// console.log(sum()); 
console.log(sum(5, 7));
// 8
var ITIBranches;
(function (ITIBranches) {
    ITIBranches[ITIBranches["SmartVillage"] = 0] = "SmartVillage";
    ITIBranches[ITIBranches["Alexandria"] = 1] = "Alexandria";
    ITIBranches[ITIBranches["Assiut"] = 2] = "Assiut";
    ITIBranches[ITIBranches["Mansoura"] = 3] = "Mansoura";
    ITIBranches[ITIBranches["Sohag"] = 4] = "Sohag";
})(ITIBranches || (ITIBranches = {}));
// 9. 
console.log("ITI Branches:");
for (var branch in ITIBranches) {
    if (isNaN(Number(branch))) {
        console.log(branch);
    }
}
