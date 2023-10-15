/// use of map...////


// const maxico = new Map();
// maxico.set('id',420);
// maxico.set('name','maxico');
// maxico.set('capital','maxico city');
// maxico.set('neighbors',['usa','guatemala','belige']);

// console.log(maxico);


// maxico.set('id',25);
// maxico.get('neighbors').push('india');

// console.log(maxico);


///my pet..../

// const mypet = new Map();
// mypet.set("name","romy");
// mypet.set("type","sefford");
// mypet.set("breed","german");
// mypet.set("age",5);
// mypet.set("friends",["selly","rocky","kalu"]);

// mypet.set("color","black")
// mypet.get("friends");
// console.log(mypet);


///......House for sale......//


// const HouseForSale = new Map();
// HouseForSale.set("ariya",'secter7');
// HouseForSale.set("value",50000);
// HouseForSale.set("streetname",'varsana');
// HouseForSale.set("built",2020);
// HouseForSale.set("owner",{name:"Aarav",age:25});
// HouseForSale.set("offers",[30000,40000,50000,60000]);

//  console.log(HouseForSale);

//   HouseForSale.get("offers")[1] = 45000;       //// for replacing a value inside map Array...//

//   HouseForSale.get("owner").age =30;
//   const maxprice = HouseForSale.get("offers").reduce((max,price)=>{    //// for get max price///
//     if(price>max){
//         return price;
//     }
//     return max
//   },0);
  
// console.log(maxprice);



///// greet messege.......//

// const myconsole = new Map();

// myconsole.set("log",(messege)=>{
//     console.log(messege);
// });

// myconsole.get("log")("Om Namo");         /// HARE IN MAP WE CAN SELECT ID DIFFRENT LIKE OBJECT(HARE IST IS NUMBE AND SECOND STRING)........//


// myconsole.set(1,"one");        
// myconsole.set("1","one");

// console.log(myconsole);


/// FIND THE IST DUPLICATE NUMBER...../////


//const number = [10,20,15,30,15,20,35,60,10];

//const seenNumber = new Map();

//for (let i = 0; i < number.length; i++) {
    //if(seenNumber.has(number[i])){      ///// for cheaking ist duplicate numbers index...//
      //console.log(seenNumber.get(number[i]));
      //console.log(i);  //// for repet numbers length...//
    //}
  //  //else{
        //seenNumber.set(number[i], i);  /// for adding value in map...//
    //}

//}

//console.log(seenNumber);