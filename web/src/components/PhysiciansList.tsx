import React from "react";
import { Physician } from "../services/Api";

interface PhysiciansListProps {
  physicians: Physician[];
  onClickPhysician: (physician: Physician) => void;
  selectedPhysician?: Physician;
}

export class PhysiciansList extends React.Component<PhysiciansListProps> {
  render() {
    return (
      <div className="physicians">
        <h2>Physicians</h2>
        <ul>
          {this.props.physicians.map(apt => {
            var isCurrent = this.props.selectedPhysician && this.props.selectedPhysician.id == apt.id;
            return (
              <li className={isCurrent ? "current" : ""} key={"" + apt.id} onClick={(e) => this.props.onClickPhysician(apt)}>
                {apt.lastName}, {apt.firstName}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}