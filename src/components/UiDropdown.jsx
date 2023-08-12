import React, { useState } from 'react';
import '../styles/UiDropdown.css';
import {BiSolidChevronDown} from 'react-icons/bi'
const  Option =({ option, onSelect })=> {
  const handleSelect = e => {
    e.preventDefault();
    onSelect(option);
  };

  return (
    <li>
      <a href="#" onClick={handleSelect}>
        {option.value}
      </a>
    </li>
  );
}
const  UIdropdown = ({ options })=> {
  const [selected, setSelected] = useState(null);
  const [opened, setOpened] = useState(false);

  const onOpen = () => {
    setOpened(!opened);
  };

  const onSelect = option => {
    setSelected(option);
    setOpened(false);
  };

  const getOptions = () => {
    return options.map(o => (
      <Option key={o.key} option={o} onSelect={onSelect} />
    ));
  };

  let items = getOptions();
  let selectedText = selected ? selected.value : 'Select';
  let cssClass = opened ? 'show' : 'hide';

  return (
    <div className="uiDropdown" onClick={onOpen}>
      <span>{selectedText}</span> <BiSolidChevronDown/>
      <ul className={cssClass}>{items}</ul>
      
    </div>
  );
}

export default UIdropdown;


