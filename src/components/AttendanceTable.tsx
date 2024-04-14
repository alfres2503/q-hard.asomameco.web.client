import { Attendance } from "@/types/models/Attendance";
import {
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";
import React, { FC } from "react";

interface AttendanceTableProps {
  attendances: Attendance[];
}

const AttendanceTable: FC<AttendanceTableProps> = ({ attendances }) => {
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Evento</TableHeaderCell>
            <TableHeaderCell>Asociado</TableHeaderCell>
            <TableHeaderCell>Hora de Llegada</TableHeaderCell>
            <TableHeaderCell>Confirmación</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {attendances.map((attendance: Attendance) => (
            <TableRow key={attendance.idEvent}>
              <TableCell>{attendance.event?.name}</TableCell>
              <TableCell>{attendance.associate?.name}</TableCell>
              <TableCell>{attendance.arrivalTime}</TableCell>
              <TableCell>
                <Switch checked={attendance.isConfirmed} onChange={() => {}} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AttendanceTable;
