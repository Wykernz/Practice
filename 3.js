const students = [
    {id: 9 , name:"Renz" , Brgy: "Cautod"},
    {id: 13, name: "Zoie" , Brgy: "Capoocan"},


];

    const Brgys = students.map ((student) => {
        return student.Brgy;
    });

    console.log (Brgys);

    const Rors = [
    {id: 9 , name:"Ren" , Brgy: "Cautod"},
    {id: 13, name: "Zoi" , Brgy: "Capoocan"},


];

    const Wiws = Rors.filter ((ror) => {
        return ror.Brgy === "Cautod";
    });

    console.log (Wiws);