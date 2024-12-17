console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = [];


function addToCollection(collection, title, artist, yearPublished) {
  // your code here...
  let music = {
    collection: collection,
    title: title,
    artist:artist,
    yearPublished: yearPublished
  }
  myCollection.push(music);
  return music;
}
;
console.log(addToCollection('Classic Rock','The Dark Side of the Moon', 'Pink Floyd', 1973));
console.log(addToCollection('Hip-Hop Essentials', 'Illmatic', 'Nas', 1994));
console.log(addToCollection('Soul Classics', "What's Going On", 'Marvin Gaye', 1971));
console.log(addToCollection('Alternative/Indie', 'Nevermind', 'Nirvana', 1991));
console.log(addToCollection('R&B Legends', 'Lemonade', 'Beyoncé', 2016));
console.log(addToCollection('Jazz Legends', 'Kind of Blue', 'Miles Davis', 1959));

console.log(myCollection);






// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
