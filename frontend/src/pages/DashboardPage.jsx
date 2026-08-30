import { motion } from "motion/react";
const DashboardPage = () => <motion.section initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}><h1 className="text-3xl font-bold">Dashboard</h1><div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{["Analytics", "Activity", "Tasks"].map((item) => <article key={item} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"><h2 className="font-semibold">{item}</h2><p className="mt-2 text-sm text-slate-600">Feature-ready dashboard card.</p></article>)}</div></motion.section>;
export default DashboardPage;
