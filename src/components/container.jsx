import StudentProfile from "./studentProfile"

const container = () => {
  const Student = {
    Name: "Hari",
    RegisterNumber: 20024,
    Department: "CSE",
    Year: 3,
    Email: "example@gmail.com",
    CollegeName: "SSM Institute of Engineering",
  }

  return (
    <>
      <StudentProfile Student={Student} />
    </>
  )
}

export default container