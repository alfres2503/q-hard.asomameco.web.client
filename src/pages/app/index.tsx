import React from "react";
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

const website = [
  { name: "/home", value: 1230 },
  { name: "/contact", value: 751 },
  { name: "/about", value: 471 },
  { name: "/inscription", value: 280 },
  { name: "/events", value: 78 },
];

const data = [
  {
    category: "Página Web",
    stat: "10,234",
    data: website,
  },
];

const chartData = [
  {
    Month: "Diciembre",
    Asociados: 2000,
    Asistencias: 1800,
  },
  {
    Month: "Enero",
    Asociados: 3000,
    Asistencias: 1398,
  },
  {
    Month: "Febrero",
    Asociados: 4000,
    Asistencias: 2500,
  },
];

const DashboardPage = () => {
  return (
    <>
      <Layout>
        <section className="p-0 md:p-0 mx-auto max-w-9xl">
          <div className="flex flex-col md:flex-row justify-center gap-10 mt-10">
            {data.map((item) => (
              <Card key={item.category} className="w-full md:w-[40%] h-auto">
                <Title>{item.category}</Title>
                <Flex
                  justifyContent="start"
                  alignItems="baseline"
                  className="space-x-2"
                >
                  <Metric>{item.stat}</Metric>
                  <Text>Visitas</Text>
                </Flex>
                <Flex className="mt-6">
                  <Text>Páginas</Text>
                  <Text className="text-right">Visitas</Text>
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
            <Card className="w-full md:w-[40%] h-auto">
              <Title>Estadísticas</Title>
              <Text>Comparación de asociados y asistencias</Text>
              <AreaChart
                className="mt-4 h-80"
                data={chartData}
                categories={["Asociados", "Asistencias"]}
                index="Month"
                colors={["blue", "orange"]}
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
