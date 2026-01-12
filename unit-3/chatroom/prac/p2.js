const fs = require("fs");

const FILE = "student.json";


function readStudents() {
    const data = fs.readFileSync(FILE, "utf-8");
    return JSON.parse(data);
}


function addStudent(newStudent) {
    const students = readStudents();
    students.push(newStudent);

    fs.writeFileSync(FILE, JSON.stringify(students, null, 2), "utf-8");
    console.log("Student added!");
}


function searchStudent(roll) {
    const students = readStudents();
    const found = students.find((s) => s.roll === roll);

    console.log(found ? found : "Student not found");
}


function updateMarks(roll, newMarks) {
    const students = readStudents();
    const student = students.find((s) => s.roll === roll);

    if (student) {
        student.marks = newMarks;
        fs.writeFileSync(FILE, JSON.stringify(students, null, 2), "utf-8");
        console.log("Marks updated!");
    } else {
        console.log("Student not found");
    }
}


function deleteStudent(roll) {
    let students = readStudents();
    students = students.filter((s) => s.roll !== roll);

    fs.writeFileSync(FILE, JSON.stringify(students, null, 2), "utf-8");
    console.log("Student deleted!");
}

// Testing Functions
// addStudent({ roll: 6, name: "Rohit", marks: 92 });
// searchStudent(3);
// updateMarks(2, 95);
// deleteStudent(4);
