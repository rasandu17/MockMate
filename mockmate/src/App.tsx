import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PublicLayout } from "./layouts/publiclayout";
import HomePage from "./routes/home";
import Authentication from "./layouts/auth-layout";
import { Signin } from "./layouts/sign-in";
import { Signup } from "./layouts/sign-up";
import ProtectedRoutes from "./layouts/protected-routes";
import { MainLayout } from "./layouts/main-layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
        </Route>

        <Route element={<Authentication />}>
          <Route path="/signin/*" element={<Signin/>} />
          <Route path="/signup/*" element={<Signup/>} />
        </Route>

        <Route element={<ProtectedRoutes><MainLayout/></ProtectedRoutes>}></Route>

      </Routes>
    </Router>
  )
}

export default App 