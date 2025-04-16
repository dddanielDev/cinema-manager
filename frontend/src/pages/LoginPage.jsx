import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLoginMutation } from "../features/login/loginApi";

const LoginPage = () => {
  const [pin, setPin] = useState("");
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(pin).unwrap();
      navigate("/");
      toast.success("Successfully logged in!");
    } catch {
      toast.error("Invalid PIN");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center text-indigo-700 mb-8">
            Cinema Manager
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="pin" className="text-gray-700 font-medium">
                Pin
              </label>
              <input
                id="pin"
                type="password"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your PIN"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-indigo-700 text-white py-3 px-4 rounded-lg hover:bg-indigo-600 transition mt-4"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
