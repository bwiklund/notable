import React from "react";
import { PhysiciansList } from "./PhysiciansList";
import { AppointmentsList } from "./AppointmentsList";
import { Physician, Appointment, api } from "../services/Api";

interface CalendarState {
  physicians?: Physician[];
  selectedPhysician?: Physician;
  appointments?: Appointment[];
}

export class Calendar extends React.Component<any, CalendarState> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  selectPhysician(physician: Physician) {
    this.setState({ selectedPhysician: physician });

    api.getAppointments(physician.id).then(resp => {
      this.setState({ appointments: resp.data });
    });
  }

  componentDidMount() {
    api.getPhysicians().then(resp => {
      this.selectPhysician(resp.data[0]);
      this.setState({ physicians: resp.data });
    });
  }

  render() {
    var physician = this.state.selectedPhysician;

    return (
      <div className="calendar">

        <div className="sidebar">
          <h1>notable</h1>
          <PhysiciansList
            physicians={this.state.physicians || []}
            onClickPhysician={(physician) => this.selectPhysician(physician)}
            selectedPhysician={this.state.selectedPhysician}
          />
        </div>

        <div className="main">
          <h2 className="physician-name">{physician && (physician.title + " " + physician.firstName + " " + physician.lastName)}</h2>
          <h3 className="physician-email">{physician && physician.email}</h3>
          <AppointmentsList appointments={this.state.appointments || []} />
        </div>

      </div>
    )
  }
}