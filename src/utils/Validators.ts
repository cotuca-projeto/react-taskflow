export const validEmail = (email: string): boolean => {
  return email?.toString().includes("@") && email?.toString().includes(".")
    ? true
    : false;
};

export const validPassword = (password: string): boolean => {
  // Mínimo de oito caracteres, pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return password?.length >= 8 && regex.test(password) ? true : false;
};

export const validUsername = (name: string): boolean => {
  return name?.length >= 3 ? true : false;
};

export const validName = (name: string): boolean => {
  return name?.length >= 3 ? true : false;
};

export const validLastName = (name: string): boolean => {
  return name?.length >= 3 ? true : false;
};
