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

    api.getAppointments(id).then(resp => {
      this.setState({ appointments: resp.data });
    });
  }

  componentDidMount() {
    api.getPhysicians().then(resp => {
      this.selectPhysician(resp.data[0].id);
      this.setState({ physicians: resp.data });
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