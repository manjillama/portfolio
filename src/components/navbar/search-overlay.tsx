import React, { useEffect, useState } from "react";

type Props = {
  handleIsSearchOverlayOpened: (isOpened: boolean) => void;
};

export default function SearchOverlay({ handleIsSearchOverlayOpened }: Props) {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const bodyNode = document.querySelector("body");
    if (!bodyNode) return;

    bodyNode.style.overflow = "hidden";

    return () => {
      bodyNode.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="p-[15px]"
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        background: "rgba(255,255,255,.95)",
        zIndex: 1010,
        overflow: "auto",
      }}
    >
      <div style={{ height: "100%", position: "relative" }}>
        <button
          onClick={() => handleIsSearchOverlayOpened(false)}
          className="absolute top-0 right-0 cursor-pointer w-[24px] h-[24px]"
        >
          <div>
            <div className="bg-black origin-[45%] rotate-45 w-[24px] border border-black" />
            <div className="bg-black origin-[45%]	-rotate-45 w-[24px] border border-black" />
          </div>
        </button>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "100%",
            justifyContent: "center",
          }}
        >
          <form method="get" action="/blogs">
            <input
              value={searchQuery}
              name="query"
              onChange={(e) => setSearchQuery(e.target.value)}
              required
              autoComplete="off"
              placeholder="Search..."
              autoFocus
              style={{
                outline: "none",
                color: "#626262",
                border: 0,
                background: "inherit",
                fontWeight: 300,
                fontSize: "4rem",
                width: "100%",
                height: 120,
                letterSpacing: "-1.925px",
              }}
            />
          </form>
        </div>
        <p
          style={{
            position: "absolute",
            opacity: 0.7,
            bottom: "1.2rem",
          }}
        >
          <small>
            <i className="fas fa-search"></i> Press enter to search
          </small>
        </p>
      </div>
    </div>
  );
}
