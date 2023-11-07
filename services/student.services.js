const StudentModel = require("../model/student.model");
const CourseModel = require("../model/course.model");
const { ObjectId } = require('mongoose').Types;
const mongoose = require('mongoose');


// async function Student(params) {
//     try {
//         const { studentName, year, courses } = params;
//         const courseIds = courses.map((courseId) => mongoose.Types.ObjectId(courseId));
//         const validCourseIds = await validateCourseIds(courseIds);
//         if (!validCourseIds) {
//             return 'Invalid course IDs';
//         }
//         const student = new StudentModel({
//             studentName,
//             year,
//             courses: validCourseIds,
//         });
//         const createdStudent = await student.save();
//         return createdStudent;
//     } catch (error) {
//         console.error(error);
//         return 'Student Not Added';
//     }
// }

// async function validateCourseIds(courseIds) {
//     // Check if all course IDs exist in the Course collection
//     const validCourseIds = await CourseModel.find({
//         _id: { $in: courseIds },
//     });

//     // Ensure all course IDs were found in the Course collection
//     if (validCourseIds.length !== courseIds.length) {
//         return null; // Invalid course IDs
//     }

//     // Return an array of valid course IDs
//     return validCourseIds.map((course) => course._id);
// }



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

module.exports = { Student, getStudent };