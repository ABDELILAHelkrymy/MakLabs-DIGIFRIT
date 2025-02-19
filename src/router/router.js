import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";

// direct pages routes
import PrivatePolicy from "../pages/PrivatePolicy";
import SuccesPage from "../pages/SuccesPage";
import ErrorPage from "../pages/ErrorPage";

// components routes
import ProviderCallback from "../components/ProviderCallback";
import FacebookCallback from "../components/FacebookCallback";

// auth routes
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import FrogotPassword from "../pages/auth/FrogotPassword";
import Logout from "../pages/auth/Logout";

// garage routes
import GarageMain from "../pages/garage/GarageMain";
import TruckDetails from "../pages/garage/TruckDetails";
import TruckMaintenances from "../pages/garage/TruckMaintenances";
import TruckAttachments from "../pages/garage/TruckAttachments";
import TruckTrips from "../pages/garage/TruckTrips";
import CarbonBalance from "../pages/garage/CarbonBalance";
import TruckMaintenanceDetail from "../pages/garage/TruckMaintenanceDetail";
import TruckMaintenanceNew from "../pages/garage/TruckMaintenanceNew";
import TruckMaintenanceUpdate from "../pages/garage/TruckMaintenanceUpdate";
import TruckNew from "../pages/garage/TruckNew";
import TruckUpdate from "../pages/garage/TruckUpdate";
// trips routes
import PilotageTrajet from "../pages/trips/PilotageTrajet";
import NotificationTrajet from "../pages/trips/NotificationTrajet";
import RetourTrajet from "../pages/trips/RetourTrajet";
import RetourTrajetDispo from "../pages/trips/RetourTrajetDispo";
import TripDetailPage from "../pages/trips/TripDetailPage";
import TripsPage from "../pages/trips/TripsPage";
import AddTrip from "../pages/trips/AddTrip";
import PrivacyPage from "../pages/privacyPage";

// upload route
import UploadPage from "../pages/UploadPage";

// client routes
import Client from "../pages/client/Client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "trajets", element: <TripsPage /> },
      { path: "garage", element: <GarageMain /> },
      { path: "sign-in", element: <SignIn /> },
      { path: "sign-up/:step", element: <SignUp /> },
      { path: "logout", element: <Logout /> },
      { path: "forgotpassword", element: <FrogotPassword /> },
      { path: "trajet-detail", element: <TripDetailPage /> },
      { path: "garage-detail/:id", element: <TruckDetails /> },
      { path: "entretien-garage/:id", element: <TruckMaintenances /> },
      { path: "documents-garage/:id", element: <TruckAttachments /> },
      { path: "trajets-garage/:id", element: <TruckTrips /> },
      { path: "bilan-carbone-garage/:id", element: <CarbonBalance /> },
      {
        path: "entretien-garage-detail/:id",
        element: <TruckMaintenanceDetail />,
      },
      { path: "/auth/google/callback", element: <ProviderCallback /> },
      { path: "/auth/facebook/callback", element: <FacebookCallback /> },
      { path: "/private-policy", element: <PrivatePolicy /> },
      { path: "/success", element: <SuccesPage /> },
      { path: "client", element: <Client /> },
      {
        path: "nouvelle-tache-entretien/:id",
        element: <TruckMaintenanceNew />,
      },
      {
        path: "modifier-tache-entretien/:id",
        element: <TruckMaintenanceUpdate />,
      },
      { path: "nouveau-camion", element: <TruckNew /> },
      { path: "pilotage-trajet", element: <PilotageTrajet /> },
      { path: "notification-trajet", element: <NotificationTrajet /> },
      { path: "update-truck", element: <TruckUpdate /> },
      { path: "retour-trajet", element: <RetourTrajet /> },
      { path: "retour-dispo", element: <RetourTrajetDispo /> },
      { path: "add-trip", element: <AddTrip /> },
      { path: "upload", element: <UploadPage /> },
      { path: "privacy", element: <PrivacyPage /> },
    ],
  },
]);

export default router;

