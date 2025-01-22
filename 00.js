{
  //variables

  //let, const
  //var ❌

  let str1 = '';
}

{
  //String - Immutable
  let str1 = 'Salam " ';
  let str2 = "Hi \" ";
  let str3 = `Merheba " ' `;

  let firstName = 'Behnaz';
  let lastName = "Haghighi";
  let msg1 = firstName + " " + lastName + " Khoshamadid!"; 
  let msg2 = `${firstName} ${lastName} Khoshamadid!`;
  let multiLine = `
      Multi line Message
  `;

  firstName.length;
  let newMsg = msg1.replaceAll('a', 'X')
  msg1
  newMsg
  
 
  msg1.toLowerCase();
  msg1.toUpperCase();

  msg1.indexOf("Haghighi");
  msg1.indexOf("Farani");
  msg1.indexOf("Behnaz")

  msg1.indexOf("Behnaz") > -1
  msg1.indexOf("Farani") > -1

  msg1.split(" ");
}
{
  //Number
  //type: int, sint, double, decimal, float, uint ...
  //js type: float 64bit IEEE 754

  let num1 = 1;
  0.1 + 0.2 
  0.1 + 0.2 == 0.3;


  let numStr = "2";
  Number(numStr);
  +numStr;
  parseInt(numStr);
  

  //Not A Number
  numStr = "25z21";
  Number(numStr);
  +numStr;
  parseInt(numStr);

  //NaN === NaN;
  //parseInt(numStr) === NaN;

  isNaN(NaN)
  isNaN(parseInt(numStr))
  isNaN(Number(numStr))

  //NaN === NaN (false)?
}

{
  //Bolean
  true;
  false;
  // ==, != ❌🐞
  // ===, !== ✅
  // ||, &&
  // !, <, >

  // if(0 == "") true? false?
  0 == "";
  0 === ""
  

  undefined === undefined;
  undefined === null;

  1 === 2 || true;

  //default operator ||
  let x = null
  let y = x || "Setareh";


  //guard operator &&
  true && Math.random();
  y === "Setareh" && Math.random();

  true ? Math.random() : null;


  x = 0;
  if(x !== null && x !== undefined && x !== "" && x !== 0){
    console.log("🎉");
  }

  if(x){
    console.log("🎉");
  }
}

{
  //Array
  //Mutable
  //Immutable
  let arr1 = [1, 'str', false, null, undefined, NaN];
  arr1.push("test");
  arr1;

  //toReversed Immutable
  arr1.toReversed();
  arr1;

  //reverse Mutable
  arr1;
  arr1.reverse();
  arr1;

  arr1[0];
  arr1[1];

  //Hint: Array ba Object neveshte shode

  let arr2 = new Array(5);

  for(let i=0; i<arr1.length; i++){
    const elem =arr1[i]; 
    console.log(elem);
  };

  for(let elem of arr1){
    console.log(elem);
  }

  //Spread ...

  let a1 = [1,2,3];
  let a2 = [4,5,6];

  [1,2,3,4,5,6];
  let a3 = a1.concat(a2);
  a1
  a2
  a3

  a3 = [a1, a2]
  a3 = [...a1, ...a2]

  //
  let org = [1,2,3];
  let clone = [...org];
  
  org === clone;


  let result = ["Zahra", "Aghaei", "JS, REACT", true];
  let msg = `${result[0]} ${result[1]}`;

  let firstName = result[0];
  let lastName = result[1];
  let fav = result[2];
  let isActive = result[3];
  msg = `${firstName} ${lastName} ... `;


  //Destructure
  {
    let [firstName, lastName, fav, isActive] = result;
    msg = `${firstName} ${lastName} ... `;

    //const [cnt, setCnt] = useState(0);
  }

  //map, filter, reduce


}

{
  //Function
  //C#,JAVA,c: int Add (int a, int b) { return a + b;}
  //PascalCase

  //camelCase
  function add(num1, num2 = 0){
    console.log(arguments);
    num2 = num2 || 0;
    return num1 + num2;
  }

  add(1,2);
  let a = 1;
  let b = 2;
  add(a,b);

  function aFunctionWithoutReturn(){
    //
  }

  let x = aFunctionWithoutReturn();
  let xyz;

  add(1,2,3,4,5,6)
  add(1);

  //Rest ...
  function sum(...params){
    let result = 0;
    for(let a of params){
      result += a;
    }
    return result;
  }

  sum(1);
  sum(1,2);
  sum(1,2,3);
  sum(1,2,3,4);
  sum(1,2,3,4,5);

  {
    //Statmenmt
    function add(){}
    if(true){}    

    //Expression
    1+2;
    true;
    Math.random();

    //Expression
    let a = 1+2;
    let b = true;
    let c = Math.random();
  }

  let funcAdd1 = function add(a, b){ 
    return a + b;
  }

  //Ananymous Function
  //فانکشن بینام
  let funcAdd2 = function (a, b){ 
    return a + b;
  }
 
  //Arrow Function, lambda expression
  let funcAdd3 = (a, b) => { 
    return a + b;
  }

  let funcAdd4 = (a, b) => a + b;

  let pow2 = (a) => a * a;
  let pow2_ = a => a * a;
  pow2(9);

  [pow2, funcAdd3, funcAdd2]

  //Curry Function
  {
    add = a => b => a + b;

    add(10)(20)

    let inc = add(1);
    inc(1);

    let add10 = add(10);
    add10(1)
  }

  

}


{
  let arr = [1,2,3,4,5,6,7,8,9]
  JSON.stringify(arr);
}
