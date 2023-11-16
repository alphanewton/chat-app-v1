import { auth } from "../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./SignIn.jsx";
import LogOut from "./LogOut.jsx";

const style = {
  nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
  heading: `text-white text-3xl`,
};

function NavBar() {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className={style.nav}>
      <h1 className={style.heading}>NewtChat</h1>
      {user ? <LogOut /> : <SignIn />}
    </div>
  );
}

export default NavBar;
