import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:8080/auth/google";
  };

  const handleGithubLogin = () => {
    window.location.href = "http://localhost:8080/auth/github";
  };

  return (
    <div className="min-h-screen bg-[#08090D] text-[#F5F5F5]">

      <div className="flex min-h-screen flex-col items-center px-4 pt-10">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-code text-3xl text-[#7C3AED]"></i>

          <h1 className="text-4xl font-semibold tracking-tight">
            Code<span className="text-[#7C3AED]">Collab</span>
          </h1>
        </div>


        {/* Heading */}
        <div className="mt-8 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Create your account
          </h2>

          <p className="mt-3 text-sm text-[#A7AAB4] sm:text-base">
            Join CodeCollab and start collaborating
          </p>
        </div>


        {/* OAuth Card */}
        <div className="mt-8 w-full max-w-md rounded-2xl border border-slate-700 bg-[#0F172A] p-6 shadow-xl shadow-black/20">

          <div className="flex flex-col gap-3">

            {/* Google */}
            <button
              onClick={handleGoogleLogin}
              className="
                flex h-12 w-full items-center
                rounded-lg border border-slate-600
                bg-transparent
                text-sm font-medium text-slate-100
                transition-all duration-200
                hover:border-[#7C3AED]
                hover:bg-[#7C3AED]/10
                active:scale-[0.99]
              "
            >
              <span className="flex w-14 items-center justify-center">
                <i className="fa-brands fa-google text-lg"></i>
              </span>

              <span className="flex-1 pr-14 text-center">
                Continue with Google
              </span>
            </button>


            {/* GitHub */}
            <button
              onClick={handleGithubLogin}
              className="
                flex h-12 w-full items-center
                rounded-lg border border-slate-600
                bg-transparent
                text-sm font-medium text-slate-100
                transition-all duration-200
                hover:border-[#7C3AED]
                hover:bg-[#7C3AED]/10
                active:scale-[0.99]
              "
            >
              <span className="flex w-14 items-center justify-center">
                <i className="fa-brands fa-github text-lg"></i>
              </span>

              <span className="flex-1 pr-14 text-center">
                Continue with GitHub
              </span>
            </button>

          </div>


          {/* Login */}
          <div className="mt-5 flex justify-center text-sm text-[#A7AAB4]">
            <p>
              Have an account?{" "}
              <Link
                className="
                  font-medium text-[#7C3AED]
                  transition-colors
                  hover:text-[#6D28D9]
                "
                to="/login"
              >
                Login
              </Link>
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Signup;