import React from 'react';
import { ListGroupItem, Button, DropdownButton, Dropdown } from 'react-bootstrap';

const JobItem = ({ job, onDeleteJob, onStatusChange }) => {
    const handleStatusChange = (newStatus) => {
        onStatusChange(job.id, newStatus);
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
                    variant="secondary"
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
                <Button variant="danger" onClick={() => onDeleteJob(job.id)}>Delete</Button>
            </div>
        </ListGroupItem>
    );
};

export default JobItem;

