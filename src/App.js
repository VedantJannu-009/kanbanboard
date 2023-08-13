// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import NavbarTile from './components/NavbarTile';
// import { useEffect, useState } from 'react';
// import Board from './components/Board';

// const App = () => {
//   const [tickets, setTickets] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [selectedGroup, setSelectedGroup] = useState('status');
//   const [selectedSort, setSelectedSort] = useState('title');
//   const url = 'https://apimocha.com/quicksell/data';

//   useEffect(() => {
//     fetch(url)
//       .then(response => response.json())
//       .then(data => {
//         setTickets(data.tickets);
//         setUsers(data.users);
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   const groupOptions = ['status', 'userId', 'priority'];
//   const sortOptions = ['title', 'priority'];

//   const mapPriorityToText = {
//     4: 'Urgent',
//     3: 'High',
//     2: 'Medium',
//     1: 'Low',
//     0: 'No Priority'
//   };

//   const groupedTickets = tickets.reduce((groups, ticket) => {
//     const groupValue = selectedGroup === 'priority'
//       ? mapPriorityToText[ticket.priority]
//       : (selectedGroup === 'userId'
//         ? users.find(user => user.id === ticket.userId)?.name
//         : ticket[selectedGroup]);
//     if (!groups[groupValue]) {
//       groups[groupValue] = [];
//     }
//     groups[groupValue].push(ticket);
//     return groups;
//   }, {});

//   return (
//     <div className="App">
//       <NavbarTile
//         groupOptions={groupOptions}
//         sortOptions={sortOptions}
//         selectedGroup={selectedGroup}
//         setSelectedGroup={setSelectedGroup}
//         setSelectedSort={setSelectedSort}
//         selectedSort={selectedSort}
//       />
//       <Board groupedTickets={groupedTickets} selectedGroup={selectedGroup} selectedSort={selectedSort} users={users} />
//     </div>
//   );
// }

// export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarTile from './components/NavbarTile';
import { useEffect, useState } from 'react';
import Board from './components/Board';

const App = () => {
  const [appData, setAppData] = useState({
    tickets: [],
    users: []
  });

  const [selectedGroup, setSelectedGroup] = useState('status');
  const [selectedSort, setSelectedSort] = useState('title');
  const url = 'https://apimocha.com/quicksell/data';

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setAppData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const groupOptions = ['status', 'userId', 'priority'];
  const sortOptions = ['title', 'priority'];

  const mapPriorityToText = {
    4: 'Urgent',
    3: 'High',
    2: 'Medium',
    1: 'Low',
    0: 'No Priority'
  };

  const groupedTickets = appData.tickets.reduce((groups, ticket) => {
    const groupValue = selectedGroup === 'priority'
      ? mapPriorityToText[ticket.priority]
      : (selectedGroup === 'userId'
        ? appData.users.find(user => user.id === ticket.userId)?.name
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
      <Board groupedTickets={groupedTickets} selectedGroup={selectedGroup} selectedSort={selectedSort} users={appData.users} />
    </div>
  );
}

export default App;
