import { setCookie } from "cookies-next";

export function saveUserCookie({ username, firstName, lastName }) {
  const name = `${firstName} ${lastName}`;
  setCookie("email", username);
  setCookie("name", name);
}
