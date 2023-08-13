import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarTile from './components/NavbarTile';
import { useEffect, useState } from 'react';
import TicketCard from './components/TicketCard';
import { IoMdAdd } from 'react-icons/io';
import { BsThreeDots } from 'react-icons/bs';
import { orderBy } from 'lodash';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState('status');
  const [selectedSort, setSelectedSort] = useState('title');
  const url = 'https://apimocha.com/quicksell/data';

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setTickets(data.tickets);
        setUsers(data.users);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const groupOptions = ['status', 'userId', 'priority'];
  const sortOptions = ['title', 'priority'];

  // Map priority numbers to text values
  const mapPriorityToText = {
    4: 'Urgent',
    3: 'High',
    2: 'Medium',
    1: 'Low',
    0: 'No Priority'
  };

  const groupedTickets = tickets.reduce((groups, ticket) => {
    const groupValue = selectedGroup === 'priority'
      ? mapPriorityToText[ticket.priority]
      : (selectedGroup === 'userId'
        ? users.find(user => user.id === ticket.userId)?.name
        : ticket[selectedGroup]);

    if (!groups[groupValue]) {
      groups[groupValue] = [];
    }
    groups[groupValue].push(ticket);
    return groups;
  }, {});

  return (
    <div className="App">
      <NavbarTile
        groupOptions={groupOptions}
        sortOptions={sortOptions}
        selectedGroup={selectedGroup}
        setSelectedGroup={setSelectedGroup}
        setSelectedSort={setSelectedSort}
        selectedSort={selectedSort}
      />
      <div className="board-container">
        {Object.keys(groupedTickets).map(groupValue => (
          <div key={groupValue} className="board-column">
            <div className='d-flex justify-content-between align-items-center'>
              <h5><b>{groupValue}</b> <span className='text-body-tertiary ps-2'>{groupedTickets[groupValue].length}</span></h5>
              <div className="d-flex justify-content-center align-items-center">
                <div className='px-1 text-body-tertiary'><IoMdAdd/></div>
                <div className='px-1 text-body-tertiary'><BsThreeDots /></div>
              </div>
            </div>
            {orderBy(groupedTickets[groupValue],
              selectedSort === 'priority' ? ['priority', 'title'] : ['title', 'priority'],
              selectedSort === 'priority' ? ['desc', 'asc'] : ['asc']
            ).map(ticket => (
              <TicketCard
                key={ticket.id}
                ticket={ticket}
                users={users}
                selectedGroup={selectedGroup}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
