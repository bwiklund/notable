import _ from "lodash";
import axios from "axios";

export interface Physician {
  id: string;
  title: string;
  lastName: string;
  firstName: string;
  email: string;
}

export interface Appointment {
  id: string;
  physicianId: string;
  lastName: string;
  firstName: string;
  time: Date;
  kind: string;
}

const API_URL = "http://localhost:3001/api/v1";

export const api = {
  getPhysicians() {
    return axios.get<Physician[]>(API_URL + "/physicians");
  },

  getAppointments(physicianId: string) {
    return axios.get<Appointment[]>(API_URL + "/appointments/" + physicianId);
  }
}
