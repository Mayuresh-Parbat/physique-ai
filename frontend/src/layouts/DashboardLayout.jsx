import Sidebar from "../components/Sidebar";

function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <main className="ml-72 min-h-screen p-8">
        {children}
      </main>

    </div>
  );
}

export default DashboardLayout;