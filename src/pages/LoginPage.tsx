import { Link } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";

export default function LoginPage() {
  return (
    <div className="flex p-4 min-h-screen">
      {/* LEFT SIDE */}
      <div className="w-1/2 flex flex-col justify-center items-center p-10">
        <h1 className="text-4xl font-bold mb-2">Welcome back!</h1>
        <p className="text-gray-500 mb-6">
          Simplify your workflow and boost productivity
        </p>

        <input
          type="text"
          placeholder="Username"
          className="border p-3 rounded-full w-105 mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-full w-105 mb-4"
        />

        <button className="bg-black text-white w-105 p-3 rounded-full">
          Login
        </button>

        <p className="mt-4 text-sm">
          Not a member?{" "}
          <Link to="/signup" className="text-green-600">
            Register now
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
