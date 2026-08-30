import { Toaster } from "react-hot-toast";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return <><AppRoutes /><Toaster position="top-right" toastOptions={{ duration: 4000, style: { borderRadius: "0.75rem", background: "#111827", color: "#ffffff" } }} /></>;
}

export default App;
