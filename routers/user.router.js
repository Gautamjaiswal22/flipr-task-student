const router = require("express").Router();
const studentController = require("../controller/student.controller");
router.post('/addStudent', studentController.addStudent);
router.post('/addCourse', studentController.addcourse);
router.get('/Student/:course', studentController.getStudentcourse);
router.get('/course/:student', studentController.getStudentcoursedetails);


module.exports = router;
