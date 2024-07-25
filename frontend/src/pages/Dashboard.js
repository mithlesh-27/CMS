import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
  const [contents, setContents] = useState([]);
  const [error, setError] = useState(null); // Add this line

  useEffect(() => {
    const fetchContents = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/content', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setContents(response.data);
      } catch (error) {
        console.error('Error fetching contents:', error);
        setError(error); // Now setError is defined
      }
    };
    fetchContents();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container">
      <h2>Dashboard</h2>
      {contents.map((content) => (
        <div key={content._id} className="dashboard-content">
          <h3>{content.title}</h3>
          <p>{content.body}</p>
          <p>Category: {content.category}</p>
          <p>Author: {content.author.username}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;