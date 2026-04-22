const express = require('express');
const app = express();
const ejs = require('ejs');
const router = require('./routes/routes');
const mongoose = require('mongoose');
const courseModel = require('./models/course');
const fileUpload = require('express-fileupload');
app.use(fileUpload());
mongoose.connect('mongodb://127.0.0.1:27017/smartEdu-db')
  .then(() => console.log('Connected!'));
  mongoose.models = {'Course': courseModel}; 
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
//temp klasorundeki statik dosyalara tarayıcıdan erişim sağlamak için express.static middleware'ini kullanıyoruz.   
app.use(express.static('public'));
app.use("/", router);
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});