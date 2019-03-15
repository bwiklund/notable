import * as express from "express";
import * as cors from "cors";
import * as _ from "lodash";
import * as faker from "faker";
import {fakeDb as db} from "./fakeDb";

const app = express();

app.use(cors());

app.get("/api/v1", (req, res) => {
  res.send("hi, i'm an api");
});

app.get("/api/v1/physicians", (req, res) => {
  res.send(db.physicians);
});

app.get("/api/v1/appointments/:id", (req, res) => {
  res.send(db.appointments.filter(a => a.physicianId == req.params.id));
});

app.listen(3001);