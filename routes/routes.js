const express = require("express");
const router = express.Router();
const home = router.get("/", (req, res) => {
  res.status(200).render("index");
});
const about = router.get("/about", (req, res) => {
  res.status(200).render("about");
});
const blog = router.get("/blog", (req, res) => {
  res.status(200).render("blog");
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
const courseGrid2 = router.get("/course-grid-2", (req, res) => {
  res.status(200).render("course-grid-2");
});
const courseGrid3 = router.get("/course-grid-3", (req, res) => {
  res.status(200).render("course-grid-3");
});
const courseGrid4 = router.get("/course-grid-4", (req, res) => {
  res.status(200).render("course-grid-4");
});

module.exports = {
  about,
  courseGrid2,
  courseGrid3,
  courseGrid4,
  blog,
  blogSingle,

  home,
};
