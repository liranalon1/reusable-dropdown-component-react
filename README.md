## Usage

The Dropdown allows the user to open up a dropdown layout via a specified trigger element and select value for it.

Component Structure example:

<DropDownContainer>
  <DropDownButton />
  <DropDownList>
    <DropDownListItem>Rename</DropDownListItem>
    <DropDownListItem>Delete</DropDownListItem>
    <DropDownListItem>Share</DropDownListItem>
  </DropDownList>
</DropDownContainer>

## Import

import { DropDownContainer } from "./components/DropDown/DropDownContainer";
import { DropDownButton } from "./components/DropDown/DropDownButton";
import { DropDownList } from "./components/DropDown/DropDownList";
import { DropDownListItem } from "./components/DropDown/DropDownListItem";

## Properties for DropDownContainer:

#### "open"

- `Name` : open
- `Type` : bool
- `Default Value` : false
- `Description` : Control whether the DropDownList should be opened

#### "placement"

- `Name` : placement
- `Type` : string
- `Default Value` : "bottomLeft"
- `Description` : Control the DropDownList position
- `options` : "bottomLeft" / "bottomRight" / "topRight" / "topEnd" / "rightStart" / "leftStart"

#### "style"

- `Name` : style
- `Type` : object
- `Default Value` : --
- `Description` : Specifies an object with css properties and values. e.g. :
  const style = {
  backgroundColor: "red",
  color: "#030303"
  };

---

## Properties for DropDownListItem:

#### "link"

- `Name` : link
- `Type` : string
- `Default Value` : --
- `Description` : url address for anchor tags. e.g. :
  <DropDownListItem link="http://www.google.com">Click here</DropDownListItem>

  !important: if we don't set link Property, the "DropDownListItem" will be a button

#### "target"

- `Name` : target
- `Type` : string
- `Default Value` : --
- `Description` : target type for anchor tags. e.g. :
  <DropDownListItem target="_blank">Click here</DropDownListItem>

#### "onClick"

- `Name` : onClick
- `Type` : func
- `Default Value` : --
- `Description` : onClick function for the list item. e.g. :
  <DropDownListItem onClick={() => alert("clicked")}>Click here</DropDownListItem>

#### "isActive"

- `Name` : isActive
- `Type` : bool
- `Default Value` : false
- `Description` : set "active" class to the list item. e.g. :
  <DropDownListItem isActive={true}>Click here</DropDownListItem>

#### "isDisabled"

- `Name` : isDisabled
- `Type` : bool
- `Default Value` : false
- `Description` : set disabled to button/anchor tags. e.g. :
  <DropDownListItem isDisabled={true}>
