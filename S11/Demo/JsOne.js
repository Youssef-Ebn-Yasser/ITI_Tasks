 export let fname="JSOne"
 export  var namesArr=["js" , "HTML" ,"CSS"]

function Sum(a,b){
    return a+b;
}

function Sub(a,b){
    return Math.abs(a-b)
}

export let x=10; //readonly

export  function SetValue(_val){
    x=_val;
}
export default class Person{
    constructor(_id,_name){
        this.Id=_id;
        this.Name=_name;
    }

  Print(){
        return `ID:${ this.Id} , Name:${this.Name}`
    }
}