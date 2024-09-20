import { Box, Typography, useTheme } from "@mui/material";

function Header({ title, subTitle }) {
  const theme = useTheme();
  return (
    <Box mb={4}>
      <Typography
        variant="h4"
        fontWeight={"bold"}
        color={theme.palette.info.main}
        textTransform={"uppercase"}
        mb={0.5}
      >
        {title}
      </Typography>
      <Typography variant="body1">{subTitle}</Typography>
    </Box>
  );
}

export default Header;
