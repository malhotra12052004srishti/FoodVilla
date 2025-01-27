import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    // const [isVisible, setIsVisible] = useState(false);
    <div className="border border-black p-2 m-2">
      <h3 className="text-xl font-bold">{title}</h3>
      <button onClick={setIsVisible} className="cursor-pointer">
        {isVisible ? "🔼" : "🔽"}
      </button>
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {

    // But this very bad way of writing the code as you have to maintain the state everyime you add a new component.
//   const [sectionConfig, setSectionConfig] = useState({
//     showAbout: false,
//     showDetails: false,
//     showTeam: false,
//     showCareer: false,
//   });

  const [visibleSection, setVisibleSection] = useState("about");
  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          "Instamart is a platform that allows users to buy and sell products online."
        }
        isVisible={visibleSection==="about"}
        setIsVisible={() => 
            setVisibleSection("about")
        }

        // Hectic way of writing the code
        // isVisible={sectionConfig.showAbout}
        // setIsVisible={() =>
        //   setSectionConfig({
        //     showAbout: true,
        //     showDetails: false,
        //     showTeam: false,
        //     showCareer: false,
        //   })
        // }
      />
      <Section
        title={"Details of Instamart"}
        description={
          "Instamart is a platform that allows users to buy and sell products online."
        }
        isVisible={visibleSection==="details"}
        setIsVisible={() =>
          setVisibleSection("details")
        }
      />
      <Section
        title={"Teams of Instamart"}
        description={"The team has 50 members"}
        isVisible={visibleSection==="team"}
        setIsVisible={() =>
            setVisibleSection("team")
          }
      />
      <Section
        title={"Careers"}
        description={"Instamart is hiring"}
        isVisible={visibleSection==="career"}
        setIsVisible={() =>
            setVisibleSection("career")
          }
      />
    </div>
  );
};

export default Instamart;

/**
 *-
 * Passing the values of these as props:-
 * About Instamart
 * Details of Instamart
 * Team
 * Product
 * Careers
 *
 */
