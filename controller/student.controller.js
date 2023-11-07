const StudentService = require("../services/student.services");

exports.addStudent = async (req, res, next) => {
    try {
        const result = await StudentService.Student(req.body);
        console.log(result);
        return res.status(200).send({ "status": true, "Message": "Query Success", "data": result });
    }
    catch (err) {
        console.log(err);
        throw err;
    } 
}

exports.getStudentcourse = async (req, res, next) => {
    try {
        const result = await StudentService.getStudent(req.body);
        console.log(result);
        return res.status(200).send({ "status": true, "Message": "Query Success", "data": result });
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}





