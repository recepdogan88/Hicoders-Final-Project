import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const AuthLogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ returnTo: window.location.origin })} className='m-2 log-in'>
      Log Out
    </button>
  );
};

export default AuthLogoutButton;