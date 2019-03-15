import * as express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hi");
});

app.get("/api/v1/physicians", (req, res) => {
  var data = [
    { id: "1", firstName: "Hibbert", lastName: "Julius" },
    { id: "2", firstName: "Krieger", lastName: "Algernop" },
    { id: "3", firstName: "Riviera", lastName: "Nick" },
    { id: "4", firstName: "Arlo", lastName: "Lobascio" },
  ];

  res.send(data);
});

app.listen(3001);