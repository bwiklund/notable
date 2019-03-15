import * as express from "express";
import * as _ from "lodash";

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

app.get("/api/v1/appointments", (req, res) => {
  var data = _.shuffle([
    { id: "1", firstName: "Sterling", lastName: "Archer", time: new Date, kind: "New Patient" },
    { id: "2", firstName: "Cyril", lastName: "Figis", time: new Date, kind: "Follow-up" },
    { id: "3", firstName: "Ray", lastName: "Gillette", time: new Date, kind: "Follow-up" },
    { id: "4", firstName: "Lana", lastName: "Kaye", time: new Date, kind: "New Patient" },
    { id: "5", firstName: "Pam", lastName: "Poovey", time: new Date, kind: "New Patient" },
  ]);

  res.send(data);
});

app.listen(3001);