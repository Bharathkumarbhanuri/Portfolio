import React from 'react'
import ProjectCard from './ProjectCard'

function Project() {
    const projects= [
        {
            title:"ToDo",
            image:"/todo.jpg",
            github:"https://github.com/Bharathkumarbhanuri/TodoUsingReduxTK.git",
            live:"https://todo-using-redux-tk.vercel.app/",
        },
        {
            title:"React Routing",
            image:"/React-Routing.png",
            github:"https://github.com/Bharathkumarbhanuri/TodoUsingReduxTK.git",
            live:"https://learning-react-routing-topaz.vercel.app/",
        },
        {
            title:"Sabari Studios",
            image:"/sabari.png",
            github:"https://github.com/Bharathkumarbhanuri/TodoUsingReduxTK.git",
            live:"https://website-in5umhdjo-bharaths-projects-042d3bc5.vercel.app/",
        },
        {
            title:"Password Generator",
            image:"/PasswordGenerator.png",
            github:"https://github.com/Bharathkumarbhanuri/TodoUsingReduxTK.git",
            live:"https://password-generator-tmy5.vercel.app/",
        },
        {
            title:"ToDo",
            image:"/todo.jpg",
            github:"https://github.com/Bharathkumarbhanuri/TodoUsingReduxTK.git",
            live:"https://todo-using-redux-tk.vercel.app/",
        },
        {
            title:"ToDo",
            image:"/todo.jpg",
            github:"https://github.com/Bharathkumarbhanuri/TodoUsingReduxTK.git",
            live:"https://todo-using-redux-tk.vercel.app/",
        },
    ];

    return (
        <div>
            <h1 className=' text-3xl md:text-5xl text-lime-500 text-center mb-8'>My Projects</h1>
            <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                { projects.map((project,index)=>(
                    <ProjectCard key={index} {...project}/>
                ))  
                }
            </div>
        </div>
    )
}

export default Project
