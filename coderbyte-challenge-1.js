function DashInsert(str) { 

    for(let i =0;i<=variable1.length;i++){
        if((str[i] % 2 != 0) && str[i+1] % 2 != 0 ){
            str = str.slice(0,idx+1) + "-" + str.slice(idx+1);
        }
    }


    return str;
   
  
  }
     
  // keep this function call here 
  console.log(DashInsert(readline()));