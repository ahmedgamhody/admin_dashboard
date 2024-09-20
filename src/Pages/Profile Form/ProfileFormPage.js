import { Stack, Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useForm } from "react-hook-form";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import React from "react";
import Header from "../../components/Header";

const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manger",
    label: "Manger",
  },
  {
    value: "User",
    label: "User",
  },
];

function ProfileFormPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange", // Validate on every change
  });
  const onSubmit = (formData) => {
    console.log("Form submitted:", formData);
    handleClick();
  };

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Header title={"Create user"} subTitle={"Create a New User Profile"} />

      <Stack direction={"row"} gap={3}>
        <TextField
          {...register("firstName", { required: true, minLength: 3 })}
          error={Boolean(errors.firstName)}
          helperText={
            errors.firstName
              ? errors.firstName.type === "minLength"
                ? "Minimum 3 characters required"
                : "This field is required"
              : ""
          }
          label="First Name"
          variant="filled"
          sx={{ flex: 1 }}
        />

        <TextField
          label="Last Name"
          variant="filled"
          sx={{ flex: 1 }}
          {...register("lastName", { required: true, minLength: 3 })}
          error={Boolean(errors.lastName)}
          helperText={
            errors.lastName
              ? errors.lastName.type === "minLength"
                ? "Minimum 3 characters required"
                : "This field is required"
              : ""
          }
        />
      </Stack>

      <TextField
        label="Email"
        variant="filled"
        {...register("email", {
          required: "This field is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.com$/,
            message: "Invalid email format, must be ...@...com",
          },
        })}
        error={Boolean(errors.email)}
        helperText={errors.email ? errors.email.message : ""}
      />
      <TextField
        label="Contact Number"
        variant="filled"
        {...register("contactNumber", {
          required: "This field is required",
          pattern: {
            value: /^[0-9]+$/,
            message: "Only numeric values are allowed",
          },
          minLength: {
            value: 10,
            message: "Number must be at least 10 digits",
          },
          maxLength: {
            value: 15,
            message: "Number must not exceed 15 digits",
          },
        })}
        error={Boolean(errors.contactNumber)}
        helperText={errors.contactNumber ? errors.contactNumber.message : ""}
      />
      <TextField label="Address 1" variant="filled" {...register("address1")} />
      <TextField label="Address 2" variant="filled" {...register("address2")} />

      <TextField
        id="filled-select-role"
        select
        label="Role"
        defaultValue="User"
        {...register("role", { required: true })}
        error={Boolean(errors.role)}
        helperText={
          errors.role ? "This field is required" : "Please select your role"
        }
        variant="filled"
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ width: "25%", marginLeft: "auto" }}
        disabled={!isValid}
      >
        CREATE NEW USER
      </Button>

      <Snackbar
        open={open}
        autoHideDuration={700}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Account Created Successfully
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default ProfileFormPage;
