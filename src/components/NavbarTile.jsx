import React from 'react'
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import { LuSettings2 } from 'react-icons/lu'
import 'react-dropdown/style.css';
// import { useState } from 'react';
import '../styles/NavbarTile.css';
const NavbarTile = ({groupOptions,sortOptions,selectedGroup,setSelectedGroup,selectedSort,setSelectedSort}) => {
  return (
    <div>
      <Container fluid className='p-3 bg-white border-bottom shadow-sm fixed-top'>
        <Dropdown className='mx-5'>
          <Dropdown.Toggle className='bg-white border-white text-dark shadow-sm border-secondary-subtle' id="dropdown-basic">
            <LuSettings2 /> <b>Display</b>
          </Dropdown.Toggle>
          <Dropdown.Menu className='dropMenu'>
            <div className='d-flex justify-content-between align-items-center p-2 px-4 '>
              <div>Grouping </div>
              <div>
                <select
                className='px-3 p-1 rounded border border-dark-subtle'
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
            <div className='d-flex justify-content-between align-items-center p-2 px-4'>
              <div>Ordering </div>
              <div>
                <select
                className='px-3 p-1 rounded border border-dark-subtle'
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
