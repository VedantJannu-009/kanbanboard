import React from 'react'
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import { LuSettings2 } from 'react-icons/lu'
import 'react-dropdown/style.css';
import { useState } from 'react';
import '../styles/NavbarTile.css';
const NavbarTile = ({groupOptions,sortOptions,selectedGroup,setSelectedGroup,selectedSort,setSelectedSort}) => {
  // const [selectedGroup, setSelectedGroup] = useState('status');
  // const [selectedSort, setSelectedSort] = useState('title');
  // const groupOptions = ['status', 'userId', 'priority']; // Grouping options
  // const sortOptions = ['title', 'priority']; // sorting options

  // const select1 = [
  //   { key: 'o1', value: 'Status' },
  //   { key: 'o2', value: 'User' },
  //   { key: 'o3', value: 'Priority' },
  // ];
  // const select2 = [
  //   { key: 'o1', value: 'Priority' },
  //   { key: 'o2', value: 'Title' },
  // ];
  return (
    <div>
      <Container fluid className='p-3 bg-white border-bottom shadow-sm'>
        <Dropdown className='mx-5'>
          <Dropdown.Toggle className='bg-white border-white text-dark shadow-sm border-secondary-subtle' id="dropdown-basic">
            <LuSettings2 /> <b>Display</b>
          </Dropdown.Toggle>
          <Dropdown.Menu className='bg-secondary-subtle dropMenu'>
            <div className='d-flex justify-content-between align-items-center px-3'>
              <div>Grouping </div>
              <div>
                <select
                  id="groupSelect"
                  value={selectedGroup}
                  onChange={(e) => setSelectedGroup(e.target.value)}
                >
                  {groupOptions.map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className='d-flex justify-content-between align-items-center px-3'>
              <div>Ordering </div>
              <div>
                <select
                  id="sortSelect"
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value)}
                >
                  {sortOptions.map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </div>
  )
}

export default NavbarTile;
