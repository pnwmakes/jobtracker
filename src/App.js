import React, { useState } from 'react';
import JobList from './components/JobList';
import AddJobModal from './components/AddJobModal';
import { Navbar, Container, Button } from 'react-bootstrap';
import './App.css';

const Navigation = ({ jobs, onAddJob }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand className="mr-auto ml-3">My Job Tracker</Navbar.Brand>
      <Button className="calendar-btn mr-3" variant="outline-light">Calendar</Button>
      <Button className="add-job-btn mr-3" variant="outline-light" onClick={handleShowModal}>Add Job</Button>
      <AddJobModal show={showModal} onHide={handleCloseModal} onAddJob={onAddJob} />
    </Navbar>
  );
};


const App = () => {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Big Tech & Surf Inc.',
      location: 'San Francisco, CA',
      description: 'We are looking for a Frontend grunt intern.',
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'Bagles & Loks Start Up Corp.',
      location: 'New York, NY',
      description: 'We are looking for a Backend DevOps, No experience.',
    },
    {
      id: 3,
      title: 'Fullstack Developer',
      company: 'Coffe and Grundge LLC.',
      location: 'Seattle, WA',
      description: 'We are looking for Fullstack type of person, No experience.',
    },
    {
      id: 4,
      title: 'Junior QA Software Engineer',
      company: 'We Break Stuff Inc.',
      location: 'Palo Alto, CA',
      description: 'We are looking for someone to break things.',
    },
  ]);

  const handleDeleteJob = (jobId) => {
    setJobs(jobs.filter(job => job.id !== jobId));
  }

  const handleAddJob = (newJob) => {
    setJobs([newJob, ...jobs]);
  }

  return (
    <div className="App">
      <Navigation onAddJob={handleAddJob} />
      <header className="header">
        <h1>Jobs Applied To</h1>
      </header>
      <Container className="job-list-container">
        <JobList jobs={jobs} onDeleteJob={handleDeleteJob} />
      </Container>
    </div>
  );
};

export default App;



