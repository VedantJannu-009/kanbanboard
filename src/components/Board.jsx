import React from 'react'
import TicketCard from './TicketCard'
import { orderBy } from 'lodash';
import '../styles/Board.css';
import { BsThreeDots } from 'react-icons/bs';
import { IoMdAdd } from 'react-icons/io';
const Board = ({groupedTickets,selectedGroup,selectedSort,users,getStatusIcon,getPriorityIcon}) => {
  return (
    <div className="board-container">
        {Object.keys(groupedTickets).map(groupValue => (
          <div key={groupValue} className="board-column">
            <div className='d-flex justify-content-between align-items-center'>
              <h5>
                <span className='pe-3'>
                  {selectedGroup === 'status' && getStatusIcon(groupValue)}
                  {selectedGroup === 'priority' && getPriorityIcon(groupValue)}
                </span>
                <b> 
                  {groupValue}
                </b>
                <span className='text-body-tertiary ps-3'>{groupedTickets[groupValue].length}</span>
              </h5>
              <div className="d-flex justify-content-center align-items-center">
                <div className='px-1 text-body-tertiary'><IoMdAdd /></div>
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
  )
}

export default Board