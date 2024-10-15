import React from 'react';

const Inforstudent = ({ student }) => {
  return (
    <div>
      <h1>Thông tin sinh viên</h1>
      {student.firstName && <div>First Name: {student.firstName}</div>}
      {student.lastName && <div>Last Name: {student.lastName}</div>}
      {student.email && <div>Email: {student.email}</div>}
      {student.contact && <div>Contact: {student.contact}</div>}
      {student.gender && <div>Gender: {student.gender}</div>}
      {student.subjects && <div>subjects: {student.subjects}</div>}
      {student.url && <div>URL: {student.url}</div>}
      {student.choice && <div>Choice: {student.choice}</div>}
      {student.about && <div>About: {student.about}</div>}
    </div>
  );
};

export default Inforstudent;
