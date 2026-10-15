const students = [
     { name: "Renz", course: "BSCS" },
    { name: "Maria", course: "BSIT" },
    { name: "John", course: "BSCS" },
    { name: "Ana", course: "BSIT" },
    { name: "Alex", course: "BSCS" },

];

const courses = students.map ((student) => {
    return student.course;
});

console.log ("All courses: " + courses);



    const BSITstudents = students.filter ((student) => {
        return student.course === "BSIT";
    });
    console.log ("Course:" ,BSITstudents);

