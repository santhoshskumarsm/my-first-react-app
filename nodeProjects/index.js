let fs = require('fs');

const emps = [
    {empId:101, ename:"santhosh"}
]

const filePath = "./emps.json";

fs.writeFile(filePath, JSON.stringify(emps), (err) => {
    if(err) {
        console.log("Error", err);
    }
    else {
        console.log("Data is stored");


    }
});