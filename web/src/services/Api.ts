import _ from "lodash";

export interface Physician {
  id: string;
  lastName: string;
  firstName: string;
}

export interface Appointment {
  id: string;
  lastName: string;
  firstName: string;
  time: Date;
  kind: string;
}

export const api = {
  getPhysicians(): Promise<Physician[]> {
    return Promise.resolve([
      { id: "1", firstName: "Hibbert", lastName: "Julius" },
      { id: "2", firstName: "Krieger", lastName: "Algernop" },
      { id: "3", firstName: "Riviera", lastName: "Nick" },
      { id: "4", firstName: "Arlo", lastName: "Lobascio" },
    ])
  },

  getAppointments(): Promise<Appointment[]> {
    return Promise.resolve(_.shuffle([
      { id: "1", firstName: "Sterling", lastName: "Archer", time: new Date, kind: "New Patient" },
      { id: "2", firstName: "Cyril", lastName: "Figis", time: new Date, kind: "Follow-up" },
      { id: "3", firstName: "Ray", lastName: "Gillette", time: new Date, kind: "Follow-up" },
      { id: "4", firstName: "Lana", lastName: "Kaye", time: new Date, kind: "New Patient" },
      { id: "5", firstName: "Pam", lastName: "Poovey", time: new Date, kind: "New Patient" },
    ]))
  }
}
