import * as express from "express";
import * as cors from "cors";
import * as _ from "lodash";
import * as faker from "faker";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("hi");
});


// TODO copy pasted interfaces from frontend, should share code here
export interface Physician {
  id: string;
  lastName: string;
  firstName: string;
}

export interface Appointment {
  id: string;
  physicianId: string;
  lastName: string;
  firstName: string;
  time: Date;
  kind: string;
}

interface FakeDb {
  physicians: Physician[],
  appointments: Appointment[]
}

const fakeDb: FakeDb = {
  physicians: [],
  appointments: []
}

for (var i = 0; i < 10; i++) {
  fakeDb.physicians.push({
    id: faker.random.alphaNumeric(16),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
  });
}

fakeDb.physicians.push({ id: "1", firstName: "Arlo", lastName: "Lobascio" });

fakeDb.physicians.forEach(p => {
  var num = 5 + Math.random() * 10;
  for (var i = 0; i < num; i++) {
    fakeDb.appointments.push({
      id: faker.random.alphaNumeric(16),
      physicianId: (p as any).id,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      time: faker.date.future(1),
      kind: Math.random() > 0.5 ? "New Patient" : "Follow-up"
    });
  }
});

app.get("/api/v1/physicians", (req, res) => {
  res.send(fakeDb.physicians);
});

app.get("/api/v1/appointments/:id", (req, res) => {
  res.send(fakeDb.appointments.filter(a => a.physicianId == req.params.id));
});

app.listen(3001);