function Login() {
  return (
    <>
      <h1 className="text-center font-bold text-5xl">
        Clam-Pasco Dental Clinic
      </h1>
      <h2>Login</h2>
      <h3>ADMIN ACCESS ONLY</h3>

      <input type="text" placeholder="Username" />
      <input type="text" placeholder="Password" />

      <button>Log in</button>
    </>
  );
}

export default Login;
