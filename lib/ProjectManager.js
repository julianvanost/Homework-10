const Employee = require("./Employee");

class ProjectManager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email, officeNumber)
    this.officeNumber = officeNumber
  }
  getRole() {
    return 'Project Manager'
  }
  getOfficeNumber() {
    return this.officeNumber
  }
}

module.exports = ProjectManager