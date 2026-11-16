const UserProfile = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

UserProfile.Image = () => {
  return (
    <img src="https://via.placeholder.com/150" alt="Profile"/>
  );
};

UserProfile.Name = () => {
  return <h2>Hari</h2>;
};

UserProfile.Email = () => {
  return <p>hari@example.com</p>;
};

UserProfile.Location = () => {
  return <p>Chennai, Tamil Nadu</p>;
};

export default UserProfile;
