import faker = require("faker");

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

export const fakeDb: FakeDb = {
  physicians: [],
  appointments: []
}

// make our fake values

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
