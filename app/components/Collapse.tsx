import type { ReactNode } from "react";
import { useState } from "react";

type PropsType = {
  children: ReactNode;
};

export default function Collapse({ children }: PropsType) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((state) => !state);
  };

  return (
    <div>
      <button onClick={handleClick}>{isOpen ? "close" : "open"}</button>
      {isOpen && <>{children}</>}
    </div>
  );
}
