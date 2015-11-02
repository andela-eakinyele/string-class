//String prototype tests for vowels in strings
String.prototype.hasVowels = function() {
  return (/[aeiou]/ig).test(this);
};

// String prototype converts lowercases into uppercase using ascii values
String.prototype.toUpper = function() {
  // defines variables for lowercase and uppercase lettters
  var newstr = this,
    alpha_lower = '',
    alpha_upper = '';
  // gets each lowercase letter and replace with uppercase letters
  while (alpha_lower !== null) {
    alpha_lower = (/([a-z])/).exec(newstr); // regex to get lowercase letter
    if (alpha_lower == null) return newstr; // returns string if lowercase letters does not exist
    alpha_upper = String.fromCharCode(alpha_lower[1].charCodeAt(0) - 32); // gets uppercase equivalent using ascii code
    newstr = newstr.replace(alpha_lower[1], alpha_upper); // replaces  lowercase with uppercase
  }
};

// String protottype converts lowercases into uppercase using ascii values
String.prototype.toLower = function() {
  // define variables for lowercase and uppercase lettters
  var newstr = this,
    alpha_lower = '',
    alpha_upper = '';

  while (alpha_upper !== null) {
    alpha_upper = (/([A-Z])/).exec(newstr); // regex to get uppercase letter
    if (alpha_upper == null) return newstr; // return string if lowercase letters does not exist
    alpha_lower = String.fromCharCode(alpha_upper[1].charCodeAt(0) + 32); // gets lowercase equivalent using ascii code
    newstr = newstr.replace(alpha_upper[1], alpha_lower); // replaces  uppercase with lowercase
  }
};

// String prototype converts first letter to uppercase
String.prototype.ucFirst = function() {
  return this.toLower().replace(this[0], this[0].toUpper());
};

// Stringprorotype checks for question statement
String.prototype.isQuestion = function() {
  return (/(\?$)/).test(this);
};

// String prototype returns array of words in a string
String.prototype.words = function() {
  return this.split(/\s/);
};

// String prototype gets the word count in a string
String.prototype.wordCount = function() {
  return this.words().length;
}

// String prototype converts string to currency format
String.prototype.toCurrency = function() {

  // gets integer and floating point values
  var values = (/(\d{1,})(.\d{1,})/).exec(this);
  if (values == null) return "String is not a number";
  var intval = values[1]; // integer value
  var deciPointval = values[2]; // decimal point values
  var div_digits = '',
    currencyval = deciPointval;

  while (intval !== '') {
    div_digits = intval.match(/(\d{0,3})$/)[1]; // gets last zero to three digits in integer 
    intval = intval.replace(/(\d{0,3})$/, ''); // replaces last zero to three digits
    if (intval == '') {
      currencyval = div_digits + currencyval; //appends last div-digts without a comma
    } else {
      currencyval = ',' + div_digits + currencyval; //appends div_digits with comma separator
    }
  }
  // return appended digits
  return currencyval;
};

// String prototype to return Number from currency string
String.prototype.fromCurrency = function() {
  if (!(/\d/).test(this)) return "String is not a currency value";
  return parseFloat(this.replace(/,/g, ''));
};