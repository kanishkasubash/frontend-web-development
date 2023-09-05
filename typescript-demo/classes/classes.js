"use strict";
/**
 * Person class
 */
class Person {
    /**
     * Constructor of the Person class
     * @param firstName First name of the person
     * @param lastName Last name of the person
     */
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    /**
     * Greeting method
     * @returns Greeting message { string }
     */
    greet() {
        return `Hello, ${this.firstName} ${this.lastName}!`;
    }
}
const alice = new Person("Alice", "Johnson"); // Person { firstName: 'Alice', lastName: 'Johnson' }
const bob = new Person("Bob", "Smith"); // Person { firstName: 'Bob', lastName: 'Smith' }
console.log(alice.greet()); // Output: Hello, Alice Johnson!
console.log(bob.greet()); // Output: Hello, Bob Smith!
