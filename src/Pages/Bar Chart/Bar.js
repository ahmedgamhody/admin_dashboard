import { Box, useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
const data = [
  {
    country: "AD",
    "hot dog": 97,
    "hot dogColor": "hsl(20, 70%, 50%)",
    burger: 114,
    burgerColor: "hsl(270, 70%, 50%)",
    sandwich: 177,
    sandwichColor: "hsl(254, 70%, 50%)",
    kebab: 101,
    kebabColor: "hsl(275, 70%, 50%)",
    fries: 41,
    friesColor: "hsl(128, 70%, 50%)",
    donut: 30,
    donutColor: "hsl(300, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 47,
    "hot dogColor": "hsl(188, 70%, 50%)",
    burger: 162,
    burgerColor: "hsl(60, 70%, 50%)",
    sandwich: 57,
    sandwichColor: "hsl(108, 70%, 50%)",
    kebab: 150,
    kebabColor: "hsl(175, 70%, 50%)",
    fries: 177,
    friesColor: "hsl(147, 70%, 50%)",
    donut: 57,
    donutColor: "hsl(219, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 25,
    "hot dogColor": "hsl(354, 70%, 50%)",
    burger: 77,
    burgerColor: "hsl(212, 70%, 50%)",
    sandwich: 64,
    sandwichColor: "hsl(211, 70%, 50%)",
    kebab: 53,
    kebabColor: "hsl(255, 70%, 50%)",
    fries: 188,
    friesColor: "hsl(75, 70%, 50%)",
    donut: 97,
    donutColor: "hsl(70, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 151,
    "hot dogColor": "hsl(26, 70%, 50%)",
    burger: 162,
    burgerColor: "hsl(280, 70%, 50%)",
    sandwich: 32,
    sandwichColor: "hsl(309, 70%, 50%)",
    kebab: 23,
    kebabColor: "hsl(349, 70%, 50%)",
    fries: 185,
    friesColor: "hsl(272, 70%, 50%)",
    donut: 143,
    donutColor: "hsl(320, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 100,
    "hot dogColor": "hsl(84, 70%, 50%)",
    burger: 186,
    burgerColor: "hsl(332, 70%, 50%)",
    sandwich: 134,
    sandwichColor: "hsl(211, 70%, 50%)",
    kebab: 94,
    kebabColor: "hsl(275, 70%, 50%)",
    fries: 1,
    friesColor: "hsl(155, 70%, 50%)",
    donut: 60,
    donutColor: "hsl(298, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 22,
    "hot dogColor": "hsl(311, 70%, 50%)",
    burger: 52,
    burgerColor: "hsl(79, 70%, 50%)",
    sandwich: 109,
    sandwichColor: "hsl(342, 70%, 50%)",
    kebab: 116,
    kebabColor: "hsl(315, 70%, 50%)",
    fries: 150,
    friesColor: "hsl(96, 70%, 50%)",
    donut: 65,
    donutColor: "hsl(240, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 143,
    "hot dogColor": "hsl(307, 70%, 50%)",
    burger: 71,
    burgerColor: "hsl(338, 70%, 50%)",
    sandwich: 11,
    sandwichColor: "hsl(170, 70%, 50%)",
    kebab: 66,
    kebabColor: "hsl(339, 70%, 50%)",
    fries: 71,
    friesColor: "hsl(288, 70%, 50%)",
    donut: 179,
    donutColor: "hsl(194, 70%, 50%)",
  },
];
function Bar({ isDashboard = false }) {
  const them = useTheme();

  return (
    <Box sx={{ width: "100%", height: isDashboard ? "350px" : "75vh" }}>
      <ResponsiveBar
        theme={{
          text: {
            fontSize: 11,
            fill: "#333333",
            outlineWidth: 0,
            outlineColor: "transparent",
          },
          axis: {
            domain: {
              line: {
                stroke: them.palette.text.primary,
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: them.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            ticks: {
              line: {
                stroke: them.palette.text.primary,
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: them.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          grid: {
            line: {
              stroke: them.palette.divider,
              strokeWidth: 1,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: "#333333",
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            text: {
              fontSize: 11,
              fill: them.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "transparent",
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: "#333333",
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: "#333333",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: "#000000",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            wrapper: {},
            container: {
              background: "#ffffff",
              color: "#333333",
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
        data={data}
        keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
        indexBy="country"
        margin={{
          top: 50,
          right: isDashboard ? "50" : "160",
          bottom: isDashboard ? "20" : "55",
          left: 60,
        }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "nivo" }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "fries",
            },
            id: "dots",
          },
          {
            match: {
              id: "sandwich",
            },
            id: "lines",
          },
        ]}
        borderColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: !isDashboard && "country",
          legendPosition: "middle",
          legendOffset: 40,
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: !isDashboard && "food",
          legendPosition: "middle",
          legendOffset: -50,
          truncateTickAt: 0,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        legends={
          !isDashboard
            ? [
                {
                  dataFrom: "keys",
                  anchor: "bottom-right",
                  direction: "column",
                  justify: false,
                  translateX: 120,
                  translateY: 0,
                  itemsSpacing: 2,
                  itemWidth: 100,
                  itemHeight: 20,
                  itemDirection: "left-to-right",
                  itemOpacity: 0.85,
                  symbolSize: 20,
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]
            : undefined
        }
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={(e) =>
          e.id + ": " + e.formattedValue + " in country: " + e.indexValue
        }
      />
    </Box>
  );
}

export default Bar;
