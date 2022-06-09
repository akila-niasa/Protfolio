import React from 'react';
import { FaDownload, FaGithubAlt } from 'react-icons/fa';
import './About.css'

const About = () => {
    return (
        <section className="section-projectSummary section">
            <div className="container">
                <div className="page-heading pb-3">
                    <h2 >ABOUT ME</h2>
                </div>
                <div className="row">
                    <div className="col-md-5 image-card">
                        <div className="image">
                            <img
                                src="https://i.ibb.co/ryhhYrS/my-2.jpg"
                                alt=""
                                className="img-fluid img-thumbnail mw-100 p-0 m-0 w-100 h-100 bg-body rounded"
                            />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="about-info">
                            <h2 className="name-heading mb-4">Front-end developer</h2>
                            <p className="my-description">
                                Hello I'm{" "}
                                <span>
                                    <b>ATHQIYA AKILA</b>
                                </span>
                                <p>I am a front-end web developer. I'm student at Mathematics in National University of Bangladesh.As a front end developer, I have develop 2 MERN Stack web app and
                                    many Simple applications to sharp my skills.  I have  knowledge of  <span><b>Javascript, React js, CSS, Bootstrap,Tailwind</b> </span>{" "} and HTML5 and CSS3.</p>

                                {" "}
                            </p>
                        </div>
                        <div className="row pt-3">
                            <div className="col-sm-6">
                                <ul className="about-list">
                                    <li>
                                        <span className="title ">Name:</span>&nbsp;&nbsp;
                                        <span className="value ">Athqiya Akila</span>
                                    </li>

                                    <li>
                                        <span className="title ">phone:</span>&nbsp;&nbsp;
                                        <span className="value ">+8801867705676</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-6">
                                <ul className="about-list">
                                    <li>
                                        <span className="title ">Email:</span>&nbsp;&nbsp;
                                        <span className="value ">athqiyaakila122@gmail.com</span>
                                    </li>
                                    <li>
                                        <span className="title ">Institute:</span>&nbsp;&nbsp;
                                        <span className="value ">National University of Bangladesh</span>
                                    </li>
                                    <li>
                                        <span className="title ">Subject:</span>&nbsp;&nbsp;
                                        <span className="value ">Mathematics</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row pt-3">
                            <div className="col-md-12">
                                <div className="button-div">

                                    <a target="_blank"
                                        rel="noreferrer"
                                        className="brand-btn"
                                        href="https://drive.google.com/file/d/1mYS8uhDWBgLy6C3C7mfgrvnnz5ff7JmF/view?usp=sharing"
                                    >
                                        <FaDownload />
                                        &nbsp;&nbsp; Download Resume
                                    </a>&nbsp;&nbsp;
                                    <a
                                        className="brand-btn"
                                        href="https://github.com/akila-niasa"
                                    >
                                        <FaGithubAlt />
                                        &nbsp;&nbsp; GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;