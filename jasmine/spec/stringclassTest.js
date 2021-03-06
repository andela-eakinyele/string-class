describe("Extends the String  Class", function() {
  beforeEach(function() {
    teststr1 = "Life is a bed of roses?"; teststr5 = "life? IN shape";
    teststr2 = "Rhythm' P-Synch's   ,Pygmy.1,1Gypsy@ww  .cm  ";
    teststr3 = "in the beginning, there were three";
    teststr4 = "PROTOTYPING AS A MEANS OF INHERITANCE";
    testtoCurr = "76654549876.78345"; testtoCurr1 = "765.66.33";
    testtoCurr2 = "-78998.0"; testtoCurr3 = "577."; testtoCurr4 = "23.567";
    testfromCurr = "45,987,098.34"; testfromCurr1 = "76,65,789.89";
    testfromCurr2 = "-1,345,879.10";
  });
  
  it("Tests for vowels in a string", function() {
    expect((teststr1).hasVowels()).toBeTruthy();
    expect(teststr2.hasVowels()).toBeFalsy();
  });

  it("Converts string characters to Uppercase", function() {
    expect(teststr3.toUpper()).toEqual("IN THE BEGINNING, THERE WERE THREE");
    expect(teststr4.toUpper()).toEqual("PROTOTYPING AS A MEANS OF INHERITANCE");
  });

  it("Converts string characters to Lowercase", function() {
    expect(teststr3.toLower()).toEqual("in the beginning, there were three");
    expect(teststr4.toLower()).toEqual("prototyping as a means of inheritance");
  });

  it("Converts first string character to Uppercase", function() {
    expect(teststr4.ucFirst()).toEqual("Prototyping as a means of inheritance");
    expect(teststr5.ucFirst()).toEqual("Life? in shape");
  });

  it("Checks for a question", function() {
    expect(teststr1.isQuestion()).toBeTruthy();
    expect(teststr5.isQuestion()).toBeFalsy();    
  });

  it("Returns an array of words in a string", function() {
    expect(teststr2.words().length).not.toEqual(undefined);
    expect(teststr2.words()).toEqual(["Rhythm'", "P-Synch's", 'Pygmy', 'Gypsy', 'ww', 'cm']);
  });

  it("Returns number of words in a string", function() {
    expect(teststr2.wordCount()).toEqual(6);
    expect(teststr5.wordCount()).toEqual(3);
  });

  it("Returns currency represenatation of a string", function() {
    expect(typeof testtoCurr.toCurrency()).toEqual('string');
    expect(testtoCurr.toCurrency()).toEqual("76,654,549,876.78");
    expect(testtoCurr1.toCurrency()).toEqual("String is not a valid number");
    expect(testtoCurr2.toCurrency()).toEqual("-78,998.00");
    expect(testtoCurr3.toCurrency()).toEqual("577.00");
    expect(testtoCurr4.toCurrency()).toEqual("23.56");
  });

   it("Returns numeric value of currency represenatation", function() {
    expect(typeof testfromCurr.fromCurrency()).toEqual('number');
    expect(testfromCurr.fromCurrency()).toEqual(45987098.34);
    expect(testfromCurr1.fromCurrency()).toEqual("String is not a valid currency");
    expect(testfromCurr2.fromCurrency()).toEqual(-1345879.1);
  });
});