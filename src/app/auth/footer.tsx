import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-6 space-y-4 text-sm text-gray-400">
   
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="h-4 w-4 rounded accent-red-600"
          />
          <span>Remember me</span>
        </label>

        <Link href="#" className="hover:underline">
          Forgot password?
        </Link>
      </div>

 
      <p className="text-center">
        New to <span className="font-semibold text-white">Codeflix</span>?{" "}
        <Link href="/auth/register" className="text-white hover:underline">
          Sign up now
        </Link>
      </p>
    </footer>
  );
}
