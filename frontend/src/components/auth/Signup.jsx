import { Link } from "react-router-dom";
import Logo from "../logo/Logo";

function Signup() {

  return (
    <div className="flex min-h-screen">

      {/* Left side */}
      <div className="hidden w-2/3 bg-gradient-to-br from-indigo-600 via-violet-600 to-indigo-800 p-12 lg:flex lg:flex-col lg:justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center rounded-xl bg-transparent text-lg font-bold">
            <Logo color={"white"} AIcolor={"white"} />
          </div>
        </Link>

        {/* Text */}
        <div className="max-w-lg">

          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-indigo-200">
            AI-powered desktop assistant
          </p>

          <h1 className="text-4xl font-bold leading-tight text-white xl:text-5xl">
            Your AI
            <br />
            Right on your desktop.
          </h1>

          <p className="mt-6 text-lg leading-8 text-indigo-100">
            Automate tasks, control your computer, work with documents, and get things done with Pocket AI.
          </p>

        </div>

        {/* Bottom */}
        <p className="text-sm text-indigo-200">
          © 2026 PocketAI
        </p>

      </div>

      {/* Right side */}
      <div className="flex w-full items-center justify-center bg-gray-50 px-6 py-12 lg:w-1/3">

        <div className="w-full max-w-md">

          {/* Mobile logo */}
          <Link
            to="/"
            className="mb-10 flex items-center justify-center gap-2 lg:hidden"
          >
            <Logo color={"black"} AIcolor={"[linear-gradient(135deg,#00ffff,#6f3cff,#ff4fd8)]"}/>
          </Link>

          {/* Heading */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Create your account
            </h2>
            <p className="mt-2 text-gray-500">
              Start your work with Pocket AI.
            </p>

          </div>

          {/* Signup Card */}
          <div className="mt-2 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">

            {/* Email */}
            <div className="">
              <label className="text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />

            </div>

            {/* Password */}
            <div className="mt-5">
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Create a password"
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />

            </div>

            {/* Confirm Password */}
            <div className="mt-5">
              <label className="text-sm font-medium text-gray-700">
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="Confirm your password"
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            {/* Create Account */}
            <button
              type="button"
              className="mt-6 w-full rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-3.5 text-sm font-semibold text-white shadow-md shadow-indigo-200 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Create Account
            </button>

            {/* Divider */}
              <div className="my-3 flex items-center gap-4">
                <div className="h-px flex-1 bg-gray-200"></div>
                <span className="text-sm text-gray-400">
                  or
                </span>
                <div className="h-px flex-1 bg-gray-200"></div>

              </div>

            {/* Google */}
              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
              >
                <span className="text-lg font-bold">
                  G
                </span>
                Continue with Google
              </button>
            </div>

          {/* Login */}
          <p className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-indigo-600 hover:text-indigo-700"
            >
              Sign in
            </Link>

          </p>
          {/* Back */}
          <p className="mt-4 text-center">

            <Link
              to="/"
              className="text-sm text-gray-400 hover:text-indigo-600"
            >
              ← Back to home
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Signup;