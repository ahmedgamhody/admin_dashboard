import { Box, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";

function Line({ isDashboard = false }) {
  const theme = useTheme();
  return (
    <Box sx={{ height: isDashboard ? "280px" : "75vh" }}>
      <ResponsiveLine
        animate={false}
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
                stroke: theme.palette.text.primary,
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.text.primary,
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          grid: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 1,
            },
          },
          legends: {
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "transparent",
            },
          },
        }}
        data={data}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        curve="catmullRom"
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: !isDashboard && "transportation",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: !isDashboard && "count",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
}

const data = [
  {
    id: "japan",
    color: "hsl(356, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 250,
      },
      {
        x: "helicopter",
        y: 122,
      },
      {
        x: "boat",
        y: 21,
      },
      {
        x: "train",
        y: 60,
      },
      {
        x: "subway",
        y: 221,
      },
      {
        x: "bus",
        y: 51,
      },
      {
        x: "car",
        y: 148,
      },
      {
        x: "moto",
        y: 79,
      },
      {
        x: "bicycle",
        y: 84,
      },
      {
        x: "horse",
        y: 35,
      },
      {
        x: "skateboard",
        y: 22,
      },
      {
        x: "others",
        y: 278,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(23, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 82,
      },
      {
        x: "helicopter",
        y: 197,
      },
      {
        x: "boat",
        y: 218,
      },
      {
        x: "train",
        y: 110,
      },
      {
        x: "subway",
        y: 121,
      },
      {
        x: "bus",
        y: 161,
      },
      {
        x: "car",
        y: 13,
      },
      {
        x: "moto",
        y: 225,
      },
      {
        x: "bicycle",
        y: 58,
      },
      {
        x: "horse",
        y: 286,
      },
      {
        x: "skateboard",
        y: 122,
      },
      {
        x: "others",
        y: 250,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(106, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 124,
      },
      {
        x: "helicopter",
        y: 282,
      },
      {
        x: "boat",
        y: 273,
      },
      {
        x: "train",
        y: 204,
      },
      {
        x: "subway",
        y: 295,
      },
      {
        x: "bus",
        y: 163,
      },
      {
        x: "car",
        y: 127,
      },
      {
        x: "moto",
        y: 275,
      },
      {
        x: "bicycle",
        y: 206,
      },
      {
        x: "horse",
        y: 202,
      },
      {
        x: "skateboard",
        y: 147,
      },
      {
        x: "others",
        y: 40,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(220, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 193,
      },
      {
        x: "helicopter",
        y: 203,
      },
      {
        x: "boat",
        y: 26,
      },
      {
        x: "train",
        y: 216,
      },
      {
        x: "subway",
        y: 48,
      },
      {
        x: "bus",
        y: 172,
      },
      {
        x: "car",
        y: 0,
      },
      {
        x: "moto",
        y: 175,
      },
      {
        x: "bicycle",
        y: 239,
      },
      {
        x: "horse",
        y: 242,
      },
      {
        x: "skateboard",
        y: 205,
      },
      {
        x: "others",
        y: 281,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(23, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 274,
      },
      {
        x: "helicopter",
        y: 85,
      },
      {
        x: "boat",
        y: 3,
      },
      {
        x: "train",
        y: 256,
      },
      {
        x: "subway",
        y: 13,
      },
      {
        x: "bus",
        y: 257,
      },
      {
        x: "car",
        y: 240,
      },
      {
        x: "moto",
        y: 202,
      },
      {
        x: "bicycle",
        y: 277,
      },
      {
        x: "horse",
        y: 262,
      },
      {
        x: "skateboard",
        y: 2,
      },
      {
        x: "others",
        y: 74,
      },
    ],
  },
];
export default Line;
