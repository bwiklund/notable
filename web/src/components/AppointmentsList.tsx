import React from "react";
import { Appointment } from "../services/Api";


export class AppointmentsList extends React.Component<{ appointments: Appointment[] }> {
  render() {
    return (
      <div className="appointments">
        <table>
          <tbody>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Time</th>
              <th>Kind</th>
            </tr>

            {this.props.appointments.map((apt, i) => {
              // since our endpoint gives us a string and we need a date...
              //really i should do this once in the api but i have like 30 minutes left
              var time = new Date(apt.time);

              // not sure how this should change with data so
              // i'm just making it line up to whatever's in the list
              var num = i + 1;

              return (
                <tr key={"" + apt.id}>
                  <td>{num}</td>
                  <td>{apt.firstName} {apt.lastName}</td>
                  <td>{time.getHours() + ":" + time.getMinutes().toString().padStart(2, "0")}</td>
                  <td>{apt.kind}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}