const express = require("express");
const app = express();
const port = 3000;
const client = require("./db/conn.js");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.json({ msg: "hello world" });
});

app.get("/blogs", async (req, res) => {
  //   res.send('Hello World!')
  const result = await client.query("SELECT * FROM blogs");
  // console.log(res.rows[0]);
  res.json({ msg: result.rows });
});

app.get("/blogs/:cat", async (req, res) => {
  const result = await client.query(
    req.params.cat!='all' ?`SELECT * FROM blogs where category= '${req.params.cat}'` :"SELECT * FROM blogs");

  res.json({ msg: result.rows });
});

app.get("/blogsbyid/:id", async (req, res) => {
  const result = await client.query(
    `SELECT * FROM blogs where id= ${req.params.id}`

  );
  // console.log(result);
  res.json({ msg: result.rows });
});

app.post("/blogs", async (req, res) => {
  console.log(req.body);
  const result = await client.query(
    `INSERT INTO blogs (title, image, post, category) VALUES ($1, $2, $3, $4)`,
    [req.body.title, req.body.image, req.body.post, req.body.category]
  );
  res.json({ msg: "blog added", desc: result.rowCount });
  // res.send("post req success");
});

app.post("/blogimg", upload.single("file"), function (req, res, next) {
  res.json(req.file);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
