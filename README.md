# Custom React Select dropdown element

This is a simple Select component created using react.

## Installation

Node V20 or above required to run. To install, simply run :

```bash
npm i custom-react-dropdown-hrnet
```

or

```bash
yarn add custom-react-dropdown-hrnet
```

## Usage

```javascript
import CreateDropdown from "custom-react-dropdown-hrnet";

<CreateDropdown
  optionsArray={selectArray}
  dropdownId={myCustomId}
  onChange={handleChange}
/>;
```

## Props

`optionsArray` (required): An array of objects representing the dropdown options. Each object should have value and label properties.

```javascript
const selectArray = [
  { value: "fr", label: "France" },
  { value: "de", label: "Germany" },
  { value: "uk", label: "United Kingdom" },
];
```

`mycustomId` (required): A unique id for your `CreateDropdown` element

`onChange` (required): A function that will be called when the user selects an option. The selected option object is passed as an argument.

## Example

```javascript
import React, { useState } from "react";
import CreateDropdown from "custom-react-dropdown-hrnet"

const MyComponent = () => {
  const [formData, setFormData] = useState({
    city:"",
  });

  const handleDropdownChange = (id, selectedOption) => {
    setFormData({ ...formData, [id]: selectedOption.value });
  };

  const list= [
    {value:"France",  label:"Bordeaux"},
    {value:"Germany", label:"Hamburg"},
    {value:"England", label:"Liverpool"},
    {value:"Spain",   label:"Bilbao"},
  ]

  return (
    <>
      <CreateDropdown optionsArray={list} dropdownId="cityListDropdown" onChange={(option) => handleDropdownChange("city",
      option)}>
    </>
  )
}

export default MyComponent

```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
