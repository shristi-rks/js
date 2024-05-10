function same_chars(str, index1, index2) {
    if (index1 >= 0 && index1 < str.length && index2 >= 0 && index2 < str.length) {
        return str.charAt(index1) === str.charAt(index2);
    } else {
        return false;
    }
}

// Test cases
console.log(same_chars("programmer", 6, 7)); // True
console.log(same_chars("programmer", 0, 4)); // False
console.log(same_chars("programmer", 0, 12)); // False
