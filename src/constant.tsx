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

    default:
      return "";
  }
};
