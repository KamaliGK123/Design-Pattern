//import Container from './components/container'
//import Counter from "./components/counter";
import UserProfile from "./components/userProfile"

const App = () => {
  return (
    <div>
     <UserProfile>
      <UserProfile.Image />
      <UserProfile.Name />
      <UserProfile.Email />
      <UserProfile.Location />
    </UserProfile>
    </div>
  )
}

export default App