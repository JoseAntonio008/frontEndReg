export const formDataRegistration = {
  email: "",
  emailError: "",
  firstName: "",
  firstNameError: "",
  middleName: "",
  middleNameError: "",
  lastName: "",
  lastNameError: "",
  studentType: "",
  studentTypeError: "",
  residency: "",
  residencyError: "",
  shs: "",
  shsError: "",
  awardsReceived: "",
  awardsReceivedError: "",
  schoolType: "",
  schoolTypeError: "",
  schoolAddress: "",
  schoolAddressError: "",
  yearGraduated: "",
  yearGraduatedError: "",
  schoolTypeCollege: "",
  schoolTypeCollegeError: "",
  nameCollege: "",
  nameCollegeError: "",
  courseEnrolled: "",
  courseEnrolledError: "",
  highestAttainedYear: "",
  highestAttainedYearError: "",
  courseCompleter: "",
  courseCompleterError: "",
  courseCompleted: "",
  courseCompletedError: "",
  schoolGraduated: "",
  schoolGraduatedError: "",
};

export const validateField = (name: string, value: string) => {
  switch (name) {
    case "email":
      if (!value) return "Email is required";
      if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value))
        return "Invalid email format";
      return ""; // No error

    case "firstName":
      if (!value) return "First name is required";
      // if (value.length < 6) return "Password must be at least 6 characters";
      return ""; // No error

    case "middleName":
      if (!value) return "Middle name is required";
      return "";

    case "lastName":
      if (!value) return "Last name is required";
      return "";
    case "studentType":
      if (!value) return "studentType is required";
      return "";
    case "residency":
      if (!value) return "residency is required";
      return "";
    case "shs":
      if (!value) return "shs is required";
      return "";
    case "awardsReceived":
      if (!value) return "awardsReceived is required";
      return "";
    case "schoolType":
      if (!value) return "schoolType is required";
      return "";
    case "schoolAddress":
      if (!value) return "schoolAddress is required";
      return "";
    case "yearGraduated":
      if (!value) return "yearGraduated is required";
      return "";
    case "schoolTypeCollege":
      if (!value) return "schoolTypeCollege is required";
      return "";
    case "nameCollege":
      if (!value) return "nameCollege is required";
      return "";
    case "courseEnrolled":
      if (!value) return "courseEnrolled is required";
      return "";
    case "highestAttainedYear":
      if (!value) return "highestAttainedYear is required";
      return "";
    case "courseCompleter":
      if (!value) return "courseCompleter is required";
      return "";
    case "courseCompleted":
      if (!value) return "courseCompleted is required";
      return "";
    case "schoolGraduated":
      if (!value) return "schoolGraduated is required";
      return "";
    default:
      return "";
  }
};
