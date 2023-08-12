import React from 'react'

const TicketCard = ({ ticket, users }) => {
    const user = users.find(user => user.id === ticket.userId);

  return (
    <div className="">
      <p>{ticket.title}</p>
      <p>Status: {ticket.status}</p>
      <p>Priority: {ticket.priority}</p>
      <p>Assigned to: {user ? user.name : 'Unknown'}</p>
    </div>
  );
}

export default TicketCard;