import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RegisterView } from "./views/RegisterView";
import { AuthProvider } from "./context/AuthContext";
import { LoginView } from "./views/LoginView";
import { InvestmentView } from "./views/InvestmentView";
import { ProtectedRoute } from "./Route";
import { InvestmentProvider } from "./context/InvestmentContext";
import { InvestmentsView } from "./views/InvestmentsView";
import { Navbar } from "./components/Navbar";
import { PrincipalView } from "./views/PrincipalView";

export const App = () => {
  return (
    <AuthProvider>
      <InvestmentProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<LoginView />} />
            <Route path="/register" element={<RegisterView />} />
            <Route element={<ProtectedRoute />} >
              <Route path="/opportunities" element={<InvestmentsView />} />
              <Route path="/investment" element={<InvestmentView />} />
              <Route path="/Home" element={<PrincipalView/>} />
              <Route path="/investment/:id" element={<h1>Update Investment</h1>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </InvestmentProvider>
    </AuthProvider >
  )
}
