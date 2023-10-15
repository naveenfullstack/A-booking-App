import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../Api"

const IpContext = createContext();

export const IpProvider = ({ children }) => {
  const [ipAddress, setipAddress] = useState(false);

  useEffect(() => {
    axios
      .get(api.GetIp, {
        headers: {
          api_key: api.key,
          authantication: api.authantication,
        },
      })
      .then((response) => {
        setipAddress(response.data.ipDetails);
        console.log(response)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <IpContext.Provider value={{ ipAddress }}>
      {children}
    </IpContext.Provider>
  );
};

export const useIp = () => {
  return useContext(IpContext);
};