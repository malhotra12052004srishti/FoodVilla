import { useContext } from "react";
import userContext from "../utils/UserContext";

const Footer = () => {
    const { user } = useContext(userContext);
  return (
    <div>
      <h4>FOOTER</h4>
      <h4>{user.name}</h4>
      <p>{user.email}</p>
    </div>
  );
};

export default Footer;
