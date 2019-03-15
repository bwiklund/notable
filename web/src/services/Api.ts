export interface Physician {
  lastName: string;
  firstName: string;
}

export interface Appointment {
  lastName: string;
  firstName: string;
  time: Date;
  kind: string;
}

export const api = {
  getPhysicians(): Promise<Physician[]> {
    return Promise.resolve([
      { firstName: "Hibbert", lastName: "Julius" },
      { firstName: "Krieger", lastName: "Algernop" },
      { firstName: "Riviera", lastName: "Nick" },
      { firstName: "Arlo", lastName: "Lobascio" },
    ])
  },

  getAppointments(): Promise<Appointment[]> {
    return Promise.resolve([
      { firstName: "Sterling", lastName: "Archer", time: new Date, kind: "New Patient" },
      { firstName: "Cyril", lastName: "Figis", time: new Date, kind: "Follow-up" },
      { firstName: "Ray", lastName: "Gillette", time: new Date, kind: "Follow-up" },
      { firstName: "Lana", lastName: "Kaye", time: new Date, kind: "New Patient" },
      { firstName: "Pam", lastName: "Poovey", time: new Date, kind: "New Patient" },
    ])
  }
}
