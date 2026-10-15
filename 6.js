
async function getStudent() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/2"
        );

         if (!response.ok){
        throw new Error ("Failed fetch student data");
    }

        const student = await response.json();

        console.log("Student name:", student.name);
        console.log("Email:", student.email);  
        console.log("Live in: ", student.address.city); 
    } catch (error) {
        console.log("Something went wrong:", error.message);
    }  
   
}

getStudent();

   