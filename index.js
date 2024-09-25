import HashMap from "./hashmap.js";

const test = new HashMap();

// Test for set method
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

console.log(test.buckets);

// Test for overwriting nodes
test.set("carrot", "OVERWRITE1");
test.set("dog", "OVERWRITE2");
test.set("elephant", "OVERWRITE3");
test.set("frog", "OVERWRITE4");
console.log(test.buckets);

// Test for get method
console.log(test.get("banana"));

// Tests for has method
console.log(test.has("apple"));
console.log(test.has("dragon"));

// Test for length method
console.log(test.length());

// Test for remove method
test.remove("banana");
console.log(test.buckets);

// Test for length method
console.log(test.length());

// Test for keys method
console.log(test.keys());

// Test for values method
console.log(test.values());

// Test for entries method
console.log(test.entries());

// Test for resizing
test.set("moon", "silver");
console.log(test.buckets);
