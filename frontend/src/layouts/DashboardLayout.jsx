import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <main className="max-w-7xl mx-auto pt-28 px-6">
        {children}
      </main>

    </div>
  );
}

export default DashboardLayout;