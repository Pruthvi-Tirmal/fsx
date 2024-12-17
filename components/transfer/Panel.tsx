"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import CoreContainer from "./CoreContainer";

const Panel = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  return (
    <section
      style={{
        background: "linear-gradient(229deg, rgba(250,250,250,8), transparent)",
      }}
      className="relative flex h-full w-full ">
      <Sidebar openSideBar={openSideBar} />
      <CoreContainer
        openSideBar={openSideBar}
        setOpenSideBar={setOpenSideBar}
      />
    </section>
  );
};

export default Panel;
