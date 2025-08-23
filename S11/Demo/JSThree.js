//promise:
//default in js : one thread : 
//default in js : line by line (sync)

console.log("Script Start")

function myfun(){
   console.log("Hello From My fun")
}

setTimeout(" myfun()" , 2000) // loaded data from server

for(var i=0; i<1e7;i++){}


console.log("Script End")


//////////////////////////////////

function Fun1(){
    let x;
    setTimeout(function(){return x=10} ,2000)
    return x;
}

let result=Fun1()
console.log(result)