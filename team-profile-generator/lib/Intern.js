const Team = require ("./TeamMember");

class Intern extends Team {
    constructor (name, id, email, School) {
        super (name, id, email);
        this.School = School;
    }
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.School;
    }
}

module.exports = Intern;