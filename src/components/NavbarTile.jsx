import React from 'react'
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import { LuSettings2 } from 'react-icons/lu'
import 'react-dropdown/style.css';
// import { useState } from 'react';
import '../styles/NavbarTile.css';
import UIdropdown from './UiDropdown';
const NavbarTile = ({groupOptions,sortOptions,selectedGroup,setSelectedGroup,selectedSort,setSelectedSort}) => {
  return (
    <div>
      <Container fluid className='p-3 bg-white border-bottom shadow-sm fixed-top'>
        <Dropdown className='mx-5'>
          <Dropdown.Toggle className='bg-white border-white text-dark shadow-sm border-secondary-subtle' id="dropdown-basic">
            <LuSettings2 /> <b>Display</b>
          </Dropdown.Toggle>
          <Dropdown.Menu className='dropMenu'>
            <UIdropdown entity={"Grouping"} selectedEntity={selectedGroup} setSelectEdentity={setSelectedGroup} entityOptions={groupOptions}/>
            <UIdropdown entity={"Ordering"} selectedEntity={selectedSort} setSelectEdentity={setSelectedSort} entityOptions={sortOptions}/>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </div>
  )
}

export default NavbarTile;
