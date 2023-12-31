const StudentService = require("../services/student.services");
const courseService = require("../services/course.service");


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
        const result = await StudentService.getcourseStudent(req.body);
        console.log(result);
        return res.status(200).send({ "status": true, "Message": "Query Success", "data": result });
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}

exports.addcourse = async (req, res, next) => {
    try {
        const result = await courseService.course(req.body);
        console.log(result);
        return res.status(200).send({ "status": true, "Message": "Query Success", "data": result });
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}

exports.getStudentcoursedetails = async (req, res, next) => {
    try {
        const result = await StudentService.getStudentcoursedetails(req.body);
        console.log(result);
        return res.status(200).send({ "status": true, "Message": "Query Success", "data": result });
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}




