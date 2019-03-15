import React from "react";
import { Physician } from "../services/Api";

interface PhysiciansListProps {
  physicians: Physician[];
  onSelectPhysician: (physician: Physician) => void;
}

export class PhysiciansList extends React.Component<PhysiciansListProps> {
  render() {
    return (
      <div>
        <h2>Physicians</h2>
        <ul>
          {this.props.physicians.map(apt =>
            <li key={"" + apt.id} onClick={(e) => this.props.onSelectPhysician(apt)}>{apt.lastName}, {apt.firstName}</li>
          )}
        </ul>
      </div>
    )
  }
}