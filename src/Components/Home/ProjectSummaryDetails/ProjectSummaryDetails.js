import React from 'react';
import './ProjectSummaryDetails.css'

const ProjectSummaryDetails = (proData) => {
  const { image, title, description, liveLink, clientLink, serverLink } = proData.proData;
  const technologySplit = proData.proData.tags.split(',')
  return (
    <div>
      <div className="card shadow p-3 mb-5 bg-body rounded">
        <img src={image} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <div className="mt-3">
            {
              technologySplit.map(tag => (
                <span key={proData.proData.title} class="badge rounded-pill bg-primary text-dark m-2">{tag}</span>
              ))
            }
          </div>
          <h5 className="card-title pt-4">{title}</h5>
          <p className="card-text">{description}</p>
          <div className="link-part d-flex justify-content-around">
            <div className="live-btn">
              <a href={liveLink} className="card-btn" target="_blank" rel="noreferrer">
                Live link
              </a>
            </div>
            <div className="code-btn">
              <a href={clientLink} className="card-btn" target="_blank" rel="noreferrer">
                Client Side
              </a>
            </div>
            <div className="code-btn">
              <a href={serverLink} className="card-btn" target="_blank" rel="noreferrer">
                Server Side
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummaryDetails;