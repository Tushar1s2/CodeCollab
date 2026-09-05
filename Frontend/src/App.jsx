import { Landing, Layout, Signup,SetupPassword,Dashboard } from "./Components/index"
import { Routes, Route} from "react-router-dom"



function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="signup" element={<Signup />} />
          <Route path="setup-password" element={<SetupPassword/>} />
          <Route path="dashboard"element={<Dashboard/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
