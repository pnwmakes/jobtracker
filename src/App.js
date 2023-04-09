import React, { useState } from 'react';
import JobList from './components/JobList';
import AddJobModal from './components/AddJobModal';
import { Navbar, Container, Button, FormControl } from 'react-bootstrap';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

const Navigation = ({ jobs, onAddJob, onSearchChange }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand className="mr-auto ml-3">My Job Tracker</Navbar.Brand>
      <Button className="calendar-btn mr-3" variant="outline-light">Calendar</Button>
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2 search-input"
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <Button className="add-job-btn mr-3 ml-3 border-dark text-dark" variant="outline-success" onClick={handleShowModal}>Add Job</Button>
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
      status: 'no-answer',
      notes: [],
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'Bagles & Loks Start Up Corp.',
      location: 'New York, NY',
      description: 'We are looking for a Backend DevOps, No experience.',
      status: 'no-answer',
      notes: [],
    },
    {
      id: 3,
      title: 'Fullstack Developer',
      company: 'Coffe and Grundge LLC.',
      location: 'Seattle, WA',
      description: 'We are looking for Fullstack type of person, No experience.',
      status: 'no-answer',
      notes: [],
    },
    {
      id: 4,
      title: 'Junior QA Software Engineer',
      company: 'We Break Stuff Inc.',
      location: 'Palo Alto, CA',
      description: 'We are looking for someone to break things.',
      status: 'no-answer',
      notes: [],
    },
  ]);


  const [searchTerm, setSearchTerm] = useState("");

  const handleDeleteJob = (jobId) => {
    setJobs(jobs.filter(job => job.id !== jobId));
  }

  const handleAddJob = (job) => {
    const newJob = {
      id: uuidv4(),
      title: job.title,
      company: job.company,
      location: job.location,
      description: job.description,
      status: job.status,
      notes: [],
    };
    setJobs([newJob, ...jobs]);
  };

  const handleStatusChange = (jobId, newStatus) => {
    setJobs(
      jobs.map((job) => (job.id === jobId ? { ...job, status: newStatus } : job))
    );
  };

  const handleAddNote = (jobId, newNote) => {
    setJobs(
      jobs.map((job) => (job.id === jobId ? { ...job, note: newNote } : job))
    );
  };

  const handleUpdateJob = (updatedJob) => {
    setJobs(jobs.map((job) => (job.id === updatedJob.id ? updatedJob : job)));
  };

  const handleSearchChange = (searchValue) => {
    setSearchTerm(searchValue);
  };

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <Navigation onAddJob={handleAddJob} onSearchChange={handleSearchChange} />
      <header className="header">
        <h1>Jobs Applied To</h1>
      </header>
      <Container className="job-list-container">
        <JobList jobs={filteredJobs} onDeleteJob={handleDeleteJob} onStatusChange={handleStatusChange} onUpdateJob={handleUpdateJob} />
      </Container>
    </div>
  );
};

export default App;







