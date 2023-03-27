import React from 'react';
import { ListGroupItem, Button } from 'react-bootstrap';

const JobItem = ({ job, onDeleteJob }) => {
    return (
        <ListGroupItem>
            <h4>{job.title ? job.title : 'No title available'}</h4>
            <p>{job.company}</p>
            <p>{job.location}</p>
            <p>{job.description}</p>
            <Button variant="danger" onClick={() => onDeleteJob(job.id)}>Delete</Button>
        </ListGroupItem>
    );
};

export default JobItem;
