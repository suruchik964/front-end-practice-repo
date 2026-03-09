import { Link } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";

export default function SignupPage() {
  return (
    <div className="flex p-4 min-h-screen">
      {/* LEFT SIDE */}
      <div className="w-1/2 flex flex-col justify-center items-center p-10">
        <h1 className="text-4xl font-bold mb-2">Create your account</h1>

        <p className="text-gray-500 mb-6">
          Start organizing your work and boosting productivity
        </p>

        <input
          type="text"
          placeholder="Full Name"
          className="border p-3 rounded-full w-105 mb-4"
        />

        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-full w-105 mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-full w-105 mb-4"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="border p-3 rounded-full w-105 mb-4"
        />

        <button className="bg-black text-white w-105 p-3 rounded-full">
          Sign Up
        </button>

        <p className="mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/" className="text-green-600">
            Login
          </Link>
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/2 bg-green-100 flex items-center justify-center border-l-8 border-white">
        <div className="w-125 h-125 flex items-center justify-center">
          <ImageSlider />
        </div>
      </div>
    </div>
  );
}
