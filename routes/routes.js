const express = require("express");
const router = express.Router();
const courseController = require('../controllers/courseControllers');
const userController = require('../controllers/userControllers');
const blogController = require('../controllers/blogControllers');
const home = router.get("/", (req, res) => {
  res.status(200).render("index");
});
const login= router.post("/login", userController.login);
const register = router.post("/register", userController.register);
const about = router.get("/about", (req, res) => {
  res.status(200).render("about");
});
const blog = router.get("/blog", blogController.getAllBlogs);
const blogSingleGet = router.get("/blog/:id", blogController.getBlogById);
const addBlog = router.post("/addblog", blogController.createBlog);

const pricing = router.get("/pricing", (req, res) => {
  res.status(200).render("pricing");
});
const teachers = router.get("/teachers", (req, res) => {
  res.status(200).render("teachers");
});
const contact = router.get("/contact", (req, res) => {
  res.status(200).render("contact");
});
const courseGrid2 = router.get("/course-grid-2", courseController.getAllCourses);
const courseAdd = router.get("/courses", (req, res) => {
  res.status(200).render("courses");
});
const courseCreate = router.post("/courses", courseController.createCourse);
module.exports = router
