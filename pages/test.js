import { createAvatar } from "@dicebear/core";
import MilprepData from "../data/MilprepData";
import { initials } from "@dicebear/collection";
// import { useEffect, useState, useMemo } from "react";

export default function Test() {
  // const avatar = useMemo(() => {
  //   return createAvatar(initials, {
  //     seed: "AG",
  //     backgroundType: ["gradientLinear"],
  //     backgroundColor: ["5e35b1"],
  //     size: 64,
  //     radius: 50,
  //   }).toDataUriSync();
  // }, []);

  return (
    <div>
      {/* <MilprepData /> */}
      {/* <img src={avatar} alt="Avatar" /> */}
    </div>
  );
}
