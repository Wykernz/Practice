const students = {
    name: "B1",
    age: 10,
    place: "B2",
    year: 2024,
};

    console.log (students.name);
    console.log (students.age);
    console.log (students.place);
    console.log (students.year);





    const piw = {
        name : "b0",
        age : 9,
        place : "b3",
        year: 2025
    };

        const {name , age , place , year } = piw;

        console.log (name);
         console.log (age);
          console.log (place);
          console.log (year);



        const wiw = {
             id: 1,
    name: "Renz",
    course: "BSCS",
    year: 2089
        };

            const updatedWiw = {
                ...wiw,
                name: "Zner",
                year: 10
            };

            console.log (updatedWiw);