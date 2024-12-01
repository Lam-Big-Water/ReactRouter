import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { loginUser } from "../fetch";

export function loader({request}: any) {
  return new URL(request.url).searchParams.get("message");
}


const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState<Error | null>(null);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const message = useLoaderData();

  useEffect(() => {
    loginUser()
    .then(data => setUser(data))
    .catch(err => setError(err))
    .finally(() => setStatus("idle"))
  }, [])

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    console.log(loginFormData, user)

    if (loginFormData.email === user.email && loginFormData.password === user.password) {
      console.log('done')
      setStatus("")
    } else {
      console.log("fail")
      setStatus("idle")
    }
    
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="loginContainer">
      <h1>Sign in to your account</h1>
      {message && <h3 style={{color: "red"}}>{message}</h3>}
      {error && <h3 style={{color: "red"}}>{error.message}</h3>}

      <form onSubmit={handleSubmit} className="loginForm">
        <input
          name="email"
          type="email"
          onChange={handleChange}
          placeholder="Email address"
          value={loginFormData.email}
        />
        <input
          name="password"
          type="password"
          onChange={handleChange}
          placeholder="Password"
          value={loginFormData.password}
        />
        <button disabled={status === "submitting"}>
          {status === "submitting"
            ? "Logging in..."
            : "Log in"
          }
        </button>
      </form>
    </div>
  );
};

export default Login;
