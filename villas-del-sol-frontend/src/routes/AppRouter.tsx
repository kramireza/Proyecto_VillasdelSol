import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import DashboardPage from "../pages/dashboard/DashboardPage";
import ResidentsPage from "../pages/residents/ResidentsPage";
import PropertiesPage from "../pages/properties/PropertiesPage";
import CardsPage from "../pages/cards/CardsPage";
import PaymentsPage from "../pages/payments/PaymentsPage";
import AccessPage from "../pages/access/AccessPage";
import VisitorsPage from "../pages/visitors/VisitorsPage";
import SurveillancePage from "../pages/surveillance/SurveillancePage";
import SecurityPage from "../pages/security/SecurityPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<DashboardPage />}
        />

        <Route
          path="/residents"
          element={<ResidentsPage />}
        />

        <Route
          path="/properties"
          element={<PropertiesPage />}
        />

        <Route
          path="/cards"
          element={<CardsPage />}
        />

        <Route
          path="/payments"
          element={<PaymentsPage />}
        />

        <Route
          path="/access"
          element={<AccessPage />}
        />

        <Route
          path="/visitors"
          element={<VisitorsPage />}
        />

        <Route
          path="/surveillance"
          element={<SurveillancePage />}
        />

        <Route
          path="/security"
          element={<SecurityPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}