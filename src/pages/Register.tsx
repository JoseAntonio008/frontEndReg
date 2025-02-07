import {
  Stack,
  FormControl,
  TextField,
  AppBar,
  Toolbar,
  Typography,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel,
} from "@mui/material";

const customFocus = {
  color: "black", // Default color
  "&.Mui-focused": {
    color: "green", // Change color on focus
  },
};

export function FormReg() {
  return (
    <>
      <AppBar position="sticky" color="success">
        <Toolbar>
          <Typography sx={{ fontSize: "18px" }}>Online Admission</Typography>
        </Toolbar>
      </AppBar>
      <Stack direction={"column"} sx={{ padding: "20px" }}>
        <FormControl>
          <Stack
            sx={{
              padding: "20px",
              border: "1px solid rgb(71, 71, 71)",
              borderRadius: "5px",
              my: "5px",
            }}
          >
            <Typography sx={{ fontSize: "18px" }}>Email</Typography>
            <TextField
              placeholder="Enter your Email here."
              variant="standard"
              autoComplete="off"
              name="email"
              type="email"
              sx={{ mb: "5px" }}
            ></TextField>
          </Stack>
          <Stack
            sx={{
              padding: "20px",
              border: "1px solid black",
              borderRadius: "5px",
              my: "5px",
            }}
          >
            <Typography sx={{ fontSize: "18px" }}>First Name</Typography>
            <TextField
              placeholder="Enter your First Name here."
              variant="standard"
              autoComplete="off"
              name="firstName"
              sx={{ mb: "5px" }}
            ></TextField>
          </Stack>
          <Stack
            sx={{
              padding: "20px",
              border: "1px solid black",
              borderRadius: "5px",
              my: "5px",
            }}
          >
            <Typography sx={{ fontSize: "18px" }}>Middle Name</Typography>
            <Typography sx={{ fontSize: "15px", mb: "5px" }}>
              Type N/A if not applicable
            </Typography>
            <TextField
              placeholder="Enter your Middle Name here."
              variant="standard"
              autoComplete="off"
              name="middleName"
              sx={{ mb: "5px" }}
            ></TextField>
          </Stack>
          <Stack
            sx={{
              padding: "20px",
              border: "1px solid black",
              borderRadius: "5px",
              my: "5px",
            }}
          >
            <Typography sx={{ fontSize: "18px" }}>Last Name</Typography>
            <TextField
              placeholder="Enter your Last Name here."
              variant="standard"
              autoComplete="off"
              name="lastName"
              sx={{ mb: "5px" }}
            ></TextField>
          </Stack>
          <Stack
            sx={{
              padding: "20px",
              border: "1px solid black",
              borderRadius: "5px",
              my: "5px",
            }}
          >
            <FormLabel id="student-Type" sx={{ ...customFocus }}>
              Student Type
            </FormLabel>
            <RadioGroup aria-labelledby="student-Type">
              <FormControlLabel
                name="studentType"
                value={"newStudent"}
                label="New Student - Senior High School Graduate (Never been to college) / SHS Student Graduating this Current Semester"
                control={<Radio />}
              ></FormControlLabel>
              <FormControlLabel
                name="studentType"
                value={"transferee"}
                label="Transferee - A student who comes to a university or school after having begun his or her course of study at a different university or school"
                control={<Radio />}
              ></FormControlLabel>

              <FormControlLabel
                name="studentType"
                value={"returningStudent"}
                label="Returning Student - A DLSP/PLSP student who dropped out but wants to return to school."
                control={<Radio />}
              ></FormControlLabel>

              <FormControlLabel
                name="studentType"
                value={"2ndDegreeTaker"}
                label="2nd Degree Taker - Students who already completed a 2-year or 4-year course"
                control={<Radio />}
              ></FormControlLabel>
            </RadioGroup>
          </Stack>
          <Stack
            sx={{
              padding: "20px",
              border: "1px solid black",
              borderRadius: "5px",
              my: "5px",
            }}
          >
            <Typography></Typography>
          </Stack>
        </FormControl>
      </Stack>
    </>
  );
}
