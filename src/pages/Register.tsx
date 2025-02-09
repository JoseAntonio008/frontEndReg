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
  RadioGroupProps
} from "@mui/material";
import { SetStateAction, useState } from "react";

const customFocus = {
  color: "black", // Default color
  "&.Mui-focused": {
    color: "green", // Change color on focus
  },
};

export function FormReg() {
  const [studentType, setStudentType] = useState("");
  const [residency, setResidency] = useState("");
  const [shs, setShs] = useState("");
  const [otherShs,setOtherShs] = useState('')

  const handleRadioChange: RadioGroupProps["onChange"] = (event) => {
    const value = event.target.value;
    console.log(value);
    
    setShs(value);

    if (value !== "others") {
      setOtherShs(""); // Reset input if another option is selected
    }
  };
  const handleOtherShs = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    console.log(otherShs);
    
    setOtherShs(event.target.value)
    // setShs(event.target.value);
  };
  return (
    <>
      <AppBar position="sticky" color="success">
        <Toolbar>
          <Typography sx={{ fontSize: "18px" }}>
            Student Profiling Survey (2nd Sem | 2024 -2025)
          </Typography>
        </Toolbar>
      </AppBar>
      <Stack direction={"column"} sx={{ padding: "20px" }}>
        <Stack
          sx={{
            padding: "20px",
            border: "1px solid rgb(71, 71, 71)",
            borderRadius: "5px",
            my: "5px",
          }}
        >
          <Typography>
            This student profiling survey is designed to collect additional
            information from all applicants this 2nd semester of A.Y. 2024-2025
          </Typography>
          <Typography>
            It specifically aims to collect the following information:
          </Typography>
          <ul>
            <li> Name</li>
            <li> Senior High School/college</li>
            <li> School Type</li>
            <li> Student Type</li>
            <li> School Address</li>
            <li> Residency</li>
            <li> Academic Honors (SHS/HS)</li>
          </ul>
          <Typography>
            The information mentioned above will be used by the Admission and
            Testing Office to analyze the admission trends this coming 2nd
            semester of A.Y. 2024-2025
          </Typography>
          <Typography>
            <b>
              Data privacy notice in compliance with R.A. 10173 Data Privacy Act
              of 2012:
            </b>
          </Typography>
          <Typography>
            The Pamantasan ng Lungsod ng San Pablo is committed to protecting
            the privacy rights of individual's personal information pursuant to
            the provisions of Republic Act No. 10173, or the Data Privacy Act of
            2012, its Implementing Rules and Regulations. All employees,
            students, and administrative officers are enjoined to comply with
            and share in the responsibility of securing and protecting personal
            information collected and processed by the institution in pursuit of
            legitimate purpose.
          </Typography>
        </Stack>
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
              required={true}
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
            <RadioGroup
              aria-labelledby="student-Type"
              name="studentType"
              value={studentType}
              onChange={(event) => setStudentType(event.target.value)}
            >
              <FormControlLabel
                value={"newStudent"}
                label="New Student - Senior High School Graduate (Never been to college) / SHS Student Graduating this Current Semester"
                control={<Radio />}
              ></FormControlLabel>
              <FormControlLabel
                value={"transferee"}
                label="Transferee - A student who comes to a university or school after having begun his or her course of study at a different university or school"
                control={<Radio />}
              ></FormControlLabel>

              <FormControlLabel
                value={"returningStudent"}
                label="Returning Student - A DLSP/PLSP student who dropped out but wants to return to school."
                control={<Radio />}
              ></FormControlLabel>

              <FormControlLabel
                value={"2ndDegreeTaker"}
                label="2nd Degree Taker - Students who already completed a 2-year or 4-year course"
                control={<Radio />}
              ></FormControlLabel>
            </RadioGroup>
          </Stack>
          {studentType === "newStudent" && (
            <Stack>
              <Stack
                sx={{
                  padding: "20px",
                  border: "1px solid rgb(71, 71, 71)",
                  borderRadius: "5px",
                  my: "5px",
                }}
              >
                <Typography variant="h6">New Student Info</Typography>
                <RadioGroup
                  aria-labelledby="residency"
                  name="residency"
                  value={residency}
                  onChange={(event) => setResidency(event.target.value)}
                >
                  <FormControlLabel
                    value={"resident"}
                    label="Resident of San Pablo"
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"nonResident"}
                    label="Nonresident of San Pablo"
                    control={<Radio />}
                  ></FormControlLabel>
                </RadioGroup>
              </Stack>
              <Stack
                sx={{
                  padding: "20px",
                  border: "1px solid rgb(71, 71, 71)",
                  borderRadius: "5px",
                  my: "5px",
                }}
              >
                <Typography variant="h6">Name of Senior High School</Typography>
                <RadioGroup
                  aria-labelledby="shs"
                  name="shs"
                  value={shs}
                  onChange={handleRadioChange}
                >
                  <FormControlLabel
                    value={"resident"}
                    label="Resident of San Pablo"
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"non"}
                    label="Resident of San Pablo"
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"others"}
                    control={<Radio />}
                    label="Others"
                  />
                  {shs === "others" && (
                    <TextField
                      label="Specify Other"
                      variant="outlined"
                      size="small"
                      value={otherShs} // Reset input when selecting "Others"
                      onChange={handleOtherShs} // Directly update `shs`
                    />
                  )}
                </RadioGroup>
              </Stack>
            </Stack>
          )}

          {studentType === "transferee" && (
            <Stack
              sx={{
                padding: "20px",
                border: "1px solid rgb(71, 71, 71)",
                borderRadius: "5px",
                my: "5px",
              }}
            >
              <Typography variant="h6">Transferee Info</Typography>
              <TextField label="Previous School" fullWidth />
              <TextField label="Course Taken" fullWidth />
            </Stack>
          )}

          {studentType === "returningStudent" && (
            <Stack
              sx={{ padding: "10px", border: "1px solid gray", my: "5px" }}
            >
              <Typography variant="h6">Returning Student Info</Typography>
              <TextField label="Last School Year Attended" fullWidth />
            </Stack>
          )}

          {studentType === "2ndDegreeTaker" && (
            <Stack
              sx={{ padding: "10px", border: "1px solid gray", my: "5px" }}
            >
              <Typography variant="h6">2nd Degree Taker Info</Typography>
              <TextField label="First Degree Course" fullWidth />
              <TextField label="Year Completed" fullWidth />
            </Stack>
          )}
        </FormControl>
      </Stack>
    </>
  );
}
