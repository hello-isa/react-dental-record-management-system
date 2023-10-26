function Login() {
  return (
    <>
      <div className="my-10 text-center ">
        <h1 className="font-bold text-5xl">Clam-Pasco Dental Clinic</h1>
        <div className="bg-cyan-600 h-0.5 my-10 mx-96"></div>
      </div>

      <div className="my-10 space-y-4 text-center">
        <h2 className="text-4xl">Login</h2>
        <h3 className="font-bold">ADMIN ACCESS ONLY</h3>
      </div>

      <div className="flex flex-col items-center">
        <div className="my-5 ">
          <input
            className="rounded-lg border-2 border-cyan-600 h-12 w-96"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="my-5">
          <input
            className="rounded-lg border-2 border-cyan-600 h-12 w-96"
            type="text"
            placeholder="Password"
          />
        </div>
        <div className="my-5">
          <button className="rounded-lg border-2 h-12 w-96 bg-green-400 text-white">
            Log in
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
