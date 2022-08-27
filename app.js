// 3. Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

function combinator (s) {
    list_of_strings = new Array();
    for(i=0;i<s.length;i++) {
        for(j=i+1;j<s.length+1;j++) {
            list_of_strings.push(s.slice(i, j));
        }
    }
    return list_of_strings;
 }
 
 document.write(combinator("dog"));





