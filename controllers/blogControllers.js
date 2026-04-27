const { request } = require("express");
const blogModel = require("../models/blog");

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogModel.find();
    res.render("blog", { blogs });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};
exports.getBlogById = async (req, res) => {
  try {
    const blog = await blogModel.findById(req.params.id); 
    if (!blog) {
      return res.status(404).send("Blog not found");
    }
    res.render("blog-single", { blog });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};
exports.createBlog = async (req, res) => {
  console.log(req.body);
  console.log(req.files);
  try {
    const file = req.files.blogImage;
    const fileName = Date.now() + "-" + file.name;
    await file.mv("public/images/" + fileName);
    const blog = await blogModel.create({
      ...req.body,
      blogImage: "/images/" + fileName,
    });
    res.status(201).render("blog");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};