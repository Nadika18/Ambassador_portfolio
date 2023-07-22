import React from "react";

// grid of 4 education cells
// each cell has a title, description, and date
// title is a string
// description is a string
// date is a string
//

const educationList = [
  {
    title: "Bachelors of Computer Engineering",
    description: "Tribhuvan University, Pulchowk Campus",
    date: "2020-2024",
    },
    {
    title: "High School Diploma",
    description: "Trinity H.S.S, Dillibazar",
    date: "2018-2020",
    },
    {
    title: "Secondary School",
    description: "St. Xavier's School, Godavari",
    date: "2008-2018",
    }];

    



const Education = () => {
    return(
        <section className="light" id="education">
            <h2>Education</h2>
            <div className="container">
                {educationList.map((education) => (
                    <div className="box" key={education.title}>
                        <h3>{education.title}</h3>
                        <p>{education.description}</p>
                        <p className="small">{education.date}</p>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Education;