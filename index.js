const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static("./public"));

app.get("/", (req, res) => {
    res.render("./index.html");
  });
  
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
  
  //npm i @babel/core 

  //npm i @babel/cli @babel/preset-react nodemon

  //Install dependecies 

