export const validEmail = (email: string): boolean => {
  return email?.toString().includes("@") && email?.toString().includes(".")
    ? true
    : false;
};

export const validPassword = (password: string) => {
  const regex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return regex.test(password);
};
export const validUsername = (name: string): boolean => {
  return name?.length >= 3 ? true : false;
};

export const validFirstName = (name: string): boolean => {
  return name?.length >= 3 ? true : false;
};

export const validLastName = (name: string): boolean => {
  return name?.length >= 3 ? true : false;
};

export const validComplet = (
  first_name: string,
  last_name: string,
  username: string,
  email: string,
  password: string
): boolean => {
  return (
    validFirstName(first_name) &&
    validLastName(last_name) &&
    validUsername(username) &&
    validEmail(email) &&
    validPassword(password)
  );
};

export const validInput = (email: string, password: string): boolean => {
  return validEmail(email) && validPassword(password);
};
