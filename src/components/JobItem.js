import React, { useState } from 'react';
import { ListGroupItem, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import NotesModal from './NotesModal';
import { v4 as uuidv4 } from 'uuid';

const JobItem = ({ job, onDeleteJob, onStatusChange, onUpdateJob }) => {
    const [showNotesModal, setShowNotesModal] = useState(false);

    const handleStatusChange = (newStatus) => {
        onStatusChange(job.id, newStatus);
    };

    const handleShowNotesModal = () => {
        setShowNotesModal(true);
    };

    const handleCloseNotesModal = () => {
        setShowNotesModal(false);
    };

    const handleAddNote = (noteText) => {
        const newNote = {
            id: uuidv4(),
            text: noteText,
        };

        const updatedJob = {
            ...job,
            notes: [...job.notes, newNote],
        };

        onUpdateJob(updatedJob);
    };

    const handleDeleteNote = (noteId) => {
        const updatedNotes = job.notes.filter((note) => note.id !== noteId);
        const updatedJob = {
            ...job,
            notes: updatedNotes,
        };

        onUpdateJob(updatedJob);
    };

    return (
        <ListGroupItem className="job-item">
            <h4>{job.title ? job.title : 'No title available'}</h4>
            <p>{job.company}</p>
            <p>{job.location}</p>
            <p>{job.description}</p>
            <p>Status: {job.status}</p>
            <div className="button-group">
                <DropdownButton
                    id={`status-dropdown-${job.id}`}
                    title="Update Status"
                    variant="success"
                    onSelect={handleStatusChange}
                    className="mr-2 update-status-button"
                >
                    <Dropdown.Item eventKey="No Answer">No Answer</Dropdown.Item>
                    <Dropdown.Item eventKey="Interview">Interview</Dropdown.Item>
                    <Dropdown.Item eventKey="Rejection">Rejection</Dropdown.Item>
                    <Dropdown.Item eventKey="Offer">Offer</Dropdown.Item>
                    <Dropdown.Item eventKey="Follow up">Follow up</Dropdown.Item>
                    <Dropdown.Item eventKey="Follow up">Waiting</Dropdown.Item>
                </DropdownButton>
                <Button
                    className="notes-button mr-2"
                    variant="info"
                    onClick={handleShowNotesModal}
                >
                    Notes
                </Button>
                <Button variant="danger" onClick={() => onDeleteJob(job.id)}>
                    Delete
                </Button>
            </div>
            <NotesModal
                show={showNotesModal}
                onHide={handleCloseNotesModal}
                notes={job.notes}
                onAddNote={handleAddNote}
                onDeleteNote={handleDeleteNote}
            />
        </ListGroupItem>
    );
};

export default JobItem;


