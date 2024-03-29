/**
 * Person class
 */
class Person {

    firstName: string;
    lastName: string;

    /**
     * Constructor of the Person class
     * @param firstName First name of the person
     * @param lastName Last name of the person
     */
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    /**
     * Greeting method
     * @returns Greeting message { string }
     */
    greet() : string {
        return `Hello, ${this.firstName} ${this.lastName}!`;
    }
}

const alice: Person = new Person("Alice", "Johnson"); // Person { firstName: 'Alice', lastName: 'Johnson' }
const bob: Person = new Person("Bob", "Smith"); // Person { firstName: 'Bob', lastName: 'Smith' }

console.log(alice.greet()); // Output: Hello, Alice Johnson!
console.log(bob.greet()); // Output: Hello, Bob Smith!