let num = +prompt("enter the number") 

for(let i = num; i>=1; i--){
    let a = ""
    for(let j=i ; j>=1 ; j--){
        a+="* "
    }
    console.log(a)
} 