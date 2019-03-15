import React from "react";
import { Appointment } from "../services/Api";


export class AppointmentsList extends React.Component<{ appointments: Appointment[] }> {
  render() {
    return (
      <div>
        <ul>
          {this.props.appointments.map(a =>
            <li key={"" + a.id}>{a.firstName} {a.lastName}</li>
          )}
        </ul>
      </div>
    )
  }
}