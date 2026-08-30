import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

function HomePage() {
  return <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="py-12 sm:py-20"><p className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-600">MERN starter</p><h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">A scalable foundation for your next TechWiz project.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">React, Express, MongoDB Atlas, and secure production-minded defaults are ready for your feature requirements.</p><div className="mt-8 flex flex-wrap gap-3"><Link to="/register"><Button>Get started</Button></Link><Link to="/dashboard" className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-white">View dashboard</Link></div></motion.section>;
}

export default HomePage;
