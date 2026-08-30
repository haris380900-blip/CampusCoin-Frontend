import { motion } from "motion/react";
const LoginPage = () => <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}><h1 className="text-3xl font-bold">Sign in</h1><p className="mt-3 text-slate-600">Authentication UI will be added with the project requirements.</p></motion.section>;
export default LoginPage;
