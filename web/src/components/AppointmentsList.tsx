import React from "react";
import { Appointment } from "../services/Api";


export class AppointmentsList extends React.Component<{ appointments: Appointment[] }> {
  render() {
    return (
      <div>
        <p>AppointmentsList</p>
        <ul>
          {this.props.appointments.map(a =>
            <li key={"" + a.id}>{a.firstName}</li>
          )}
        </ul>
      </div>
    )
  }
}