const {MyStack} = require('./MyStack.js');

  test("should be empty initially", () => {
    const stack = new MyStack();
    expect(stack.isEmpty()).toBe(true);
  });

  test("should push elements up to the size limit", () => {
    const stack = new MyStack(3);
    stack.push(1); 
    stack.push(2);
    stack.push(3);
    expect(stack.isEmpty()).toBe(false);
  });

  test("should throw 'Stack Overflow' when pushing beyond capacity", () => {
    const stack = new MyStack(3);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(() => stack.push(4)).toThrow("Stack Overflow");
  });

  test("should peek the top element without removing it", () => {
    const stack = new MyStack(2);
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
    expect(stack.isEmpty()).toBe(false);
  });

  test("should pop elements in LIFO order", () => {
    const stack = new MyStack(2);
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
  });

  test("should throw 'Stack is Empty' when popping from an empty stack", () => {
    const stack = new MyStack();
    expect(() => stack.pop()).toThrow("Stack is Empty");
  });

  test("should throw 'Stack is Empty' when peeking an empty stack", () => {
    const stack = new MyStack();
    expect(() => stack.peek()).toThrow("Stack is Empty");
  });

  test("should search for an element and return it if found", () => {
    const stack = new MyStack(3);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.search(2)).toBe(2);
  });

  test("should return -1 when searching for an element not in the stack", () => {
    const stack = new MyStack(2);
    stack.push(1);
    stack.push(2);
    expect(stack.search(3)).toBe(-1);
  });

  test("should check the length of the stack", () => {
    const stack = new MyStack(3);
    stack.push(2);
    stack.push(3);
    stack.push(2);
    expect(stack.length()).toBe(3)
});

test("should throw error for length if stack is empty", () => {
const stack = new MyStack()
expect(() => stack.pop()).toThrow("Stack is Empty");
});