'use strict';

function Group(number) {
  this.number = number;
  let _students = [];

  this.listPain = function () {
    return _students.filter(student => !student.isHealthy());
  };

  this.addToGroup = function (student) {
    _students.push(student);
  };
  this.students = function () {

    return _students;
  };


};