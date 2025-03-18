const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(tutorial => {
    return tutorial
      .split(' ') // Split by spaces to separate words
      .map(word => {
        // Capitalize the first letter and concatenate the rest of the word
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(' '); // Join the words back with spaces
  });
};

console.log(titleCased());
