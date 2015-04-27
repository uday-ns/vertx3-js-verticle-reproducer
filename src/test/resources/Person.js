var Person = function() {
    this.firstName = null;
    this.lastName = null;
    this.email = null;
};

Person.prototype.getFullName = function() {
    return this.firstName + " " + this.lastName;
};

module.exports = Person;