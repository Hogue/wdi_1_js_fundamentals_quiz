## Lab

// 1. Write a function that splits a string into an array of normalized words,
//    (lowercase without punctuation).
function getWords(paragraph){
 var words = [];

words = paragraph.split(' ');

for (var i = 0; i <words.length; i++) {

    words[i]=words[i].replace(/\W+/).toLowerCase();
  }
    return words;
}
console.log(getWords(paragraph));

// 2. Write a function that takes a string and returns an array of it's unique
//    normalized words.
function getUniqueWords(/* your arguments go here */){
  /* your code goes here */
}

// 3. Write a function that counts how many words are in a string, providing
//    the *option* to count unique words instead of total words.
function wordCount(/* your arguments go here */){
  /* your code goes here */
}

// Don't forget to reuse functions wherever possible!



// 1. Write a function that splits a string into an array of normalized words,//    (lowercase without punctuation).function getWords(/* your arguments go here */){   /* your code goes here */} // 2. Write a function that takes a string and returns an array of it's unique//    normalized words.function getUniqueWords(/* your arguments go here */){   /* your code goes here */} // 3. Write a function that counts how many words are in a string, providing//    the *option* to count unique words instead of total words.function wordCount(/* your arguments go here */){   /* your code goes here */} // Don't forget to reuse functions wherever possible!
