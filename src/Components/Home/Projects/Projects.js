import React, { useEffect, useState } from 'react';

import ProjectSummaryDetails from '../ProjectSummaryDetails/ProjectSummaryDetails';

const Projects = () => {
    // const [projectsData,setProjectsData]=useState([])
    // useEffect(()=>{
    //     fetch('project.json')
    //     .then(res=>res.json())
    //     .then(data=>setProjectsData(data))
    // },[])
    const projectsData = [
        {
            id: '1',
            image: "https://i.ibb.co/87B7Zq1/bicycle-parts.png",
            title: "BiCycle Parts Website",
            description:
                "The user gets service, to give review also see specific order.Includes login system.This website controlled by an admin who can make any other account admin.",
            liveLink: "https://manufacture-store.web.app/.",
            clientLink: "https://github.com/akila-niasa/BiCycleParts-client",
            serverLink: "https://github.com/akila-niasa/ByCicleParts-server-side",
            tags: "reactjs,express js,react-router,tailwind,firebase-auth,mongoDB,react-hook form"
        },
        {
            id: '2',
            image: "https://i.ibb.co/x2ps5bR/car-repair.png",
            title: "Car Repair Website",
            description:
                "The user gets service, to give review also see specific order.Includes login system.This website controlled by an admin who can make any other account admin.",
            liveLink: "https://car-repair-250f8.web.app/.",
            clientLink: "https://github.com/akila-niasa/CaR-RePair-client",
            serverLink: "https://github.com/akila-niasa/car-repair-server",
            tags: "reactjs,bootstrap,react-router,firebase-auth,mongodb,react-hook form"
        },
        {
            id: '3',
            image: "https://i.ibb.co/cDVZJvw/laptop-store.png",
            title: "Laptop Store Website",
            description:
                "This website is one kind of laptop warehouse website. After login  user can deliver product and also update product's quantity.",
            liveLink: "https://warehouse-management-2d317.web.app.",
            clientLink: "https://github.com/akila-niasa/WareHouse-client-side",
            serverLink: "https://github.com/akila-niasa/warehouse-server",
            tags: "bootstrap,reactjs,react-router,firebase-auth,"
        },{
            id: '4',
            image: "https://i.ibb.co/Kbx4fpq/book-store.png",
            title: "Book Store Website",
            description:
                "This website is one kind of book shopping website.Customer order books from home page and checkout. Admin manages books and adds books.Includes google login systems",
            clientLink: "https://github.com/akila-niasa/CaR-RePair-client",
            serverLink: "https://github.com/akila-niasa/car-repair-server",
            tags: "bootstrap,reactjs,react-router,firebase-auth,mongodb,react-hook form"
        },
        {
            id: '5',
            image: "https://i.ibb.co/RpGfsnZ/wedding.png",
            title: "Wedding Photographer Website",
            description:
                "This website is one kind of photographer website.After login user can get service from this site.",
            clientLink: "https://github.com/akila-niasa/wedding-photographer",
            tags: "bootstrap,reactjs,react-router,firebase-auth"
        },


    ];
    return (
        <section className="section-projectSummary section">
            <div className="container">
                <h2 className="page-heading data-show">Projects</h2>
                <div className="row">
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        {projectsData.map((proData) => (
                            <ProjectSummaryDetails key={proData.id} proData={proData}></ProjectSummaryDetails>
                        ))}

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Projects;