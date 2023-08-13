import React from 'react'
import TicketCard from './TicketCard'
import { orderBy } from 'lodash';
import '../styles/Board.css';
import { BsThreeDots } from 'react-icons/bs';
import { IoMdAdd } from 'react-icons/io';
import { TbCircleDotted } from 'react-icons/tb';
import { WiMoonAltWaningGibbous5 } from 'react-icons/wi'
import { MdCancel, MdPendingActions } from 'react-icons/md';
import { AiFillCheckCircle } from 'react-icons/ai'
import { PiCellSignalHighFill, PiCellSignalMediumFill, PiCellSignalLowFill } from 'react-icons/pi'
import { HiExclamationTriangle } from 'react-icons/hi2';
import p1 from '../assets/images/p1.jpg';
import p2 from '../assets/images/p2.jpg';
import p3 from '../assets/images/p3.jpg';
import p4 from '../assets/images/p4.jpg';
import p5 from '../assets/images/p5.jpg';
const Board = ({ groupedTickets, selectedGroup, selectedSort, users }) => {
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
        if (priority === 'No Priority') {
          return <BsThreeDots className="text-body-tertiary" />;
        } else if (priority === 'Low') {
          return <PiCellSignalLowFill className="text-body-tertiary" />;
        } else if (priority === 'High') {
          return <PiCellSignalMediumFill className="text-body-tertiary" />;
        } else if (priority === 'Medium') {
          return <PiCellSignalHighFill className="text-body-tertiary" />;
        } else if (priority === 'Urgent') {
          return <HiExclamationTriangle className="text-body-tertiary" />;
        }else if (priority === 0) {
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
      const mapPriorityToText = {
        4: 'Urgent',
        3: 'High',
        2: 'Medium',
        1: 'Low',
        0: 'No Priority'
      };
    const images = [p1, p2, p3, p4, p5]; 
    const getRandomImage = () => {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    };
    return (
        <div className="board-container">
            {Object.keys(groupedTickets).map(groupValue => (
                <div key={groupValue} className="board-column">
                    <div className='d-flex justify-content-between align-items-center'>
                        <h5>
                            <span className='pe-3'>
                                {selectedGroup === 'status' && getStatusIcon(groupValue)}
                                {selectedGroup === 'priority' && getPriorityIcon(mapPriorityToText[groupValue])}
                                {selectedGroup === 'userId' && (
                                    <>
                                        <img
                                            src={getRandomImage()}
                                            alt="user"
                                            className="user-image"
                                        />{' '}
                                    </>
                                )}
                            </span>
                            <b>
                            {selectedGroup === 'priority' ? mapPriorityToText[groupValue] : groupValue}
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
                            getPriorityIcon={getPriorityIcon}
                            getStatusIcon={getStatusIcon}
                            getRandomImage={getRandomImage}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Board;


