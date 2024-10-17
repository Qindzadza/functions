//function declaration //parameter name
function getReminder(name){
    console.log("Water the plants." + name);
  }
  function greetInSpanish(){
    console.log("Buenas tardes.");
  }
  getReminder("John")


  //function declaration with default parameter
  function makeShoppingList(item1="milk", item2="bread", item3="eggs"){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  }
  makeShoppingList()
  //return 
  function monitorCount(rows, columns){
    return rows*columns;
  }
  
  const numOfMonitors=monitorCount(5,4);
  console.log(numOfMonitors);
  //Helper Function
  function monitorCount(rows, columns) {
    return rows * columns;
  };
  function costOfMonitors(rows,columns){
    return monitorCount(rows , columns)*200;
  }
  
  const totalCost=costOfMonitors(5,4);
  console.log(totalCost);

  //Function Exressions
  // const plantNeedsWater=function(day){

  //   if(day==="Wednesday"){
  //     return true;
  //   }else{
  //   return false;
  //   }
  // };
  // plantNeedsWater("Tuesday");
  // console.log(plantNeedsWater());
  //Arrow Functions
  // const plantNeedsWater = (day) =>{
  //   if (day === 'Wednesday') {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };
  // console.log(plantNeedsWater("Tuesday"));
  // //Concise Body Arrow Functions
  // const plantNeedsWater = (day) =>  day === 'Wednesday' ? true : false;
