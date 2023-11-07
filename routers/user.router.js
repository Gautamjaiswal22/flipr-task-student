const router = require("express").Router();
const studentController = require("../controller/student.controller");
router.post('/addStudent', studentController.addStudent);
router.get('/addStudent/:course', studentController.getStudentcourse);
module.exports = router;
