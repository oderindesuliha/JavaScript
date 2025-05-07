function distributeBooks(members){
    const books = ["Rate","Sugar","The fate of 24","lienus"];
    let collectionOfBooks = []
    index = 0
    for(const member of members) { 
        if(index < books.length)      
        collectionOfBooks.push(books[index])
        index++
}
return collectionOfBooks;

}

module.exports = distributeBooks;