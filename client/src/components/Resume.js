import React, { Component } from 'react';
export default class Resume extends Component {
  constructor() {
    super();
    this.state = { open: false };
  }
  toggle() {
    this.setState({
      open: !this.state.open
    });
  }
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            {
              resumeData.education && resumeData.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                      <p>
                        {item.Achievements}
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            {
              resumeData.work && resumeData.work.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                      <p>
                        {item.Achievements.map((achievements) => {
                          return (
                            <div>
                              <p>{achievements}</p>
                            </div>
                          )
                        })}
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>
              {resumeData.skillsDescription}
            </p>
            <div className="bars">
              <ul className="skills">
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return (
                      <li>
                        <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                        </span><em>{item.skillname}</em>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
          <div className="nine columns main-col">
            <div className="allSkillsList">
              <button className="btn btn-block" onClick={this.toggle.bind(this)}>
                {this.state.open ? "Hide All Skills" : "Show All Skills"}
              </button>
              <div className={"collapse" + (this.state.open ? ' in' : '')}>
                <div>
                  {
                    resumeData.allSkills.map((skill) => {
                      return (
                        <div>
                          <ul className="allSkillsCategories">
                            {skill.category}
                          </ul>
                          {
                            skill.skills.map((item) => {
                              return (
                                <li>
                                  {item}
                                </li>
                              )
                            })
                          }
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}