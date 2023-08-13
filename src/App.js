// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import NavbarTile from './components/NavbarTile';
// import { useEffect, useState } from 'react';
// import TicketCard from './components/TicketCard';
// import {IoMdAdd} from 'react-icons/io'
// import {BsThreeDots} from 'react-icons/bs';
// const App = () => {
//   const [tickets, setTickets] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [selectedGroup, setSelectedGroup] = useState('status'); // Default grouping option
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

//   // const uniqueStatuses = [...new Set(tickets.map(ticket => ticket.status))];
//   // console.log(uniqueStatuses);
//   // const numberOfStatuses = uniqueStatuses.length;
//   // console.log(`Number of unique statuses: ${numberOfStatuses}`);

//   return (
//     <div className="App">
//       <NavbarTile groupOptions={groupOptions} sortOptions={sortOptions} selectedGroup={selectedGroup} setSelectedGroup={setSelectedGroup}/>
//       <div className="board-container">
//         {Object.keys(groupedTickets).map(groupValue => (
//           <div key={groupValue} className="board-column">
//             <div className='d-flex justify-content-between align-items-center'>
//               <h5><b>{groupValue}</b> <span className='text-body-tertiary ps-2'>{groupedTickets[groupValue].length}</span></h5>
//               <div className="d-flex justify-content-center align-items-center">
//                 <div className='px-1 text-body-tertiary'><IoMdAdd/></div>
//                 <div className='px-1 text-body-tertiary'><BsThreeDots/></div>
//               </div>
//             </div>
//             {groupedTickets[groupValue].map(ticket => (
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
import { orderBy } from 'lodash'; // Import the orderBy function from lodash

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState('status'); // Default grouping option
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

  return (
    <div className="App">
      <NavbarTile groupOptions={groupOptions} sortOptions={sortOptions} selectedGroup={selectedGroup} setSelectedGroup={setSelectedGroup}/>
      <div className="board-container">
        {Object.keys(groupedTickets).map(groupValue => (
          <div key={groupValue} className="board-column">
            <div className='d-flex justify-content-between align-items-center'>
              <h5><b>{groupValue}</b> <span className='text-body-tertiary ps-2'>{groupedTickets[groupValue].length}</span></h5>
              <div className="d-flex justify-content-center align-items-center">
                <div className='px-1 text-body-tertiary'><IoMdAdd/></div>
                <div className='px-1 text-body-tertiary'><BsThreeDots/></div>
              </div>
            </div>
            {orderBy(groupedTickets[groupValue], ['priority']).map(ticket => (
              <TicketCard key={ticket.id} ticket={ticket} users={users} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
