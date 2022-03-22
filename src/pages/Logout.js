import { useEffect } from "react";
import useLogout from "../hooks/useLogout";

const Logout = () => {
  useLogout();

  useEffect(() => {
    window.location.href = "/";
  });

  return (
    <>
      <p>Logging out.</p>
    </>
  );
};

export default Logout;
