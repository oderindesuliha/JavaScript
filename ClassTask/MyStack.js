class MyStack {
  constructor(size) {
    this.stack = new Array(size);
    this.count = 0;
  }

  isEmpty() {
    return this.count === 0;
  }

  push(element) {
    if (this.count < this.stack.length) {
      this.stack[this.count++] = element;
    } else {
      throw new Error("Stack Overflow");
    }
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is Empty");
    }
    return this.stack[--this.count];
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is Empty");
    }
    return this.stack[this.count - 1];
  }

  search(element) {
    for (let i = 0; i < this.count; i++) {
      if (this.stack[i] === element) {
        return element;
      }
    }
    return -1;
  }
  length(){
    if (this.isEmpty()) {
        throw new Error("Stack is Empty");
  }
  return this.count
}
}

module.exports = MyStack;