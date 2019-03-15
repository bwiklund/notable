import React from "react";
import { Physician } from "../services/Api";

interface PhysiciansListProps {
  physicians: Physician[];
  onSelectPhysician: (id: string) => void;
}

export class PhysiciansList extends React.Component<PhysiciansListProps> {
  render() {
    return (
      <div>
        <p>Physicianslist</p>
        <ul>
          {this.props.physicians.map(a =>
            <li key={"" + a.id} onClick={(e) => this.props.onSelectPhysician(a.id)}>{a.firstName}</li>
          )}
        </ul>
      </div>
    )
  }
}