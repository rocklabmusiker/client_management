import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './IncomCardContent.css';
import { FcBusinessman, FcManager } from 'react-icons/fc';
import { FaClipboardList } from 'react-icons/fa';
import { MdOutlineDateRange } from 'react-icons/md';
import { BiSolidLayer } from 'react-icons/bi';
import { PiChatsCircleDuotone } from 'react-icons/pi';
import { GrAttachment } from 'react-icons/gr';

const UnderReviewCard = () => {
    const [showModal, setShowModal] = useState(false);
    const [files, setFiles] = useState([]);
    const [attachmentCount, setAttachmentCount] = useState(0);

    useEffect(() => {
        fetchFileCount();
    }, [files]);

    const fetchFileCount = async () => {
        const response = await axios.get('http://localhost:5000/fileCount');
        setAttachmentCount(response.data.count);
    };

    const handleFileUpload = async (event) => {
        const formData = new FormData();
        Array.from(event.target.files).forEach(file => {
            formData.append('files', file);
        });
        try {
            await axios.post('http://localhost:5000/upload', formData);
            setFiles(prevFiles => [...prevFiles, ...event.target.files]);
        } catch (error) {
            console.error('Error uploading files:', error);
        }
    };

    return (
        <div className="incom-card-content">
            <div className="content-row">
                <span className="icon-content"><FcBusinessman /><b>Client Name</b></span>
                <span className="icon-content"><FcManager /><b>Sadik Islam</b></span>
            </div>
            <div className="content-row">
                <span className="icon-content"><BiSolidLayer />Lorem ipsum dolor sit amet cum.</span>
                <span className="icon-content"><FaClipboardList />1/2</span>
            </div>
            <div className="content-row">
                <span className="icon-content"><FcManager /></span>
                <span className="icon-content"><FcBusinessman /></span>
                <span className="icon-content">12+</span>
                <span className="icon-content"><PiChatsCircleDuotone />15</span>
                <span className="icon-content" onClick={() => setShowModal(true)}>
                    <GrAttachment /><span>{attachmentCount}</span>
                </span>
                <span className="icon-content"><MdOutlineDateRange />30-12-2022</span>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowModal(false)}>&times;</span>
                        <p>Upload Attachments:</p>
                        <input type="file" name="files" multiple onChange={handleFileUpload} />
                        <ul>
                            {files.map((file, index) => (
                                <li key={index}>
                                    {file.name} ({file.name.split('.').pop()})
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UnderReviewCard;
