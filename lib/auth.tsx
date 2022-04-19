import { hash } from "bcrypt";

export async function hasPassword(password) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}
