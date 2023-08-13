// import React from 'react'
// import {BsFillExclamationSquareFill,BsCircleFill} from 'react-icons/bs'
// import img from '../assets/images/man.png';
// import '../styles/TicketCard.css';
// const TicketCard = ({ ticket }) => {
//   return (
//     <div className="ticket my-2">
//       <div className='d-flex justify-content-between align-items-center'>
//         <h5 className='text-body-tertiary'>{ticket.id}</h5>
//         <div><img src={img} alt={"manimage"} /></div>
//       </div>
//       <div>
//         <h5 className='ticketTitle'>{ticket.title}</h5>
//       </div>
//       <div className='d-flex justify-content-left align-items-center'>
//         <div className='text-body-secondary p-1 border border-light-subtle rounded'><BsFillExclamationSquareFill/></div>
//         <div className='p-1 border border-light-subtle rounded mx-2'><BsCircleFill className='text-body-tertiary mx-1'/>{ticket.tag}</div>
//       </div>
//     </div>
//   );
// }

// export default TicketCard;
import React from 'react';
import { BsCircleFill, BsThreeDots } from 'react-icons/bs';

import { PiCellSignalHighFill, PiCellSignalMediumFill, PiCellSignalLowFill } from 'react-icons/pi'
import { HiExclamationTriangle } from 'react-icons/hi2';
import { TbCircleDotted } from 'react-icons/tb';
import { WiMoonAltWaningGibbous5 } from 'react-icons/wi'
import { AiFillCheckCircle } from 'react-icons/ai'
import { MdCancel, MdPendingActions } from 'react-icons/md';
import p1 from '../assets/images/p1.jpg';
import p2 from '../assets/images/p2.jpg';
import p3 from '../assets/images/p3.jpg';
import p4 from '../assets/images/p4.jpg';
import p5 from '../assets/images/p5.jpg';
import '../styles/TicketCard.css';

const TicketCard = ({ ticket }) => {
  const images = [p1, p2, p3, p4, p5];
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };
  const ticketImage = getRandomImage();
  const getStatusIcon = (status) => {
    if (status === 'Todo') {
      return <TbCircleDotted className="text-danger" />;
    } else if (status === 'In progress') {
      return <WiMoonAltWaningGibbous5 className="text-warning" />;
    } else if (status === 'Backlog') {
      return <MdPendingActions className="text-info" />;
    } else if (status === 'Done') {
      return <AiFillCheckCircle className="text-info" />;
    } else if (status === 'Cancelled') {
      return <MdCancel className="text-danger" />;
    }
    return null;
  };

  const getPriorityIcon = (priority) => {
    if (priority === 0) {
      return <BsThreeDots className="text-body-tertiary" />;
    } else if (priority === 1) {
      return <PiCellSignalLowFill className="text-body-tertiary" />;
    } else if (priority === 2) {
      return <PiCellSignalMediumFill className="text-body-tertiary" />;
    } else if (priority === 3) {
      return <PiCellSignalHighFill className="text-body-tertiary" />;
    } else if (priority === 4) {
      return <HiExclamationTriangle className="text-body-tertiary" />;
    }
    return null;
  };

  return (
    <div className="ticket my-2 d-flex justify-content-between align-items-start">
      {/* <div className='d-flex justify-content-between align-items-center'>
        <h6 className='text-body-tertiary'>{ticket.id}</h6>
        <div><img src={ticketImage} alt={"manimage"} /></div>
      </div>
      <div>
        <h6 className='ticketTitle'>{getStatusIcon(ticket.status)}{" "}<b>{ticket.title}</b></h6>
      </div>
      <div className='d-flex justify-content-left align-items-center'>
        <div className='text-body-secondary p-1 border border-light-subtle rounded'>
          {getPriorityIcon(ticket.priority)}{" "}
        </div>
        <div className='d-flex justify-content-center align-items-center p-1 border border-light-subtle rounded mx-2'>
          <div><BsCircleFill className='text-body-tertiary opacity-50'/></div>
          <div>{ticket.tag}</div>
        </div>
      </div> */}
      <div >
        <div><h6 className='text-body-tertiary'>{ticket.id}</h6></div>
        <div className='d-flex justify-content-between align-items-start'>
          <div className='pe-2'>{getStatusIcon(ticket.status)}</div>
          <div><h6><b>{ticket.title}</b></h6></div>
        </div>
        <div className='d-flex justify-content-left align-items-center'>
          <div className='text-body-secondary p-1 border border-light-subtle rounded'>
            {getPriorityIcon(ticket.priority)}{" "}
          </div>
          <div className='d-flex justify-content-center align-items-center p-1 border border-light-subtle rounded mx-2'>
            <div><BsCircleFill className='text-body-tertiary opacity-50' /></div>
            <div>{ticket.tag}</div>
          </div>
        </div>
      </div>
      <div>
        <img src={ticketImage} alt={"manimage"} />
      </div>
    </div>
  );
}

export default TicketCard;
