// import React from 'react';
// import JobItem from './JobItem';
// import { ListGroup } from 'react-bootstrap';

// function JobList({ jobs }) {
//     return (
//         <ListGroup>
//             {jobs.map((job) => (
//                 <JobItem key={job.id} job={job} />
//             ))}
//         </ListGroup>
//     );
// }

// export default JobList;
import React from 'react';
import JobItem from './JobItem';
import { ListGroup } from 'react-bootstrap';

function JobList({ jobs, onDeleteJob }) {
    return (
        <ListGroup>
            {jobs.map((job) => (
                <JobItem key={job.id} job={job} onDeleteJob={onDeleteJob} />
            ))}
        </ListGroup>
    );
}

export default JobList;
