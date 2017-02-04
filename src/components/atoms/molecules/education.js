import React from 'react';

import School from 'atoms/school';

import './education.scss';
export default class Education extends React.Component {
  render() {
    return (
      <div className="education">
        <School from="Aug 07" to="May 11" status="Graduated"
          degree="Bachelor Degree of Electronics & Communication"
          school="AITS, Rajampet" />
        <School from="Jun 05" to="Mar 07" status="Graduated"
          degree="Mathematics, Physics & Chemistry"
          school="Sri Chaitanya, Kadapa" />
        <School from="Jun 04" to="Jun 05" status="Graduated"
          degree="Secondary School Certification"
          school="Vikas High School, Kadapa" />
      </div>
    );
  }
}
