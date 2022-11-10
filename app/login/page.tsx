export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 -mt-36">
      <div className="flex flex-col items-center justify-center p-4 shadow-lg w-96 ">
        <h1 className="mb-4 text-4xl font-bold">Login</h1>
        <p className="mb-2 text-center text-md ">
          {"Don't have an account? No problem."}
        </p>
        <p className="mb-4 text-center text-md">
          {"We'll create one for you and send you a link to access it."}
        </p>
        <form className="flex flex-col items-center justify-center w-full space-y-4">
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="email"
            placeholder="Email"
          />
          <button className="w-full p-2 text-white rounded bg-violet-600">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
