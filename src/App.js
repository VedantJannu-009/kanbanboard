import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarTile from './components/NavbarTile';
import { useEffect, useState } from 'react';
import TicketCard from './components/TicketCard';
const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState('status'); // Default grouping option

  useEffect(() => {
    fetch('https://apimocha.com/quicksell/data')
      .then(response => response.json())
      .then(data => {
        setTickets(data.tickets);
        setUsers(data.users);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const groupOptions = ['status', 'userId', 'priority']; // Grouping options
  const sortOptions = ['title', 'priority']; // sorting options

  const groupedTickets = tickets.reduce((groups, ticket) => {
    const groupValue = ticket[selectedGroup];
    if (!groups[groupValue]) {
      groups[groupValue] = [];
    }
    groups[groupValue].push(ticket);
    return groups;
  }, {});

  const uniqueStatuses = [...new Set(tickets.map(ticket => ticket.status))];
  console.log(uniqueStatuses);
  const numberOfStatuses = uniqueStatuses.length;
  console.log(`Number of unique statuses: ${numberOfStatuses}`);

  const [columns, setColumns] = useState([]);
  const [newColumnName, setNewColumnName] = useState('');

  const addColumn = () => {
    if (newColumnName.trim() !== '') {
      setColumns([...columns, newColumnName]);
      setNewColumnName('');
    }
  };

  return (
    <div className="App">
      <NavbarTile groupOptions={groupOptions} sortOptions={sortOptions} selectedGroup={selectedGroup} setSelectedGroup={setSelectedGroup}/>
      <h1>Ticket Kanban Board</h1>
      {/* <div>
        <label htmlFor="groupSelect">Group by:</label>
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
      </div> */}
       <div className='container-fluid'>
        <div className="row">
        {columns.map((column, index) => (
          <div key={index} className="col">
            <span>{column}</span>
          </div>
        ))}
        </div>
       </div>
        <div className="add-column">
        <input
          type="text"
          placeholder="New Column Name"
          value={newColumnName}
          onChange={(e) => setNewColumnName(e.target.value)}
        />
        <button onClick={addColumn}>Add Column</button>
      </div>
      <div className="board-container">
        {Object.keys(groupedTickets).map(groupValue => (
          <div key={groupValue} className="board-column">
            <h2>{groupValue}</h2>
            {groupedTickets[groupValue].map(ticket => (
              <TicketCard key={ticket.id} ticket={ticket} users={users} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
