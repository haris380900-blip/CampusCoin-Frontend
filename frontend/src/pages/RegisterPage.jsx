import { motion } from "motion/react";
const RegisterPage = () => <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}><h1 className="text-3xl font-bold">Create account</h1><p className="mt-3 text-slate-600">The form layer is ready for React Hook Form, Zod, and password-strength validation.</p></motion.section>;
export default RegisterPage;
