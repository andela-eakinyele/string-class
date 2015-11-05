//String prototype tests for vowels in strings
String.prototype.hasVowels = function() {
  return (/[aeiou]/ig).test(this);
};

// String prototype converts lowercases into uppercase using ascii values
String.prototype.toUpper = function() {
  // gets each lowercase letter and replace with uppercase letters
  return this.replace( /[a-z]/g, function(x) {
    return String.fromCharCode(x.charCodeAt(0) - 32);
  });
};

// String protottype converts lowercases into uppercase using ascii values
String.prototype.toLower = function() {
  // gets each lowercase letter and replace with uppercase letters
  return this.replace(/[A-Z]/g, function(x) {
    return String.fromCharCode(x.charCodeAt(0) + 32);
  });
};

// String prototype converts first letter to uppercase
String.prototype.ucFirst = function() {
  var lfirst = this.toLower();
  return lfirst.replace(lfirst[0], lfirst[0].toUpper());
};

// Stringprorotype checks for question statement
String.prototype.isQuestion = function() {
  return (/(\?$)/).test(this);
};

// String prototype returns array of words in a string
String.prototype.words = function() {
  // split by non word characters
  wrds = this.trim().split(/[^a-z|'-]+/ig);
  return wrds.filter(function(x) {
    return x !== '';
  });
};

// String prototype gets the word count in a string
String.prototype.wordCount = function() {
  return this.words().length;
};

// String prototype converts string to currency format
String.prototype.toCurrency = function() {
  // gets integer and floating point values
  var values = (/^(-{0,1})(\d*)(?:\.)?((\d*)$)/).exec(this);
  if (values === null) return "String is not a valid number";
  var sign = values[1];
  var intval = values[2]; // integer value
  var deci = (values[3].length === 1)? values[3] +'0' : values[3]; // decimal point values
  var div_digits = '';

  var currencyval = (deci === '') ? '' : '.' + deci.match(/(\d{1,2})/)[1];
  while (intval !== '') {
    div_digits = intval.match(/(\d{0,3})$/)[1]; // gets last zero to three digits in integer 
    intval = intval.replace(/(\d{0,3})$/, ''); // replaces last zero to three digits
    if (intval === '') {
      currencyval = div_digits + currencyval; //appends last div-digts without a comma
    } else {
      currencyval = ',' + div_digits + currencyval; //appends div_digits with comma separator
    }
  }
  // return appended digits
  return sign + currencyval;
};

// String prototype to return Number from currency string
String.prototype.fromCurrency = function() {
  if (!(/^-{0,1}\d{1,3}((?:,\d{3})*(?:\.\d{1,2})?)$/).test(this)) return "String is not a valid currency";
  return parseFloat(this.replace(/,/g, ''));
};
// console.log(("-12333239889884444.9").match(/^(-{0,1}\d*)(\d{3}(?=,)|\d{3}$|\d{3})((\.)?\d{0,2})\d*/)[3].length);
console.log(("1233367239889884444.9").toCurrency());