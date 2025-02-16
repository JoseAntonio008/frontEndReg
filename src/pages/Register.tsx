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
  Button,
} from "@mui/material";
import { SetStateAction, useEffect, useState } from "react";
import { formDataRegistration, validateField } from "../constant";

const customFocus = {
  color: "black", // Default color
  "&.Mui-focused": {
    color: "green", // Change color on focus
  },
};

export function FormReg() {
  const [otherShs, setOtherShs] = useState("");

  const [otherYearGraduated, setOtherYearGraduated] = useState("");

  const [otherAwards, setOtherAwards] = useState("");
  const [typeOfSchool, setTypeofSchool] = useState("");
  const [courseTransferee, setCoursetransferee] = useState("");
  const [residencyTransferee, setResidencyTransferee] = useState("");
  const [formData, setFormData] = useState(formDataRegistration);

  const handleOtherAwards = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setOtherAwards(event.target.value);
  };
  const handleOtherYear = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setOtherYearGraduated(event.target.value);
  };
  const handleOtherShs = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setOtherShs(event.target.value);

    // setShs(event.target.value);
  };
  const handleChange = (event: { target: { name: any; value: any } }) => {
    const errorMessage = validateField(event.target.name, event.target.value);
    setFormData({ ...formData, [event.target.name]: event.target.value,[`${event.target.name}Error`]: errorMessage  });
    
  };

  const handleSubmit = () => {
    try {
      if (formData.yearGraduated === "others") {
        setFormData((prevData) => {
          const updatedData = {
            ...prevData,
            yearGraduated: otherYearGraduated,
          };

          return updatedData;
        });
      }
      if (formData.shs === "others") {
        setFormData((prevData) => {
          const updatedData = { ...prevData, shs: otherShs };

          return updatedData;
        });
      }
      if (formData.awardsReceived === "others") {
        setFormData((prevData) => {
          const updatedData = { ...prevData, awardsReceived: otherAwards };

          return updatedData;
        });
        console.log(`submitted Form Data:`, formData);
      } else {
        console.log(`submitted Form Data:`, formData);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {}, [formData]);
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
              value={formData.email}
              onChange={handleChange}
              error={!!formData.emailError}
              helperText={formData.emailError}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              value={formData.studentType}
              onChange={handleChange}
            >
              <FormControlLabel
                value={"New Student"}
                label="New Student - Senior High School Graduate (Never been to college) / SHS Student Graduating this Current Semester"
                control={<Radio />}
              ></FormControlLabel>
              <FormControlLabel
                value={"transferee"}
                label="Transferee - A student who comes to a university or school after having begun his or her course of study at a different university or school"
                control={<Radio />}
              ></FormControlLabel>

              <FormControlLabel
                value={"Returning Student"}
                label="Returning Student - A DLSP/PLSP student who dropped out but wants to return to school."
                control={<Radio />}
              ></FormControlLabel>

              <FormControlLabel
                value={"2nd Degree Taker"}
                label="2nd Degree Taker - Students who already completed a 2-year or 4-year course"
                control={<Radio />}
              ></FormControlLabel>
            </RadioGroup>
          </Stack>
          {formData.studentType === "New Student" && (
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
                  value={formData.residency}
                  onChange={handleChange}
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
                  value={formData.shs}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value={"Academia de San Ignacio de Loyola"}
                    label="Academia de San Ignacio de Loyola"
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    value={
                      "AMA Computer Learning Center College of San Pablo City"
                    }
                    label="AMA Computer Learning Center College of San Pablo City"
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"APEC School"}
                    label="APEC School"
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"Canossa College"}
                    label="Canossa College"
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"Capellan Institute of Technology - San Pablo City"}
                    label="Capellan Institute of Technology - San Pablo City"
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"Col. Lauro Dizon Memorial Integrated High School"}
                    label="Col. Lauro Dizon Memorial Integrated High School"
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"Colegio De Avedad, Inc."}
                    label="Colegio De Avedad, Inc."
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"Crecencia Drusila Lopez Senior High School"}
                    label="Crecencia Drusila Lopez Senior High School"
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"Crest Christian School of San Pablo City"}
                    label="Crest Christian School of San Pablo City"
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"Felix Amante Senior High School"}
                    label="Felix Amante Senior High School"
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"Grant Institute of Trade and Technology"}
                    label="Grant Institute of Trade and Technology"
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"Laguna College"}
                    label="Laguna College"
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"Lake City Christian School"}
                    label="Lake City Christian School"
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"Liceo De San Pablo"}
                    label="Liceo De San Pablo"
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"Lyceum de San Pablo, Inc."}
                    label="Lyceum de San Pablo, Inc."
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"Nino Jesus Science Oriented Montessori, Inc."}
                    label="Nino Jesus Science Oriented Montessori, Inc."
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"San Bartolome Integrated High School"}
                    label="San Bartolome Integrated High School"
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"San Cristobal Integrated High School"}
                    label="San Cristobal Integrated High School"
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"San Pablo Christian School"}
                    label="San Pablo Christian School"
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"San Pablo City Integrated High School"}
                    label="San Pablo City Integrated High School"
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"San Pablo City Science Integrated High School"}
                    label="San Pablo City Science Integrated High School"
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"San Pablo Colleges"}
                    label="San Pablo Colleges"
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"San Vicente Integrated High School"}
                    label="San Vicente Integrated High School"
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"Santisimo Rosario Integrated High School"}
                    label="Santisimo Rosario Integrated High School"
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    value={
                      "Scuola de Bambini di Sta. Teresita International Montessori, Inc."
                    }
                    label="Scuola de Bambini di Sta. Teresita International Montessori, Inc."
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"South Lakes Integrated School"}
                    label="South Lakes Integrated School"
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"St. Joseph School"}
                    label="St. Joseph School"
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"St. Peter's College Seminary"}
                    label="St. Peter's College Seminary"
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"St. Therese Montessori School of San Pablo Inc."}
                    label="St. Therese Montessori School of San Pablo Inc."
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"STI College of San Pablo Inc."}
                    label="STI College of San Pablo Inc."
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"West Greenville Laguna Colleges, Inc."}
                    label="West Greenville Laguna Colleges, Inc."
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"others"}
                    control={<Radio />}
                    label="Others"
                  />
                  {formData.shs === "others" && (
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
              <Stack
                sx={{
                  padding: "20px",
                  border: "1px solid rgb(71, 71, 71)",
                  borderRadius: "5px",
                  my: "5px",
                }}
              >
                <Typography variant="h6">School Type</Typography>
                <RadioGroup
                  aria-labelledby="schoolType"
                  name="schoolType"
                  value={formData.schoolType}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value={"public"}
                    label="Public"
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"private"}
                    label="Private"
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
                <Typography variant="h6">School Address</Typography>
                <TextField
                  variant="standard"
                  label="Enter School Address here."
                  name="schoolAddress"
                  value={formData.schoolAddress}
                  onChange={handleChange}
                ></TextField>
              </Stack>
              <Stack
                sx={{
                  padding: "20px",
                  border: "1px solid rgb(71, 71, 71)",
                  borderRadius: "5px",
                  my: "5px",
                }}
              >
                <Typography variant="h6">Year Graduated</Typography>
                <RadioGroup
                  aria-labelledby="yearGraduated"
                  name="yearGraduated"
                  value={formData.yearGraduated}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value={"2020-2021"}
                    label="2020-2021"
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"2021-2022"}
                    label="2021-2022"
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"2022-2023"}
                    label="2022-2023"
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"others"}
                    label="others"
                    control={<Radio />}
                  ></FormControlLabel>
                  {formData.yearGraduated === "others" && (
                    <TextField
                      label="Specify Other"
                      variant="outlined"
                      size="small"
                      value={otherYearGraduated} // Reset input when selecting "Others"
                      onChange={handleOtherYear} // Directly update `shs`
                    />
                  )}
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
                <Typography variant="h6">Awards Received</Typography>
                <RadioGroup
                  aria-labelledby="awardsReceived"
                  name="awardsReceived"
                  value={formData.awardsReceived}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value={"with Honor"}
                    label="with Honor"
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"With High Honor"}
                    label="With High Honor"
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"With Highest Honor"}
                    label="With Highest Honor"
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"None"}
                    label="None"
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"others"}
                    label="others"
                    control={<Radio />}
                  ></FormControlLabel>
                  {formData.awardsReceived === "others" && (
                    <TextField
                      label="Specify Other"
                      variant="outlined"
                      size="small"
                      value={otherAwards} // Reset input when selecting "Others"
                      onChange={handleOtherAwards} // Directly update `shs`
                    />
                  )}
                </RadioGroup>
              </Stack>
            </Stack>
          )}

          {formData.studentType === "transferee" && (
            <Stack>
              <Stack
                sx={{
                  padding: "20px",
                  border: "1px solid rgb(71, 71, 71)",
                  borderRadius: "5px",
                  my: "5px",
                }}
              >
                <Typography variant="h6">Type of School</Typography>
                <RadioGroup
                  aria-labelledby="typeOfSchool"
                  name="typeOfSchool"
                  value={typeOfSchool}
                  onChange={(event) => setTypeofSchool(event.target.value)}
                >
                  <FormControlLabel
                    value={"Private College/University"}
                    label="Private College/University"
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"Local College or University"}
                    label="Local College or University"
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"State College/University"}
                    label="State College/University"
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
                <Typography variant="h6">Name of College</Typography>
                <Typography>School where you came from</Typography>
                <TextField
                  placeholder="Enter your School Name here."
                  variant="standard"
                ></TextField>
              </Stack>
              <Stack
                sx={{
                  padding: "20px",
                  border: "1px solid rgb(71, 71, 71)",
                  borderRadius: "5px",
                  my: "5px",
                }}
              >
                <Typography variant="h6">Course/Program Enrolled</Typography>
                <Typography>
                  Course/Program you enrolled in the school where you came from
                </Typography>
                <TextField
                  placeholder="Enter your Course in your Previous College"
                  variant="standard"
                ></TextField>
              </Stack>
              <Stack
                sx={{
                  padding: "20px",
                  border: "1px solid rgb(71, 71, 71)",
                  borderRadius: "5px",
                  my: "5px",
                }}
              >
                <Typography variant="h6">
                  Highest completed/attained year
                </Typography>
                <RadioGroup
                  aria-labelledby="courseTransferee"
                  name="courseTransferee"
                  value={courseTransferee}
                  onChange={(event) => setCoursetransferee(event.target.value)}
                >
                  <FormControlLabel
                    value={"1st"}
                    label="1st"
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"2nd"}
                    label="2nd"
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"3rd"}
                    label="3rd"
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"4th"}
                    label="4th"
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"5th"}
                    label="5th"
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
                <Typography variant="h6">School Address</Typography>
                <TextField
                  variant="standard"
                  placeholder="Enter your Previous School Address here."
                ></TextField>
              </Stack>
              <Stack
                sx={{
                  padding: "20px",
                  border: "1px solid rgb(71, 71, 71)",
                  borderRadius: "5px",
                  my: "5px",
                }}
              >
                <Typography variant="h6">Awards</Typography>
                <TextField
                  variant="standard"
                  placeholder="Enter the title of the Awards you Attained in your Previous School here."
                ></TextField>
              </Stack>
              <Stack
                sx={{
                  padding: "20px",
                  border: "1px solid rgb(71, 71, 71)",
                  borderRadius: "5px",
                  my: "5px",
                }}
              >
                {" "}
                <Typography variant="h6">Residency</Typography>
                <RadioGroup
                  aria-labelledby="residencyTransferee"
                  name="residencyTransferee"
                  value={residencyTransferee}
                  onChange={(event) =>
                    setResidencyTransferee(event.target.value)
                  }
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
            </Stack>
          )}

          {formData.studentType === "Returning Student" && (
            <Stack
              sx={{ padding: "10px", border: "1px solid gray", my: "5px" }}
            >
              <Typography variant="h6">Returning Student</Typography>
              <Typography>
                <b>Returning Students</b> - you will skip the admission process
                and directly proceed to enrollment. Wait for the opening of
                enrollment. All returning students must enroll at PLSP in person
                (walk-in).
              </Typography>
              <Typography>
                <b>Disregard the admission link after you submit this form.</b>
              </Typography>
            </Stack>
          )}

          {formData.studentType === "2nd Degree Taker" && (
            <Stack>
              <AppBar
                position="sticky"
                color="success"
                sx={{ borderTopLeftRadius: "5px", borderTopRightRadius: "5px" }}
              >
                <Toolbar>
                  <Typography sx={{ fontSize: "18px" }}>2nd Degree</Typography>
                </Toolbar>
              </AppBar>
              <Stack
                sx={{
                  padding: "20px",
                  border: "1px solid rgb(71, 71, 71)",
                  borderTop: "none",
                  my: "5px",
                  mt: "0",
                }}
              >
                <Typography>
                  <b>2-YEAR COURSE COMPLETER</b>
                  - Can still avail free education under UNIFAST.
                  <br />
                  <b>4-YEAR COURSE COMPLETER</b>- Cannot avail free education
                  (PAYEE). If you're going to take an education course as your
                  2nd degree, skip this admission process and enroll at PLSP in
                  person under Teacher Certificate Program (TCP), otherwise
                  proceed with the admission process after you submit this form.
                </Typography>
              </Stack>
              <Stack
                sx={{
                  padding: "20px",
                  border: "1px solid rgb(71, 71, 71)",
                  borderTop: "none",
                  my: "5px",
                  mt: "0",
                }}
              >
                <Typography variant="h6">Resident Type</Typography>
              </Stack>
            </Stack>
          )}
          <Stack direction={"row"}>
            <Button variant="contained" color="success" onClick={handleSubmit}>
              <Typography>Submit</Typography>
            </Button>
          </Stack>
        </FormControl>
      </Stack>
    </>
  );
}
