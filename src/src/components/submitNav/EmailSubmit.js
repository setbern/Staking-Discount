import React, { useState } from "react";

function EmailSubmit() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

    const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      console.log("Email is valid:", email);
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

  return (
    <div className="">
    <form onSubmit={handleSubmit}>
      <label htmlFor="email"></label>
      <input
        type="text"
        id="email"
        placeholder="test@test.com"
        className="border border-purple-600 rounded-full py-1 text-center font-bold text-black mb-1.5 mt-4"
        value={email}
        onChange={handleEmailChange}
      />
      {!isValid && <span>!</span>}
    </form>
    </div>
  );
}

export default EmailSubmit;