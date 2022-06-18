import React, { useState } from "react";
import Chip from "./features/chip/Chip";
import Dropdown from "./features/dropdown/Dropdown";
import DropdownItem from "./features/dropdown/DropdownItem";
import Searchbar from "./features/searchbar/Searchbar";
import RadioButton from "./features/radiogroup/RadioButton";
import RadioGroup from "./features/radiogroup/RadioGroup";
import './App.css'
import Filters from "./features/filters/Filters";

function App() {
  const [enabled, setEnabled] = useState<boolean>(false);

  return (
    <>
      <main>
        <Filters/>
      </main>
    </>
  );
}

export default App;
