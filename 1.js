// Store student records in an array
const students = [
    { id: 1, name: "Alex", course: "BSCS" },
    { id: 2, name: "Maria", course: "BSIT" },
    { id: 3, name: "John", course: "BSCS" },
    { id: 4, name: "Renz", course: "BSILY" },
];

// Function to display one student
function displayStudent(student) {
    console.log("Student ID: " + student.id + ", Name: " + student.name + ", Course: " + student.course);
}

// Display all students
for (let i = 0; i < students.length; i++) {
    displayStudent(students[i]);
}