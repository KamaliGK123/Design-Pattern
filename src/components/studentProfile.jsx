const StudentProfile = ({ Student }) => {
  return (
    <>
      <div>
        <h2>Student Details</h2>
        <p>Name: {Student.Name}</p>
        <p>Register Number: {Student.RegisterNumber}</p>
        <p>Department: {Student.Department}</p>
        <p>Year: {Student.Year}</p>
        <p>Email: {Student.Email}</p>
        <p>College Name: {Student.CollegeName}</p>
      </div>
    </>
  );
};

export default StudentProfile;