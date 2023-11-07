const mongoose = require('mongoose');
const db = require('../config/db');
const courseschema = require("./course.model");
const { Schema } = mongoose;

const studentschema = new Schema({
    EnrollmentId: {
        type: String,
        require: true,
    },
    EnrollmentDate: { type: date, default: Date.now() },
    StudentName: [{ type: Schema.Types.ObjectId, ref: '' }],
    year: String,
    courses:
        [{ type: Schema.Types.ObjectId, ref: 'courseschema' }],
    enrollmentType: String
});
const StudentModel = db.model("enrollment", studentschema);
module.exports = StudentModel;