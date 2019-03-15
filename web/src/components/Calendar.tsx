import React from "react";
import { PhysiciansList } from "./PhysiciansList";
import { AppointmentsList } from "./AppointmentsList";
import { Physician, Appointment, api } from "../services/Api";

interface CalendarState {
  physicians?: Physician[];
  selectedPhysicianId?: string;
  appointments?: Appointment[];
}

export class Calendar extends React.Component<any, CalendarState> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  selectPhysician(id: string) {
    this.setState({ selectedPhysicianId: id });

    api.getAppointments().then(data => {
      this.setState({ appointments: data });
    });
  }

  componentDidMount() {
    api.getPhysicians().then(data => {
      this.selectPhysician(data[0].id);
      this.setState({ physicians: data });
    });
  }

  render() {
    return (
      <div className="calendar">
        <PhysiciansList physicians={this.state.physicians || []} onSelectPhysician={(id) => this.selectPhysician(id)} />
        <AppointmentsList appointments={this.state.appointments || []} />
      </div>
    )
  }
}