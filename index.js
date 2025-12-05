import express from 'express';
const app = express();

const port = 8080;

// Middleware
app.use(express.urlencoded({ extended: true }));  
app.use(express.static("public"));

// Set View Engine
app.set("view engine", "ejs");

// Routes
app.get('/', (req, res) => {
  res.render("form");
});

app.post("/genrate", (req, res) => {

  
  res.render("cover", {
     data: {
      name: req.body.name,
      reg: req.body.reg,
      studentid: req.body.studentid,
      session: req.body.session,
      semester: req.body.semester,
      subject: req.body.subname,
      
      code: req.body.code
     }
  });

});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
