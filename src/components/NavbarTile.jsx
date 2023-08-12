import React from 'react'
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import { LuSettings2 } from 'react-icons/lu'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'react-dropdown/style.css';
import UIdropdown from './UiDropdown';
const NavbarTile = () => {
  const select1 = [
    { key: 'o1', value: 'Status' },
    { key: 'o2', value: 'User' },
    { key: 'o3', value: 'Priority' },
  ];
  const select2 = [
    { key: 'o1', value: 'Priority' },
    { key: 'o2', value: 'Title' },
  ];
  return (
    <div>
      <Container fluid className='p-3 bg-white border-bottom shadow-sm'>
        <Dropdown className='mx-5'>
          <Dropdown.Toggle className='bg-white border-white text-dark shadow-sm border-secondary-subtle' id="dropdown-basic">
            <LuSettings2 /> <b>Display</b>
          </Dropdown.Toggle>
          <Dropdown.Menu className='bg-secondary-subtle'>
            <Container fluid>
              <Row>
                <Col>Grouping</Col>
                <Col><UIdropdown options={select1}/></Col>
              </Row>
            </Container>
            <Container>
              <Row>
                <Col>Ordering</Col>
                <Col><UIdropdown options={select2}/></Col>
              </Row>
            </Container>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </div>
  )
}

export default NavbarTile;
