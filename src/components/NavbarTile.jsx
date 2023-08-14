import React from 'react'
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import { LuSettings2 } from 'react-icons/lu'
import 'react-dropdown/style.css';
import '../styles/NavbarTile.css';
import UIdropdown from './UiDropdown';
import UiTooltip from './UiTooltip';
const NavbarTile = ({groupOptions,sortOptions,selectedGroup,setSelectedGroup,selectedSort,setSelectedSort}) => {
  return (
    <div>
      <Container fluid className='p-3 bg-white border-bottom shadow-sm fixed-top d-flex justify-content-left align-items-center'>
        <Dropdown>
          <Dropdown.Toggle className='bg-white border-white text-dark shadow-sm border-secondary-subtle' id="dropdown-basic">
            <LuSettings2 /> <b>Display</b> 
          </Dropdown.Toggle>
          <Dropdown.Menu className='dropMenu'>
            <UIdropdown entity={"Grouping"} selectedEntity={selectedGroup} setSelectEdentity={setSelectedGroup} entityOptions={groupOptions}/>
            <UIdropdown entity={"Ordering"} selectedEntity={selectedSort} setSelectEdentity={setSelectedSort} entityOptions={sortOptions}/>
          </Dropdown.Menu>
        </Dropdown>
        <UiTooltip text={"functionality to add tickets partially done"}/>
      </Container>
    </div>
  )
}

export default NavbarTile;
