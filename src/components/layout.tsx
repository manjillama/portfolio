import React from "react";
import Seo from "./seo";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <div>{children}</div>
      <script src="/mailerlite.js"></script>
      <script
        src="https://static.mailerlite.com/js/w/webforms.min.js?v0c75f831c56857441820dcec3163967c"
        type="text/javascript"
      ></script>
    </>
  );
}

export const Head = () => <Seo />;
