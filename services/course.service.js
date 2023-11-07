
const CourseModel = require("../model/course.model");


async function course(params) {
    let data = params;
    try {

        const user = new CourseModel({
            data
        });
        const createduser = await user.save();
        return createduser;
    }
    catch (err) {
        console.log(err);
        return "Student Not Added";
    }
}
module.exports = { course };