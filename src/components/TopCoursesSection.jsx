import React from 'react';

const CourseChip = ({ name }) => (
    <div className="course-chip">
        {name}
    </div>
);

export default function TopCoursesSection() {
    const courses = ["Computer Science", "Business Administration", "Medicine (MBBS)", "Graphic Design", "Mechanical Engineering", "Psychology", "Data Science", "Fashion Technology"];

    return (
        <section className="section section-light">
            <div className="container">
                <div className="section-header">
                    <h2>Popular Courses</h2>
                    <p>Find a course that aligns with your passion and career goals.</p>
                </div>
                <div className="course-chips-container">
                    {courses.map((course, index) => <CourseChip key={index} name={course} />)}
                </div>
            </div>
        </section>
    );
}
