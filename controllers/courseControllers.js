const { request } = require("express");
const courseModel = require("../models/course");

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await courseModel.find();
    res.render("course-grid-2", { courses });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};
//TODO hata mesajları için ayrı bir sayfa oluşturulabilir.
exports.getCourseById = async (req, res) => {
  console.log(req.body);
  try {
    const course = await courseModel.findById(req.params.id);
    if (!course) {
      return res.status(404).send("Course not found");
    }
    res.render("course-details", { course });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};
exports.createCourse = async (req, res) => {
  try {
    const file = req.files.image;
    const fileName = Date.now() + "-" + file.name;
    await file.mv("public/images/" + fileName);
    const course = await courseModel.create({
      ...req.body,
      image: "/images/" + fileName,
    });
    res.status(201).render("courses");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};
