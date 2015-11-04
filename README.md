# string-class
```
Support for string manipulation in javascript
The String class is extended using prototype
```

## List of methods (Extends **String** Class)
-  [hasVowels](#vw)
-  [toUpper](#tup)
-  [toLower](#tlo)
-  [ucFirst](#ucf)
-  [isQuestion](#que)
-  [words](#wd)
-  [wordCount](#wdc)
-  [toCurrency](#tcur)
-  [fromCurrency](#fcur)


### <a name = "vw"></a>hasVowels
```
Returns true if the string contains any of the vowel letter _a, e, i, o, u_
e.g ('String class extended').hasVowels() equals `true`
```

### <a name = "tup"></a>toUpper
```
Converts string characters to uppercases
e.g ("String class extended").toUpper() equals `"STRING CLASS EXTENDED"`
```

### <a name = "tlo"></a>toLower
```
Converts string characters to lowercases
e.g ("STRING CLASS EXTENDED").toLower() equals `"string class extended"`
```

### <a name = "ucf"></a>ucFirst
```
Converts the first string characters to uppercase, and the rest to lowercases
e.g ('string class extended').ucFirst() equals `"String class extended"`
```

### <a name = "que"></a>isQuestion
```
Returns true if the string represensts a question i.e end with a `?` mark
e.g ("String class extended?").isQuestion() equals `true`
```

### <a name = "wd"></a>words
```
Returns an array of words in the string  (words are assumed to only consist of alphabets, apostrophe and hyphen)
e.g ('String class extended').words() equals `["String", "class", "extended"]`
```

### <a name = "wdc"></a>wordCount
```
Counts the number of words in the string based on words().length
e.g ('String class extended').wordCount() equals `3`
```

### <a name = "tcur"></a>toCurrency
```
Formats the string of numbers into currency format by inserting commas
e.g ("1234567.56").toCurrency() equals `1,234,567.56`
```

### <a name = "fcur"></a>toCurrency
```
Returns the equivalent numeric value of currency formatted string
e.g ("1,234,567.56").fromCurrency() equals `1234567.56`
```

**Note: The method extended from the string class utilizes regex for manipulating string datatypes** 