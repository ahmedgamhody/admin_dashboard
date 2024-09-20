import Header from "../../components/Header";
import Bar from "./Bar";

function BarChartPage() {
  return (
    <>
      <Header
        title={"Bar Chart"}
        subTitle={"The minimum wage in Germany, France and Spain (EUR/month)"}
      />
      <Bar />;
    </>
  );
}

export default BarChartPage;
