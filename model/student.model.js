const mongoose = require('mongoose');
const db = require('../config/db');
const courseschema = require("./course.model");
const { Schema } = mongoose;


const studentschema = new Schema({
    Enrollment: {
        type: String,
        require: true,
        unique: true,
    },
    studentName: String,
    year: String,
    courses:
        [String]
});

const StudentModel = db.model("student", studentschema);
module.exports = StudentModel;