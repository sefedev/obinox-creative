// themes.js
import { createContext, useState } from "react";

const StatusContext = createContext();

const StatusProvider = ({ children }) => {
  const [submissionStatus, setSubmissionStatus] = useState(null);

  return (
    <StatusContext.Provider value={{ submissionStatus, setSubmissionStatus }}>
      {children}
    </StatusContext.Provider>
  );
};

export { StatusProvider, StatusContext };
