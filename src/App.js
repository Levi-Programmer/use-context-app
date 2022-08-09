//Components

import Profile from "./components/Profile";
import UserList from "./components/UserList";

//Context
import UserState from "./context/User/userState";

function App() {
  return (
  
      <UserState>
        <div>
        <Profile/>
        </div>

        <div> 
          <UserList/> 
        </div>
        
      </UserState>
  );
}

export default App;
