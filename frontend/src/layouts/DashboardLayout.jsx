import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <Sidebar />

      <main className="ml-64 pt-24 p-8">
        {children}
      </main>

    </div>
  );
}

export default DashboardLayout;