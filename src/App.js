// priority sorting works 
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import NavbarTile from './components/NavbarTile';
// import { useEffect, useState } from 'react';
// import TicketCard from './components/TicketCard';
// import { IoMdAdd } from 'react-icons/io';
// import { BsThreeDots } from 'react-icons/bs';
// import { orderBy } from 'lodash'; // Import the orderBy function from lodash

// const App = () => {
//   const [tickets, setTickets] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [selectedGroup, setSelectedGroup] = useState('status'); // Default grouping option
//   const [sortAscending, setSortAscending] = useState(true); // State for sorting order
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

//   const groupOptions = ['status', 'userId', 'priority']; // Grouping options
//   const sortOptions = ['title', 'priority']; // sorting options

//   const groupedTickets = tickets.reduce((groups, ticket) => {
//     const groupValue = ticket[selectedGroup];
//     if (!groups[groupValue]) {
//       groups[groupValue] = [];
//     }
//     groups[groupValue].push(ticket);
//     return groups;
//   }, {});

//   // Function to toggle sorting order
//   const toggleSortingOrder = () => {
//     setSortAscending(!sortAscending);
//   };

//   return (
//     <div className="App">
//       <div className='px-1 text-body-tertiary' onClick={toggleSortingOrder}>
//         {sortAscending ? 'Sort ↓' : 'Sort ↑'}
//       </div>
//       <NavbarTile groupOptions={groupOptions} sortOptions={sortOptions} selectedGroup={selectedGroup} setSelectedGroup={setSelectedGroup} />
//       <div className="board-container">
//         {Object.keys(groupedTickets).map(groupValue => (
//           <div key={groupValue} className="board-column">
//             <div className='d-flex justify-content-between align-items-center'>
//               <h5><b>{groupValue}</b> <span className='text-body-tertiary ps-2'>{groupedTickets[groupValue].length}</span></h5>
//               <div className="d-flex justify-content-center align-items-center">

//                 <div className='px-1 text-body-tertiary'><BsThreeDots /></div>
//               </div>
//             </div>
//             {/* Sort the tickets within the column based on priority */}
//             {orderBy(groupedTickets[groupValue], ['priority'], [sortAscending ? 'asc' : 'desc']).map(ticket => (
//               <TicketCard key={ticket.id} ticket={ticket} users={users} />
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;


// title sorting works 
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import NavbarTile from './components/NavbarTile';
// import { useEffect, useState } from 'react';
// import TicketCard from './components/TicketCard';
// import { IoMdAdd } from 'react-icons/io';
// import { BsThreeDots } from 'react-icons/bs';
// import { orderBy } from 'lodash'; // Import the orderBy function from lodash

// const App = () => {
//   const [tickets, setTickets] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [selectedGroup, setSelectedGroup] = useState('status'); // Default grouping option
//   const [selectedSort, setSelectedSort] = useState('title'); // Default sorting option
//   const [sortAscending, setSortAscending] = useState(true); // State for sorting order
//   const [sortTitleAscending, setSortTitleAscending] = useState(true); // State for sorting by title order
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

//   const groupOptions = ['status', 'userId', 'priority']; // Grouping options
//   const sortOptions = ['title', 'priority']; // sorting options

//   const groupedTickets = tickets.reduce((groups, ticket) => {
//     const groupValue = ticket[selectedGroup];
//     if (!groups[groupValue]) {
//       groups[groupValue] = [];
//     }
//     groups[groupValue].push(ticket);
//     return groups;
//   }, {});

//   // Function to toggle sorting order by title
//   const toggleSortTitleOrder = () => {
//     setSortTitleAscending(!sortTitleAscending);
//     setSortAscending(true); // Reset priority sorting to ascending when sorting by title
//   };

//   return (
//     <div className="App">
//       <div className='px-1 text-body-tertiary' onClick={toggleSortTitleOrder}>
//         {sortTitleAscending ? 'Sort Title ↓' : 'Sort Title ↑'}
//       </div>
//       <NavbarTile groupOptions={groupOptions} sortOptions={sortOptions} selectedGroup={selectedGroup} setSelectedGroup={setSelectedGroup} setSelectedSort={setSelectedSort} selectedSort={selectedSort}/>
//       <div className="board-container">
//         {Object.keys(groupedTickets).map(groupValue => (
//           <div key={groupValue} className="board-column">
//             <div className='d-flex justify-content-between align-items-center'>
//               <h5><b>{groupValue}</b> <span className='text-body-tertiary ps-2'>{groupedTickets[groupValue].length}</span></h5>
//               <div className="d-flex justify-content-center align-items-center">
//                 <div className='px-1 text-body-tertiary'><IoMdAdd/></div>
//                 <div className='px-1 text-body-tertiary'><BsThreeDots /></div>
//               </div>
//             </div>
//             {orderBy(groupedTickets[groupValue],
//               sortTitleAscending ? ['title', 'priority'] : ['priority', 'title'],
//               sortAscending ? ['asc', 'asc'] : ['asc', 'desc']
//             ).map(ticket => (
//               <TicketCard key={ticket.id} ticket={ticket} users={users} />
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import NavbarTile from './components/NavbarTile';
// import { useEffect, useState } from 'react';
// import TicketCard from './components/TicketCard';
// import { IoMdAdd } from 'react-icons/io';
// import { BsThreeDots } from 'react-icons/bs';
// import { orderBy } from 'lodash';

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

//   const groupedTickets = tickets.reduce((groups, ticket) => {
//     const groupValue = ticket[selectedGroup];
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
//       <div className="board-container">
//         {Object.keys(groupedTickets).map(groupValue => (
//           <div key={groupValue} className="board-column">
//             <div className='d-flex justify-content-between align-items-center'>
//               <h5><b>{groupValue}</b> <span className='text-body-tertiary ps-2'>{groupedTickets[groupValue].length}</span></h5>
//               <div className="d-flex justify-content-center align-items-center">
//                 <div className='px-1 text-body-tertiary'><IoMdAdd/></div>
//                 <div className='px-1 text-body-tertiary'><BsThreeDots /></div>
//               </div>
//             </div>
//             {orderBy(groupedTickets[groupValue],
//               selectedSort === 'priority' ? ['priority', 'title'] : ['title' , 'priority'],
//               selectedSort === 'priority' ? ['asc', 'asc'] : ['asc']
//             ).map(ticket => (
//               <TicketCard key={ticket.id} ticket={ticket} users={users} />
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

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

  const groupedTickets = tickets.reduce((groups, ticket) => {
    const groupValue = ticket[selectedGroup];
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
              <TicketCard key={ticket.id} ticket={ticket} users={users} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
