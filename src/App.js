import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarTile from './components/NavbarTile';
import { useEffect, useState } from 'react';
import Board from './components/Board';

const App = () => {
  const groupOptions = ['status', 'userId', 'priority'];
  const sortOptions = ['title', 'priority'];
  
  const [appData, setAppData] = useState({
    tickets: [],
    users: []
  });

  const [selectedGroup, setSelectedGroup] = useState(localStorage.getItem('selectedGroup') || 'status');
  const [selectedSort, setSelectedSort] = useState(localStorage.getItem('selectedSort') ||'title');
  const url = 'https://api.quicksell.co/v1/internal/frontend-assignment';

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setAppData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedGroup', selectedGroup);
    localStorage.setItem('selectedSort', selectedSort);
  }, [selectedGroup,selectedSort]);

  const groupedTickets = appData.tickets.reduce((groups, ticket) => {
    const groupValue = selectedGroup === 'priority'
      ? ticket.priority
      : (selectedGroup === 'userId'
        ? appData.users.find(user => user.id === ticket.userId)?.name
        : ticket[selectedGroup]);
    if (!groups[groupValue]) {
      groups[groupValue] = [];
    }
    groups[groupValue].push(ticket);
    return groups;
  }, {});

  const addNewTicket = (groupValue,ticketTitle,status,userId, priority) => {
    let newTicket = {
      id: `CAM-${Math.max(...appData.tickets.map(ticket => ticket.id)) + 1}`,
      title: ticketTitle,
      tag:["Feature Request"],
    };

    if (selectedGroup === 'status') {
      newTicket = { ...newTicket, status: groupValue , priority: priority, userId: userId};
    } else if (selectedGroup === 'userId') {
      newTicket = { ...newTicket, userId: groupValue, status: status , priority: priority, };
    } else if (selectedGroup === 'priority') {
      newTicket = { ...newTicket, priority: groupValue ,status: status ,userId: userId };
    }

    setAppData(prevState => ({
      ...prevState,
      tickets: [...prevState.tickets, newTicket],
    }));
  };

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
      <Board groupedTickets={groupedTickets} selectedGroup={selectedGroup} selectedSort={selectedSort} users={appData.users} addNewTicket={addNewTicket}/>
    </div>
  );
}

export default App;
