import styles from "./DropDown.module.scss";
import { useEffect, useState, cloneElement } from "react";
import useKeyPress from "../useKeyPress";

function handleItemMovement({ listLength, movement, currentIndex }) {
  switch (movement) {
    case "arrowUp":
      return currentIndex !== 0 ? currentIndex - 1 : listLength - 1;
    case "arrowDown":
      return currentIndex !== listLength - 1 ? currentIndex + 1 : 0;
    case "select":
      return currentIndex;
    default:
      throw new Error();
  }
}

let itemsLength,
  currentIndex = null;

const DropDownList = ({
  children,
  isOpen,
  placement,
  style,
  closeDropDown
}) => {
  const arrowUpPressed = useKeyPress("ArrowUp");
  const arrowDownPressed = useKeyPress("ArrowDown");
  const [selectedIndex, setSelectedIndex] = useState(null);

  itemsLength = children.length;
  currentIndex = selectedIndex;

  useEffect(() => {
    if (arrowUpPressed) {
      setSelectedIndex(
        handleItemMovement({
          listLength: itemsLength,
          movement: "arrowUp",
          currentIndex: currentIndex
        })
      );
    }
  }, [arrowUpPressed]);

  useEffect(() => {
    if (arrowDownPressed) {
      setSelectedIndex(
        handleItemMovement({
          listLength: itemsLength,
          movement: "arrowDown",
          currentIndex: currentIndex
        })
      );
    }
  }, [arrowDownPressed]);

  const classes = `${styles.dropDownList} ${styles[placement]} ${
    isOpen ? styles.open : ""
  }`;

  return (
    <div className={classes} style={style}>
      <ul>
        {children.map((child, i) => {
          return cloneElement(child, {
            closeDropDown,
            selectedIndex,
            index: i,
            key: i
          });
        })}
      </ul>
    </div>
  );
};

export { DropDownList };
