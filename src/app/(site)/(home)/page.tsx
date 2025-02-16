"use client";
import Login from "@/components/pages/authSections/login/Login";
import HomePage from "@/components/pages/HomePage";
import React from "react";

const page = () => {
  const tokens = localStorage.getItem("tokens");
  console.log("🚀 ~ HomePage ~ tokens:", tokens);
  return (
    <>
      {tokens ? (
        <>
          {" "}
          <HomePage />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </>
  );
};

export default page;
