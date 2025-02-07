// import { useContext } from "react";
// import userContext from "../utils/UserContext";

// const Footer = () => {
//     const { user } = useContext(userContext);
//   return (
//     <div>
//       <h4>FOOTER</h4>
//       <h4>{user.name}</h4>
//       <p>{user.email}</p>
//     </div>
//   );
// };

// export default Footer;



import { Link } from "react-router-dom";
import React from "react";
const Footer =()=>{
    const copyright_year = new Date().getFullYear();
    return (
      <div className="footer h-20  bg-black    ">
        <h2 className="text-cyan-50 text-center font-poppins font-semibold p-6 inset-x-0 bottom-0">
          <Link to="https://www.linkedin.com/in/srishti-malhotra-815134276/">
            Created By Srishti Malhotra ©{copyright_year} FoodVilla ❤️
          </Link>
        </h2>
      </div>
    );
} 
export default Footer;