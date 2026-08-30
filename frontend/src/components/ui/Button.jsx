import { cn } from "../../lib/utils";

function Button({ className, type = "button", ...props }) {
  return <button type={type} className={cn("inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", className)} {...props} />;
}

export default Button;
