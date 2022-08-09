const numbers=[15, 55, 30, 89, 90, 11, -10, 51, -33, 22, -78, -100, 99]

 const output=[];
for( let i= 0; i < numbers.length; i++){
    const element=numbers[i];
    // console.log(element)
    if(element >=0 ){
        output.push(element)
    }
    else{
        break;
    }
    // else{
    //     continue;
    // }
}
console.log(output);