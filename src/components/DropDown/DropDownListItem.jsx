import styles from "./DropDown.module.scss";

const DropDownListItem = ({
  onClick,
  closeDropDown,
  index,
  selectedIndex,
  className,
  children,
  link = "",
  target = "",
  isActive = false,
  isDisabled = false
}) => {
  const handleListItemClick = () => {
    onClick && onClick();
    closeDropDown();
  };

  const itemIsActive = isActive || index === selectedIndex;
  return (
    <li className={itemIsActive ? styles.active : ""} tabIndex={index}>
      {link ? (
        <a href={link} target={target}>
          {children}
        </a>
      ) : (
        <button onClick={handleListItemClick} disabled={isDisabled}>
          {children}
        </button>
      )}
    </li>
  );
};

export { DropDownListItem };
