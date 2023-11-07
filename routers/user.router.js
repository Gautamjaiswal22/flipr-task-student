const router = require("express").Router();
const studentController = require("../controller/student.controller");
router.post('/addStudent', studentController.addStudent);
router.post('/addCourse', studentController.addcourse);
router.get('/addStudent/:course', studentController.getStudentcourse);

module.exports = router;
