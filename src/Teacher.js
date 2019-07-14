import React, { Component } from 'react';
import './Teacher.css';

class Teacher extends Component {
    render() {
        return (
            <section id="teacher">
                <div class="page-title"><h1>강사 소개</h1></div>
                <div class="content">
                    <h2>Introduction of Admissions Manager JuLia</h2>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/_c6eQMbcuU0" 
                            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen></iframe>
                    <h2>Introduction of Head Teacher and Teachers</h2>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Lw0s9bTg4sU" 
                            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen></iframe>
                </div>
            </section>
        );
    }
}

export default Teacher