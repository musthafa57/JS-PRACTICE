// Task 2.1: Global Scope

let globalVariable = "I am global";
//console.log(globalVariable);

// Task 2.2: Function Scope

//function testFunction() {
let functionVariable = "I am in function";
  //console.log(globalVariable);
  //console.log(functionVariable);
//}
//testFunction();

// Can access global        
// Can access its own}

// Task 2.3: Block Scope

if(true) {    
    let blockVariable = "I am in block";   
     const alsoInBlock = "Me too";   
      var notActuallyBlocked = "I can escape!";    
      console.log(blockVariable);     
      console.log(alsoInBlock); 
      console.log(notActuallyBlocked); 


}
        // Works here     // Will cause error
      //console.log(notActuallyBlocked);  
         // Works! (but avoid this)


      //part-2

      //## Part 2: GitHub Setup & Basic Commands


      //### Task 3: GitHub Account Creation

      