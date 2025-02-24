import React, { useState } from "react";
import { GraphQLClient, gql } from "graphql-request";

function EmailSubmit() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      console.log("Email is valid:", email);

      handleAddEmail("0xTEST0X", email);
      // perform any necessary actions with valid email
    } else {
      setIsValid(false);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsValid(true);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleAddEmail = async (senderAddress = "", email = "") => {
    try {
      const endpoint = "https://protected-oasis-02113.herokuapp.com/graphql";

      const graphQLClient = new GraphQLClient(endpoint, {
        headers: {
          authorization: "",
        },
      });

      const query = gql`
        {
          stakingDiscount(txId: "${senderAddress}", email: "${email}") 
        }
      `;

      const data = await graphQLClient.request(query);
      console.log(" handleAddEmail data", data);
      if (data.handleAnonCli) {
        if (data.handleAnonCli === "False") {
          window.alert("ERR_PLZ_REPORT_TO_MONEKY_DEV");
        } else {
        }
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  return <div></div>;
}

export default EmailSubmit;
