import React from 'react';
import { BsCircleFill } from 'react-icons/bs';
import '../styles/TicketCard.css';

const TicketCard = ({ ticket, selectedGroup, getStatusIcon, getPriorityIcon, getRandomImage }) => {
  const ticketImage = getRandomImage();

  return (
    <div className="ticket my-2 d-flex justify-content-between align-items-start">
      <div className='d-flex align-items-start flex-column h-100'>
        <div>
          <div><h6 className='text-body-tertiary'>{ticket.id}</h6></div>
          <div className='d-flex justify-content-between align-items-start'>
            {selectedGroup !== 'status' && (
              <div className='pe-2'>{getStatusIcon(ticket.status)}</div>
            )}
            <div ><h6><b className='ticketTitle'>{ticket.title}</b></h6></div>
          </div>
        </div>
        <div className='d-flex justify-content-left align-items-center'>
          {selectedGroup !== 'priority' && (
            <div className='text-body-secondary p-1 border border-light-subtle rounded'>
              {getPriorityIcon(ticket.priority)}{" "}
            </div>
          )}
          <div className='d-flex justify-content-center align-items-center p-1 border border-light-subtle rounded mx-2'>
            <div><BsCircleFill className='text-body-tertiary opacity-50' /></div>
            <div>{ticket.tag}</div>
          </div>
        </div>
      </div>
      {selectedGroup !== 'userId' && (
        <div>
          <img src={ticketImage} alt={"manimage"} />
        </div>
      )}
    </div>
  );
}

export default TicketCard;
