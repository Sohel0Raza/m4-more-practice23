function paperRequirements(book1, book2, book3){
    let bookPage1 = 100;
    let bookPage2 = 200;
    let bookPage3 = 300;
    const bookOne = book1 * bookPage1;
    const bookSecond = book2 * bookPage2;
    const bookLast = book3 * bookPage3;
    sum = bookOne + bookSecond + bookLast;
    return sum;
}
const totalPage = paperRequirements(2, 1, 2)
console.log('TotalPage:', totalPage)