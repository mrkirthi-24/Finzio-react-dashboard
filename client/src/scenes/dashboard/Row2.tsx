import DashboardBox from "@/components/DashboardBox";
import { useTheme } from "@emotion/react";
import { useGetKpisQuery } from "@/state/api";
import { useMemo } from "react";

type Props = {};

const Row2 = (props: Props) => {
  const { palette } = useTheme();
  const { data: operationalData } = useGetKpisQuery();

  const operationalExpenses = useMemo(() => {
    return (
      operationalData &&
      operationalData[0].monthlyData.map(
        ({ month, operationalExpenses, nonOperationalExpenses }) => {
          return {
            name: month.substring(0, 3),
            operationalExpenses: operationalExpenses,
            nonOperationalExpenses: nonOperationalExpenses,
          };
        }
      )
    );
  }, [operationalData]);

  return (
    <>
      <DashboardBox gridArea="d"></DashboardBox>
      <DashboardBox gridArea="e"></DashboardBox>
      <DashboardBox gridArea="f"></DashboardBox>
    </>
  );
};

export default Row2;
