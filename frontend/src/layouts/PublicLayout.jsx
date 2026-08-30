import { Link, NavLink, Outlet } from "react-router-dom";
import { Menu } from "lucide-react";

const navItems = [{ label: "Home", to: "/" }, { label: "Dashboard", to: "/dashboard" }, { label: "Profile", to: "/profile" }];

function PublicLayout() {
  return <div className="min-h-screen bg-slate-50"><header className="border-b border-slate-200 bg-white"><nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"><Link to="/" className="text-lg font-bold tracking-tight text-slate-900">TechWiz</Link><div className="hidden items-center gap-5 sm:flex">{navItems.map((item) => <NavLink key={item.to} to={item.to} className={({ isActive }) => `text-sm font-medium ${isActive ? "text-indigo-600" : "text-slate-600 hover:text-slate-900"}`}>{item.label}</NavLink>)}<Link to="/login" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">Sign in</Link></div><Menu className="h-5 w-5 text-slate-700 sm:hidden" aria-label="Open navigation" /></nav></header><main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8"><Outlet /></main></div>;
}

export default PublicLayout;
