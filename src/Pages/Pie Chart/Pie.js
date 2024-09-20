import { Box, useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";

const data = [
  { id: "python", label: "python", value: 422 },
  { id: "haskell", label: "haskell", value: 330 },
  { id: "make", label: "make", value: 76 },
  { id: "erlang", label: "erlang", value: 595 },
  { id: "php", label: "php", value: 225 },
];

function Pie({ isDashboard = false }) {
  const theme = useTheme();

  const colors =
    theme.palette.mode === "dark"
      ? {
          python: theme.palette.primary.light,
          haskell: theme.palette.secondary.light,
          make: theme.palette.warning.light,
          erlang: theme.palette.info.light,
          php: theme.palette.success.light,
        }
      : {
          python: theme.palette.primary.main,
          haskell: theme.palette.secondary.main,
          make: theme.palette.warning.main,
          erlang: theme.palette.info.main,
          php: theme.palette.success.main,
        };

  return (
    <Box sx={{ height: isDashboard ? "280px" : "75vh" }}>
      <ResponsivePie
        enableArcLabels={isDashboard ? false : true}
        enableArcLinkLabels={isDashboard ? false : true}
        theme={{
          text: {
            fontSize: 11,
            fill: theme.palette.text.primary,
          },
          legends: {
            text: {
              fontSize: 11,
              fill: theme.palette.text.secondary,
            },
          },
          tooltip: {
            container: {
              background: theme.palette.background.paper,
              color: theme.palette.text.primary,
              fontSize: 12,
            },
          },
        }}
        data={data.map((item) => ({
          ...item,
          color: colors[item.id],
        }))}
        margin={{
          top: isDashboard ? 30 : 80,
          right: isDashboard ? 30 : 80,
          bottom: isDashboard ? 30 : 80,
          left: isDashboard ? 30 : 80,
        }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={theme.palette.text.primary}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          { match: { id: "python" }, id: "dots" },
          { match: { id: "haskell" }, id: "lines" },
        ]}
        legends={
          !isDashboard
            ? [
                {
                  anchor: "bottom",
                  direction: "row",
                  justify: false,
                  translateX: 0,
                  translateY: 56,
                  itemsSpacing: 0,
                  itemWidth: 100,
                  itemHeight: 18,
                  itemTextColor: theme.palette.text.secondary,
                  itemDirection: "left-to-right",
                  itemOpacity: 1,
                  symbolSize: 18,
                  symbolShape: "circle",
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemTextColor: theme.palette.text.primary,
                      },
                    },
                  ],
                },
              ]
            : undefined
        }
      />
    </Box>
  );
}

export default Pie;
