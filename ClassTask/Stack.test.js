const MyStack = require('./MyStack.js');

  
  test("should be empty initially", () => {
    expect(stack.isEmpty()).toBe(true);
  });

  test("should push elements up to the size limit", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.isEmpty()).toBe(false);
  });

  test("should throw 'Stack Overflow' when pushing beyond capacity", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(() => stack.push(4)).toThrow("Stack Overflow");
  });

  test("should peek the top element without removing it", () => {
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
    expect(stack.isEmpty()).toBe(false);
  });

  test("should pop elements in LIFO order", () => {
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
  });

  test("should throw 'Stack is Empty' when popping from an empty stack", () => {
    expect(() => stack.pop()).toThrow("Stack is Empty");
  });

  test("should throw 'Stack is Empty' when peeking an empty stack", () => {
    expect(() => stack.peek()).toThrow("Stack is Empty");
  });

  test("should search for an element and return it if found", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.search(2)).toBe(2);
  });

  test("should return -1 when searching for an element not in the stack", () => {
    stack.push(1);
    stack.push(2);
    expect(stack.search(3)).toBe(-1);
  });