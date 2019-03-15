import React from "react";
import { PhysiciansList } from "./PhysiciansList";
import { AppointmentsList } from "./AppointmentsList";
import { Physician, Appointment } from "../services/Api";

interface CalendarState {
  physicians?: Physician[];
  appointments?: Appointment[];
}

export class Calendar extends React.Component<any, CalendarState> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="calendar">
        <PhysiciansList physicians={this.state.physicians || []} />
        <AppointmentsList appointments={this.state.appointments || []} />
      </div>
    )
  }
}