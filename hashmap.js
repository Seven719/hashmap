export default class HashMap {
  constructor(capacity = 16, loadFactor = 0.75) {
    this.buckets = Array(16)
      .fill(null)
      .map(() => []);
    this.loadFactor = loadFactor;
  }

  checkIndex(index) {
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode =
        (primeNumber * hashCode + key.charCodeAt(i)) % this.buckets.length;
    }

    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);
    this.checkIndex(index);

    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[index][i][0] == key) {
        this.buckets[index][i][1] = value;
        return;
      }
    }

    this.buckets[index].push([key, value]);
    this.size++;
  }
}
