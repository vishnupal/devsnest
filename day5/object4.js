var library = [
  { author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
  { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];
for (x of library){
    console.log(` Author Name : ${x['author']} ,\t Book Title : ${x['title']} , \t RedingStatus of book ${x.readingStatus}`)
}