import React from 'react';
import './HomeHeader.css'
import { FaGithubAlt,FaLinkedinIn,FaTwitter,FaCloudDownloadAlt } from 'react-icons/fa';

const HomeHeader = () => {
    return (
        <main
        className=" main-div row d-flex align-items-center"
    // style={{ height: "350px" }}
    >
        <div className="social-part d-flex align-items-center pt-5">
            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/akila-niasa">
                        <FaGithubAlt/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/athqiya-akila-30718522a/">
                        <FaLinkedinIn/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/athqiya_akila">
                        <FaTwitter/>
                    </a>
                </li>
            </ul>
        </div>
        <div className="col-md-12 text-center pt-5">
          
            <h3 className="name-heading pt-3">ATHQIYA AKILA</h3>
            <h1 className="banner-heading pb-2">{''}

           
               Fornt-end developer
            </h1>
            
           <a  className="brand-btn" href="https://drive.google.com/file/d/1mYS8uhDWBgLy6C3C7mfgrvnnz5ff7JmF/view?usp=sharing">
               <FaCloudDownloadAlt/>
               Download Resume</a>
           
        </div>
    </main>
    );
};

export default HomeHeader;