const Team = require ("./TeamMember");

class Engineer extends Team {
    constructor (name, id, email, GitHub) {
        super (name, id, email);
        this.GitHub = GitHub;
    }
    getRole() {
        return "Engineer";
    }
    getGitHub() {
        return this.GitHub;
    }
}

module.exports = Engineer;