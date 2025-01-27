import { createContext } from "react";

const userContext = createContext({
  user: {
    name: "Dummy Name",
    email: "dummy@gmail.com",
  },
});

// Displayname to be given for the Profiler while inspecting or debugging
userContext.displayName = "userContext";

export default userContext;
