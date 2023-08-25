import React from 'react';
import './IncomCardContent.css';
import { FcBusinessman, FcManager } from 'react-icons/fc';
import { FaClipboardList } from 'react-icons/fa';
import { MdOutlineDateRange } from 'react-icons/md';
import { BiSolidLayer } from 'react-icons/bi';
import { PiChatsCircleDuotone } from 'react-icons/pi'; // Please double-check this import, as this icon isn't standard in 'react-icons'
import { GrAttachment } from 'react-icons/gr';

const IncomCardContent = () => {
    return (
        <div className="incom-card-content">
            <div className="content-row">
                <span className="icon-content">
                    <FcBusinessman />
                    <b>Client Name</b>
                </span>
                <span className="icon-content">
                    <FcManager />
                    <b>Sadik Islam</b>
                </span>
            </div>
            <div className="content-row">
                <span className="icon-content">
                    <BiSolidLayer />
                    Lorem ipsum dolor sit amet cum.
                </span>
                <span className="icon-content">
                    <FaClipboardList />
                    1/2
                </span>
                
            </div>
            <div className="content-row">
                <span className="icon-content">
                    <FcManager />
                </span>
                <span className="icon-content">
                    <FcBusinessman />
                </span>
                <span className="icon-content">
                    12+
                </span>
                <span className="icon-content">
                    <PiChatsCircleDuotone />
                    15
                </span>
                <span className="icon-content">
                    <GrAttachment />
                    25
                </span>
                <span className="icon-content">
                    <MdOutlineDateRange />
                    30-12-2022
                </span>
            </div>
        </div>
    );
}


export default IncomCardContent;
