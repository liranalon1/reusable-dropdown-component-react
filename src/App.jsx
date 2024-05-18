import { DropDownContainer } from "./components/DropDown/DropDownContainer";
import { DropDownButton } from "./components/DropDown/DropDownButton";
import { DropDownList } from "./components/DropDown/DropDownList";
import { DropDownListItem } from "./components/DropDown/DropDownListItem";

export default function App() {
  const listOptions = [
    {
      name: "Rename",
      onClick: () => alert("Rename was selected"),
      isActive: true
    },
    {
      name: "Delete",
      onClick: () => alert("Delete was selected"),
      isDisabled: true
    },
    {
      name: "Share",
      link: "https://www.google.com/",
      target: "_blank"
    }
  ];

  return (
    <div className="App">
      <DropDownContainer placement="bottomRight">
        <DropDownButton />
        <DropDownList>
          {listOptions.map(({ name, link, target, onClick }) => (
            <DropDownListItem
              key={name}
              link={link}
              target={target}
              onClick={onClick}
            >
              {name}
            </DropDownListItem>
          ))}
        </DropDownList>
      </DropDownContainer>
    </div>
  );
}
