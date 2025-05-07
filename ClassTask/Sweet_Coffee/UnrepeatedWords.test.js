const filterUnrepeatedWords = require('./UnrepeatedWords');

test ("returns array of all unrepeated words", () => {
    const sentence = "something must push something to make something move"
    const filtered = ["must", "push", "to", "make", "move"];
    const result = filterUnrepeatedWords(sentence);
    expect(result).toEqual(filtered)

  });


  
  
   