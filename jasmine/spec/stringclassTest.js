describe("Extends the String  Class", function() {
  beforeEach(function() {
    testString1 = "Life is a bed of roses?",
      testString2 = "Rhythm Synch Pygmy Gypsy",
        testString3 = "in the beginning, there were three",
          testString4 = "prototyping AS A MEANS OF Inheritance",
            testtoCurr = "76549876.78", testfromCurr = "45,987,098.34";
  });
  
  it("Tests for vowels in a string", function() {
    expect(testString1.hasVowels()).toBeTruthy();
    expect(testString2.hasVowels()).toBeFalsy();
  });
  it("Converts string characters to Uppercase", function() {
    expect(testString3.toUpper()).toEqual("IN THE BEGINNING, THERE WERE THREE");
  });
  it("Converts string characters to Lowercase", function() {
    expect(testString4.toLower()).toEqual("prototyping as a means of inheritance");
  });
  it("Converts first string character to Uppercase", function() {
    expect(testString4.ucFirst()).toEqual("Prototyping as a means of inheritance");
  });
  it("Checks for a question", function() {
    expect(testString1.isQuestion()).toBeTruthy();
  });
  it("Returns an array of words in a string", function() {
    expect(testString2.words()).toEqual(['Rhythm', 'Synch', 'Pygmy', 'Gypsy']);
  });
  it("Returns number of words in a string", function() {
    expect(testString2.wordCount()).toEqual(4);
  });
  it("Returns currency represenatation of a string", function() {
    expect(testtoCurr.toCurrency()).toEqual("76,549,876.78");
  });
   it("Returns numeric value of currency represenatation", function() {
    expect(testfromCurr.fromCurrency()).toEqual(45987098.34);
  });
});