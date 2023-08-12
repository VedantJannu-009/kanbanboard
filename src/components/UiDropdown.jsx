import React from 'react';
import '../styles/UiDropdown.css';

const UIdropdown = ({ options,text ,selectedOption,setSelectedOption}) => {
  // const [selectedOption, setSelectedOption] = useState('title');

  return (
    <div className='d-flex justify-content-between align-items-center px-3'>
      <div>{text}</div>
      <div>
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          {options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default UIdropdown;


