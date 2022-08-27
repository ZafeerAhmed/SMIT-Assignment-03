// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

function set(str) {
    array = str.split("");
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i].charCodeAt(0) > array[j].charCodeAt(0)) {
                var temp = array[j].charAt(0);
                array[j] = array[i].charAt(0);
                array[i] = temp;
            }
        }
    }
    array = array.join("");
    array = array.toString();
    document.write(array);
}
set("webmaster");




