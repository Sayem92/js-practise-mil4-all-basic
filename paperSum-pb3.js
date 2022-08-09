function paperRequirements(book1Quantity,book2Quantity,book3Quantity){
    const book1Page=100;
    const book2Page=200;
    const book3Page=300;

    const book1AllPage= book1Quantity * book1Page;
    const book2AllPage= book2Quantity * book2Page;
    const book3AllPage= book3Quantity * book3Page;
    // console.log(book1AllPage,book2AllPage,book3AllPage);

    const allBookPage= book1AllPage + book2AllPage +book3AllPage;

    return allBookPage;

}
// const inputBookQuantity= 1, 2, 3;
const sumBookPage=paperRequirements(12, 15, 25);
console.log('All paper of 3 books=',sumBookPage);