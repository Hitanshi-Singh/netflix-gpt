export const CheckvalidData = (email,password) => {
  const isValidEmail= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
  if(!isValidEmail) return "Email is not valid";
  if(!isValidPassword) return "Password is not valid";
  return null;

}
