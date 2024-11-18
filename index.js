// const value={
//     name:"nayeem",
//     address:"phanthopath",
//     age:"26",
//     func:function multiply(a=10,b=30){
//         let c=a+b;
//         let d =a-b;
//         console.log(c*d)

//     }
   
// }
// console .log(value)
// console .log(value.func)


// Array of object  1

// const array=[{
//     name:"tuli",
//     address:"uttara",
//     age:"24",
//     profassion:"nurse",
//     fruit:function cost(){
//         console.log('ok,i am agree')
//     }
// }
// {
//     name:"tuli",
//     address:"uttara",
//     age:"24",
//     profassion:"nurse",
//     fruit:function cost(){
//         console.log('ok,i am agree')
//     }

// }]

// console.log(array)

// 2D array/nested loop

// const num=[[10,20,30],[10,20,30,],[10,20,30]];

// // console.log(num)

// for(let number of num){
//     // console.log(number)
//     for(let values of number){
//         console.log(values)
//     }
// }

// const nums=[[10,20,30],[10,20,30,],[10,20,30]];
// for(let i=0;i<nums.length;i++){
//     // console.log(nums[i])
//     for(let j=0; j<nums[i].length;j++){
//         console.log(nums[i][j])
//     }
// }


// closure/block

// let a=20;

// function sum(e,b){
//     let c=e+b;
//     console.log(c)
//     console.log(a)
// //   return c
// }
// sum(10,30)
// const result=sum(10,30)
// console.log(result)

// higher order function  


function summation(a,b,){
    return a+b;
}

function multiplication(a,b,another){
    let c= a+b;
    let d=a-b;
    function valuE(){
        const e=another(c,d);
        const total=e*c*d;
        return total
    }
    return valuE;

}

const result=multiplication(20,10,summation);
console.log(result())


// Arrow function

const some=function sign(param){
    console.log(param )
}
some(20)


const nayeeM=(param,param2)=>param+param2
console.log(nayeeM(20,40))

const arro=(a,b,c)=>{
    return a*b*c;
}
const  cost=arro(2,5,8)
console.log(cost)

// destructuring

const obj={
    name:"aysha",
    address:"uttara",
    age:"19",
    func:function (){
        console.log("ok")
    }
}

const{name,address,age,func}=obj;
console .log(address)

const can=[[10,20,30],[10,30,20],[10,26,49]];
const[jannat,mily ,munni]=can;
console.log(mily)

// // spread operator
// const array1=[10,20,30,40,];
// const totaL=[55,77,99,...array1,94,3,10]
// console.log(totaL)

// // map-one type of loop 
// const array2=[30,40,50,70,60,]
// const result1=array2.map(ar=>ar*3)
// console.log(result1)


// filter////
const array3=[30,40,50,70,60,];
const rus=array3.filter(ar=>ar>50)
console.log(rus)

// find 
const array4=[30,40,50,70,60,];
const onec=array4.find(ar=>ar>30)
console.log(onec)

// forEach 
const array5=[30,40,50,70,60,];
const Onec=array5.forEach(ar=>ar*2)
console.log(Onec)