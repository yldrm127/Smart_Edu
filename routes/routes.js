const express = require("express");
const router = express.Router();
const courseController = require('../controllers/courseControllers');

const home = router.get("/", (req, res) => {
  res.status(200).render("index");
});
const about = router.get("/about", (req, res) => {
  res.status(200).render("about");
});
const blog = router.get("/blog", (req, res) => {
  res.status(200).render("blog");
});
const addBlog = router.get("/addblog", (req, res) => {
  res.status(200).render("addBlog");
});
const pricing = router.get("/pricing", (req, res) => {
  res.status(200).render("pricing");
});
const teachers = router.get("/teachers", (req, res) => {
  res.status(200).render("teachers");
});
const contact = router.get("/contact", (req, res) => {
  res.status(200).render("contact");
});
const blogSingle = router.get("/blog-single", (req, res) => {
  res.status(200).render("blog-single");
});
const courseGrid2 = router.get("/course-grid-2", courseController.getAllCourses);
const courseAdd = router.get("/courses", (req, res) => {
  res.status(200).render("courses");
});
const courseCreate = router.post("/courses", courseController.createCourse);
module.exports = router
