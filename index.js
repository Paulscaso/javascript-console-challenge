let num
for(num=0;num<100;num++){
    if(num % 3==0 && num % 5===0){
        console.log("fizbuzz")  

    } 
    else if(num % 3===0){
        console.log("fiz")
    }
    else if(num % 5===0){
            console.log("buzz")
        }
    
    else{
        console.log(num)
}}