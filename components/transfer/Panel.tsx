"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import CoreContainer from "./CoreContainer";

const Panel = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  return (
    <section className="relative flex h-full w-full ">
      <Sidebar openSideBar={openSideBar} />
      <CoreContainer
        openSideBar={openSideBar}
        setOpenSideBar={setOpenSideBar}
      />
    </section>
  );
};

export default Panel;
