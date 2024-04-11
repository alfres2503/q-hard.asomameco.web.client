import Layout from "./layout";
import {
  BarList,
  Card,
  Flex,
  Metric,
  Title,
  Text,
  AreaChart,
} from "@tremor/react";
import { GenericService } from "@/services/GenericService";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { usePathname, useSearchParams } from "next/navigation";
import { useNotification } from "@/hooks/useNotification";
import { AttendancePercentageReport, EventAttendanceReport, MemberEventsCoveredReport, MonthlyEventsReport } from "@/types/models/Reports";


const DashboardPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { Notification } = useNotification();

  const [percentage, setPercentage] = useState<AttendancePercentageReport | null>(null);
  const [member, setMember] = useState<MemberEventsCoveredReport | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [website, setWebSite] = useState([]); /* Monthly Events */
  const [chartData, setChartData] = useState([]); /* Event Trends */

  /* FETCH REPORTES */
  const fetchDataPercentage = async () => {
    try {
      const endpoint = `reports/percentage`;

      const response = await GenericService.list(endpoint);

      setPercentage(response.data);
      setIsLoading(false);
    } catch (error: any) {
      Notification(`Acerca del error MAP: ${error.message}`);
    }
  };

  const fetchDataTrends = async () => {
    try {
      const endpoint = `reports/trend`;

      const response = await GenericService.list(endpoint);

      const chartData = response.data.map((item: EventAttendanceReport) => ({
        Nombre: item.name,
        Asistencias: item.attendanceCount,
      }));
      setChartData(chartData);

      setIsLoading(false);
    } catch (error: any) {
      Notification(`Acerca del error: ${error.message}`);
    }
  };

  const fetchDataMonthly = async () => {
    try {
      const endpoint = `reports/monthly`;

      const response = await GenericService.list(endpoint);

      const websiteData = response.data.map((item: MonthlyEventsReport) => ({
        name: item.month.toString(),
        value: item.eventsCount,
      }));
      setWebSite(websiteData);

      setIsLoading(false);
    } catch (error: any) {
      Notification(`Acerca del error: ${error.message}`);
    }
  };

  const fetchDataMember = async () => {
    try {
      const endpoint = `reports/member`;

      const response = await GenericService.list(endpoint);

      setMember(response.data);
      setIsLoading(false);
    } catch (error: any) {
      Notification(`Acerca del error: ${error.message}`);
    }
  };

  useEffect(() => {
    setIsLoading(true);

    fetchDataTrends();
    fetchDataPercentage();
    fetchDataMonthly();
    fetchDataMember();
  }, []);

  console.log(percentage);
  console.log(website);
  console.log(chartData);
  console.log(member);

  /* INFO DE LOS GRAFICOS */
  const data = [
    {
      category: "Eventos por Mes",
      data: website,
    },
  ];

  return (
    <>
      <Layout>
        <section className="p-0 md:p-0 mx-auto max-w-9xl">
          <div className="flex flex-col md:flex-row justify-center gap-10 mt-10 pb-10">
            <div id="divisor" className="w-full md:w-[40%] h-full">
              <div id="arriba" className="flex flex-col md:flex-row justify-center gap-10 pb-5">
                <Card className="w-full md:w-1/2">
                  <Title>Porcentaje</Title>
                  <Flex
                    justifyContent="start"
                    alignItems="baseline"
                    className="space-x-2"
                  >
                    <Metric>{percentage ? parseFloat(percentage.averageAttendancePercentage.toFixed(2)) + '%' : 'Loading...'}</Metric>
                  </Flex>
                  <Flex
                    justifyContent="start"
                    alignItems="baseline"
                    className="space-x-2"
                  >
                    <Text>Asociados que asisten a eventos</Text>
                  </Flex>
                </Card>
                <Card className="w-full md:w-1/2">
                  <Title>Miembro más Trabajador</Title>
                  <Flex
                    justifyContent="start"
                    alignItems="baseline"
                    className="space-x-2"
                  >
                    <Metric>{member ? member.memberName : 'Loading...'}</Metric>
                  </Flex>
                  <Flex
                    justifyContent="start"
                    alignItems="baseline"
                    className="space-x-2"
                  >
                    <Text>{member ? member.eventsCovered : '-'} eventos cubiertos</Text>
                  </Flex>
                </Card>
              </div>

              {data.map((item) => (
                <Card key={item.category} className="w-full">
                  <Title>{item.category}</Title>
                  <Flex
                    justifyContent="start"
                    alignItems="baseline"
                    className="space-x-2"
                  >
                    <Text>Es el desglose de eventos en este año actual</Text>
                  </Flex>
                  <Flex className="mt-6">
                    <Text>Mes</Text>
                    <Text className="text-right">Eventos</Text>
                  </Flex>
                  <BarList
                    data={item.data}
                    valueFormatter={(number: number) =>
                      Intl.NumberFormat("us").format(number).toString()
                    }
                    className="mt-5 py"
                  />
                </Card>
              ))}

            </div>

            <Card className="w-full md:w-[40%] h-auto ">
              <Title>Estadísticas</Title>
              <Text>Comparación de asociados y asistencias</Text>
              <AreaChart
                className="mt-4 h-80"
                data={chartData}
                categories={["Asistencias"]}
                index="Nombre"
                colors={["orange", "blue"]}
                yAxisWidth={60}
              />
            </Card>
          </div>
        </section>

      </Layout>
    </>
  );
};

export default DashboardPage;
