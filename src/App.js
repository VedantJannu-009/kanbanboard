// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import NavbarTile from './components/NavbarTile';
// import { useEffect, useState } from 'react';
// import Board from './components/Board';

// const App = () => {
//   //constants 
//   const groupOptions = ['status', 'userId', 'priority'];
//   const sortOptions = ['title', 'priority'];
//   const [appData, setAppData] = useState({
//     tickets: [],
//     users: []
//   });
//   const [selectedGroup, setSelectedGroup] = useState('status');
//   const [selectedSort, setSelectedSort] = useState('title');
//   const url = 'https://apimocha.com/quicksell/data';

//   useEffect(() => {
//     fetch(url)
//       .then(response => response.json())
//       .then(data => {
//         setAppData(data);
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   const groupedTickets = appData.tickets.reduce((groups, ticket) => {
//     const groupValue = selectedGroup === 'priority'
//       ? ticket.priority
//       : (selectedGroup === 'userId'
//         ? appData.users.find(user => user.id === ticket.userId)?.name
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
//       <Board groupedTickets={groupedTickets} selectedGroup={selectedGroup} selectedSort={selectedSort} users={appData.users} />
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
  const groupOptions = ['status', 'userId', 'priority'];
  const sortOptions = ['title', 'priority'];
  
  const [appData, setAppData] = useState({
    tickets: [],
    users: []
  });

  // Retrieve the selectedGroup from localStorage if available, otherwise default to 'status'
  const [selectedGroup, setSelectedGroup] = useState(localStorage.getItem('selectedGroup') || 'status');
  const [selectedSort, setSelectedSort] = useState(localStorage.getItem('selectedSort') ||'title');
  const url = 'https://apimocha.com/quicksell/data';

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setAppData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Update the selectedGroup in localStorage whenever it changes
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
