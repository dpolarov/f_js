'use strict';

const student1 = new Student('Mihalkov Alexey Sergeeivich');
const student2 = new Student('Alexeev blanoy Sergeeivich');
const student3 = new Student('Joshua Dmitriy Анатольевчи');
const student4 = new Student('Булгаков константин Петрович');

student4.pain();

const group1 = new Group(23);
group1.addToGroup(student1);

group1.addToGroup(student2);
group1.addToGroup(student3);
group1.addToGroup(student4);
console.log(student4.isHealthy());
console.log(group1.listPain());