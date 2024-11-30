import { ChangeEvent, FormEvent, useState } from "react";

const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(loginFormData);
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
        <button>Log in</button>
      </form>
    </div>
  );
};

export default Login;
