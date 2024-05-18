import styles from "./DropDown.module.scss";
import { MoreIcon } from "../icons/MoreIcon";

const DropDownButton = ({ children = <MoreIcon />, menuToggle, style }) => {
  const handleButtonClick = () => {
    menuToggle();
  };

  return (
    <button className={styles.button} onClick={handleButtonClick} style={style}>
      {children}
    </button>
  );
};

export { DropDownButton };
