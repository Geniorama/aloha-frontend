import { getUserData } from "@/services/user.service";
import { useEffect, useState } from "react";

function UserPage() {
  const [user, setUser] = useState({});
  useEffect(() => {
    getUserData().then((res) => setUser(res));
  }, []);
  return <div>{user?.username}</div>;
}

export default UserPage;
