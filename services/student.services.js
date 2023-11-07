const StudentModel = require("../model/student.model");
const CourseModel = require("../model/course.model");
const { ObjectId } = require('mongoose').Types;
const mongoose = require('mongoose');




async function Student(params) {

    let { studentName, year, courses } = params;
    console.log(courses);
    try {
        let IdExist;
        let enrollment_ID;
        do {
            const min = 1000000;
            const max = 9999999;
            const randomDigits = Math.floor(Math.random() * (max - min + 1)) + min;
            enrollment_ID = `20100BTCSAII${randomDigits}`;
            console.log(enrollment_ID);
            IdExist = await StudentModel.find({
                'Enrollment'
                    : enrollment_ID
            });
            if (IdExist.length == 0) {
                const user = new StudentModel({
                    Enrollment: enrollment_ID,
                    studentName,
                    year,
                    courses
                });
                const createduser = await user.save();
                return createduser;
            }
        } while (IdExist.length > 0);
    }
    catch (err) {
        console.log(err);
        return "Student Not Added";
    }
}

async function getStudent(params) {
    let { course } = params;
    try {
        IdExist = await StudentModel.find({
            'course'
                : course
        });
        if (IdExist > 0) {
            return IdExist;
        }
        else {
            return "Not Found"
        }
    }
    catch (err) {
        console.log(err);
        return "error";
    }
}

async function getStudentdetails(params) {
    let { name } = params;
    try {
        IdExist = await StudentModel.find({
            'studentName'
                : name
        });
        if (IdExist > 0) {
            return IdExist;
        }
        else {
            return "Not Found"
        }
    }
    catch (err) {
        console.log(err);
        return "error";
    }
}

module.exports = { Student, getStudent, getStudentdetails };