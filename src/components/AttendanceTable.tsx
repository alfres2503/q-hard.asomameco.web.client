import { Attendance } from '@/types/models/Attendance';
import { Switch, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '@tremor/react';
import React from 'react';

interface AttendanceTableProps {
  data: Attendance[];
}

const AttendanceTable: React.FC<AttendanceTableProps> = ({ data }) => {
    return (
        <div>
        <Table>
                <TableHead>
                  <TableRow>
                    <TableHeaderCell>Asociado</TableHeaderCell>
                    <TableHeaderCell>Hora de Llegada</TableHeaderCell>
                    <TableHeaderCell>Confirmación</TableHeaderCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((attendance: Attendance) => (
                    <TableRow
                      key={attendance.idEvent}
                    >
                      <TableCell>{attendance.associate?.name}</TableCell>
                      <TableCell>{attendance.arrivalTime}</TableCell>
                      <TableCell>
                        <Switch
                          checked={attendance.isConfirmed}
                          onChange={() => {}}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
        </div>
    );
};

export default AttendanceTable;