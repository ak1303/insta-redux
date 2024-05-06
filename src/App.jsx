import { createContext, useState } from "react"
import store from "./redux/store";
import { Provider } from "react-redux";
import LoginWrapper from "./components/auth/LoginWrapper";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/notfound/NotFound";
import Profile from "./components/profile/Profile";
import Connections from "./components/connections/Connections";

export const AuthContext = createContext();
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(() => Boolean(localStorage.getItem("token")));
  return (
    <Provider store={store}>
      <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
        <LoginWrapper>
           <BrowserRouter>
            <Routes>
              <Route path="" element={<Profile/>}/>
              <Route path="/connections/:tabId" element={<Connections/>}/>
              <Route path="*" element={<NotFound/>}/>
            </Routes>
          </BrowserRouter> 
        </LoginWrapper>
      </AuthContext.Provider>
    </Provider>
  )
}

export default App
