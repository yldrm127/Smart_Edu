const express = require('express');
const app = express();
const ejs = require('ejs');
const { about, courseGrid2, home } = require('./routes/routes');
app.set('view engine', 'ejs');
//temp klasorundeki statik dosyalara tarayıcıdan erişim sağlamak için express.static middleware'ini kullanıyoruz.   
app.use(express.static('public'));
app.use("/", home);
app.use("/about", about);
app.use("/course-grid-2", courseGrid2);
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});