"use client";
import { authClient } from "@/app/libs/auth-client";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="broder-2 bg-white p-4 rounded-md flex flex-col items-center justify-center">
        <h1 className="text-xl font-bold text-black ">Welcome to Nottee</h1>
        <form
          action=""
          className="flex flex-col items-center justify-center bg-white p-4 rounded-md mt-4 shadow-lg"
        >
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="border-2 rounded-md p-2 mt-4"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="border-2 rounded-md p-2 mt-4"
          />
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-black text-white rounded-md"
          >
            Sign in
          </button>
        </form>
        <div className="flex text-black justify-center items-center gap-3 mt-4">
          <p className="">Don&apos;t have an account?</p>
          <button
            onClick={() =>
              authClient.signUp.email({
                email: "example@example.com",
                name: "Example Name",
                password: "examplePassword",
              })
            }
            className=" text-blue-500 "
          >
            Sign up
          </button>
        </div>
        <div className="flex  items-center justify-center mt-4 w-full gap-4">
          <hr className="border border-gray-500 w-full" />{" "}
          <p className=" text-black">or</p>{" "}
          <hr className="border border-gray-500 w-full" />
        </div>
        <button
          onClick={() => authClient.signIn.social({ provider: "github" })}
          className="mt-4 px-4 py-2 bg-black text-white rounded-md flex items-center"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.607.069-.607 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.91-1.294 2.75-1.025 2.75-1.025.544 1.376.202 2.393.1 2.646.64.698 1.028 1.591 1.028 2.682 0 3.842-2.337 4.687-4.565 4.935.36.31.68.92.68 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.135 20.165 22 16.418 22 12c0-5.523-4.477-10-10-10z"
              clipRule="evenodd"
            />
          </svg>
          Sign in with GitHub
        </button>
        <button
          onClick={() => authClient.signIn.social({ provider: "google" })}
          className="mt-4 px-4 py-2 bg-black text-white rounded-md flex items-center"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21.35 11.1h-9.36v2.92h5.44c-.24 1.24-.96 2.28-1.92 2.96v2.46h3.08c1.8-1.64 2.84-4.08 2.84-6.88 0-.64-.06-1.26-.16-1.86z" />
            <path d="M12 22c2.4 0 4.42-.8 5.9-2.16l-3.08-2.46c-.84.56-1.88.9-2.82.9-2.16 0-3.98-1.46-4.64-3.42h-3.1v2.14c1.48 2.92 4.52 4.98 8.74 4.98z" />
            <path d="M7.36 13.86c-.2-.64-.32-1.32-.32-2.02s.12-1.38.32-2.02v-2.14h-3.1c-.62 1.24-.98 2.64-.98 4.16s.36 2.92.98 4.16l3.1-2.14z" />
            <path d="M12 6.8c1.3 0 2.46.44 3.38 1.3l2.52-2.52c-1.48-1.38-3.5-2.24-5.9-2.24-4.22 0-7.26 2.06-8.74 4.98l3.1 2.14c.66-1.96 2.48-3.42 4.64-3.42z" />
          </svg>
          Continue with Google
        </button>
      </div>
    </div>
  );
}
