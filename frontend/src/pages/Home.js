// src/pages/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <><div className="home-container">
      <h2>Welcome to Our Content Management System</h2>
      <p>
        Our CMS allows you to create, manage, and publish content seamlessly. Whether you're a blogger, a business, or a team, our CMS is designed to meet your content needs.
      </p>
      <div className="features">
        <div className="feature">
          <h3>Create Content</h3>
          <p>
            Easily create new content with our user-friendly editor. Add text, images, and more to make your content stand out.
          </p>
        </div>
        <div className="feature">
          <h3>Manage Content</h3>
          <p>
            Organize your content into categories, edit existing content, and keep everything structured and easy to find.
          </p>
        </div>
        <div className="feature">
          <h3>Collaborate</h3>
          <p>
            Work together with your team on drafts, leave comments, and make the content creation process more efficient.
          </p>
        </div>
        <div className="feature">
          <h3>Schedule Publication</h3>
          <p>
            Plan your content ahead of time by scheduling publications. Set dates and times for your content to go live.
          </p>
        </div>
      </div>
    </div><div>
        <footer className="footer">
          <p>&copy; 2024 My CMS. All rights reserved.</p>
          <ul>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </footer>
      </div></>
    
  );
};

export default Home;