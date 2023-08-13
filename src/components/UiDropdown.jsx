import React from 'react';
import '../styles/UiDropdown.css';

const UIdropdown = ({ selectedEntity, setSelectEdentity, entityOptions, entity }) => {
  return (
    <div className='d-flex justify-content-between align-items-center p-2 px-4 '>
      <div className='text-body-secondary'><b>{entity}</b> </div>
      <div>
        <select
          className='px-3 p-1 rounded border border-dark-subtle'
          id="groupSelect"
          value={selectedEntity}
          onChange={(e) => setSelectEdentity(e.target.value)}
        >
          {entityOptions.map(option => (
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


