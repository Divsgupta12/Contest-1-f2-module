/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  //Write your code here
  let newArr = arr.map(myfunction);
  function myfunction(item) {
    if(item.profession == "developer")
    return item;
  }
  console.log(newArr);
}

function PrintDeveloperbyForEach() {
  //Write your code here
  arr.forEach(myfunction);
  function myfunction(item) {
    if(item.profession == "developer")
    console.log(item);
  }
}

function addData() {
  //Write your code here
  arr.push({id:4,name:"susan",age:"20",profession:"intern"});
  console.log(arr);
}

function removeAdmin() {
  //Write your code here
}

function concatenateArray() {
  //Write your code here
  let arr2 = [
    { id: 5, state : "uttar pradesh", city : "Lucknow" , pincode : "226012" },
    { id: 6, brand : "oppo", device : "phone" , modelno : "28888383" },
    { id: 7, item : "pen", color : "black" , tip : "0.5 mm" },
  ];
  let array = arr.concat(arr2);
  console.log(array);
}
