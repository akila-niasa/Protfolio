import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {projectsData} from '../../data'
const Details = () => {
    const {id}=useParams()
    const [current,setCurrent]=useState([])
    useEffect(()=>{
        const project=projectsData.find(singleProject=>singleProject.id==id)
    setCurrent(project);
    },[id])
    const technologySplit = current?.tags?.split(',')
    const featureSplit = current?.feature?.split(',')
  
    return (
        <section className="section-projectSummary section">
        <div className="container">
        <div className="page-heading pb-3">
                    <h2 className="text-uppercase">{current?.title}</h2>
                </div>
      <div className="row">
       <div className='col-lg-3'>
       <img  src={current?.image} className="card-img w-50 m-3" alt="..." />
        <img src={current?.image2} className="card-img w-50 m-3" alt="..." />
        <img src={current?.image3} className="card-img w-50 m-3" alt="..." />
       </div>
        <div className="col-md-7">
        <h2 className="text-light">Description</h2>
          <p className=""> {current?.description}</p>
          <div className="mt-3">
          <h2 className="text-light">Feature</h2>
            {
              featureSplit?.map(feature => (
                <p>{feature}</p>
              ))
            }
          </div>

          <div className="mt-3">
          <h2 className="text-light">Framework</h2>
            {
              technologySplit?.map(tag => (
                <span  class="badge rounded-pill bg-light text-dark m-2">{tag}</span>
              ))
            }
          </div>
          <div className="link-part d-flex justify-content-around p-3">
            <div className="live-btn">
              <a href={current?.liveLink} className="card-btn" target="_blank" rel="noreferrer">
                Live link
              </a>
            </div>
            <div className="code-btn">
              <a href={current?.clientLink} className="card-btn" target="_blank" rel="noreferrer">
                Client Side
              </a>
            </div>
            {
              current?.serverLink && <>
              <div className="code-btn">
              <a href={current?.serverLink} className="card-btn" target="_blank" rel="noreferrer">
                Server Side
              </a>
            </div>
              </>
            }
           
          </div>
          
        </div>
      </div>
    </div>
    </section>
    );
};

export default Details;