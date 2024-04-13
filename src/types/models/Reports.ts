export interface AttendancePercentageReport
{
  totalAssociates: number;
  averageAttendancePercentage: number;
}

export interface EventAttendanceReport
{
  name: string;
  attendanceCount: number;
}

export interface MonthlyEventsReport
{
  month: number;
  eventsCount: number;
}

export interface MemberEventsCoveredReport
{
  memberName: string;
  eventsCovered: number;
}