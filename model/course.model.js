const mongoose = require('mongoose');
const db = require('../config/db');

const { Schema } = mongoose;

const courseschema = new Schema({
    CourseID: {
        type: String,
        require: true,
        unique: true,
    },
    courseName: String,
    type: String,
});

const CourseModel = db.model("course", courseschema);
module.exports = CourseModel;