// const Friends= ['Azizur', 'Majarul', 'Habibur', 'Foyzur','Bokkor', 'Roni', 'Sayem ahmed sum', 'Roky'];
// // console.log(Friends)

// function  bestFriend(names){
//       let result=[];
//     let largestName=names[0];
//     let largestNameLength=largestName.length;
//     for(let i= 0; i < names.length; i++){
//         let nameIndex= names[i];
//         let nameLength=nameIndex.length;
//         if(largestNameLength < nameLength){
//         largestName=nameIndex;
//           result.push(largestName);
            
//         }       
//     }
//      return result;
// }

// const inputName=bestFriend(Friends);
// console.log(inputName);








const Friends= ['Azizur', 'Majarul', 'Habibur', 'Foyzur','Bokkor', 'Roni naidu', 'Sayem ahmed sum', 'Roky'];
// console.log(Friends)

function  bestFriend(array){
    
    let realfriend=array[0];
    for(let i= 0; i < array.length; i++){
        const element= array[i];
        if(element.length > realfriend.length){
        realfriend=element;
        
        }       
    }
    return realfriend;
    
}

const inputName=bestFriend(Friends);
console.log(inputName);


// strimg kora baki
