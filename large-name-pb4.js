// const Friends= ['Azizur', 'Majarul', 'Habibur', 'Foyzur','Bokkor', 'Roni', 'Sayem ahmed sum', 'Roky'];
// // console.log(Friends)

// function  bestFriend(names){
//     let result=[];
//     let largest=names[0];
//     for(let i=0; i < names.length; i++){
//         const element= names[i];
//         if(element > largest){
//             largest=element;
//             result.push(element);
//         }       
//     }
//     return result;
// }

// const inputName=bestFriend(Friends);
// console.log(inputName);



const Friends= ['Azizur', 'Majarul', 'Habibur', 'Foyzur','Bokkor', 'Roni', 'Sayem ahmed sum', 'Roky'];
// console.log(Friends)

function  bestFriend(names){
    // let result=[];
    let largest='';
    names.forEach(function(inputName){
        if(inputName.length > largest.length){
            largest=inputName;
        }
    });
    
    return largest;
}

const inputName=bestFriend(Friends);
console.log(inputName);

