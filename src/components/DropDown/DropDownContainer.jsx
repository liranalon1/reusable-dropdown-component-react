import { useState, cloneElement } from "react";
import styles from "./DropDown.module.scss";

const DropDownContainer = ({
  children,
  open = false,
  placement = "bottomLeft",
  style
}) => {
  const [isOpen, setIsOpen] = useState(open ? true : false);

  return (
    <div className={`${styles.dropDown} dropDown`}>
      {children.map((child, i) => {
        const displayName = child.type.name;
        if (displayName === "DropDownButton") {
          return cloneElement(child, {
            isOpen,
            menuToggle: () => setIsOpen((prev) => !prev),
            key: i
          });
        } else if (displayName === "DropDownList") {
          return cloneElement(child, {
            isOpen,
            closeDropDown: () => setIsOpen(false),
            placement,
            style,
            key: i
          });
        } else {
          return null;
        }
      })}
    </div>
  );
};

export { DropDownContainer };
