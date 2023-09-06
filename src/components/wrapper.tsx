import React from "react";
import Navbar from "./navbar";

type Props = {
  children: React.ReactNode;
};

export default function Wrapper({ children }: Props) {
  return (
    <main className="-mt-[70px] relative">
      <Navbar />
      {children}
    </main>
  );
}
