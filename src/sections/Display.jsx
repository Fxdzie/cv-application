function Display({personal,education,experience}){
    return(
        <section className="display">
            <div className="personal-container">
                <div className="name">{personal.name}</div>
                <div className="about">
                    {personal.summary}
                </div>
            </div>
            <div className="contact-container">
                <div className="title">
                    <h3>Contact Details</h3>
                </div>
                <div className="gen-info">
                    <p>Email: {personal.email}</p>
                    <p>Phone: {personal.number}</p>
                </div>
            </div>
            <div className="edu-container">
                <div className="title">
                    <h3>Education</h3>
                </div>
                <div className="edu-info">
                    <p>Degree: {education.degree}</p>
                    <p>Uni: {education.uni}</p>
                    <p>Graduation Date: {education.studyDate}</p>
                </div>
            </div>
            <div className="exp-container">
                <div className="title">
                    <h3>Experience</h3>
                </div>
                <div className="exp-info">
                    <p>Company: {experience.company}</p>
                    <p>Position: {experience.position}</p>
                    <p>Main responsibilities: {experience.responsibilities}</p>
                    <p>Duration: {experience.startDate} to {experience.endDate}</p>
                </div>
            </div>

        </section>
    );
}

export default Display;