import HashMap from "./hashmap.js";

const testHashMap = new HashMap();

// Test for set method
testHashMap.set("apple", "red");
testHashMap.set("banana", "yellow");
testHashMap.set("carrot", "orange");
testHashMap.set("dog", "brown");
testHashMap.set("elephant", "gray");
testHashMap.set("frog", "green");
testHashMap.set("grape", "purple");
testHashMap.set("hat", "black");
testHashMap.set("ice cream", "white");
testHashMap.set("jacket", "blue");
testHashMap.set("kite", "pink");
testHashMap.set("lion", "golden");

console.log(testHashMap.buckets);

// Test for overwriting nodes
testHashMap.set("carrot", "OVERWRITE1");
testHashMap.set("dog", "OVERWRITE2");
testHashMap.set("elephant", "OVERWRITE3");
testHashMap.set("frog", "OVERWRITE4");
console.log(testHashMap.buckets);

// Test for get method
console.log(testHashMap.get("banana"));

// Tests for has method
console.log(testHashMap.has("apple"));
console.log(testHashMap.has("dragon"));

// Test for length method
console.log(testHashMap.length());

// Test for remove method
testHashMap.remove("banana");
console.log(testHashMap.buckets);

// Test for length method
console.log(testHashMap.length());

// Test for keys method
console.log(testHashMap.keys());

// Test for values method
console.log(testHashMap.values());

// Test for entries method
console.log(testHashMap.entries());

// Test for resizing
testHashMap.set("moon", "silver");
console.log(testHashMap.buckets);
