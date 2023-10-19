import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import "../../Firebase/firebase";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import api from "../../Api";
import axios from "axios";

export default function Signin() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [signupVisible, setSignupVisible] = useState(false);

  const userDataString = localStorage.getItem("userData");
  const userData = userDataString ? JSON.parse(userDataString) : {};
  const Token = userData.accessToken;

  useEffect(() => {
    if (Token) {
      navigate("/");
    }
  }, [Token, navigate]);

  const handleCkeckUser = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    console.log("handleLogin function called");
    console.log(email);
    try {
      const response = await axios.post(
        api.checkUSer,
        {
          email,
        },
        {
          headers: {
            api_key: api.key,
            authantication: api.authantication,
          },
        }
      );

      console.log("Login response:", response);
      const data = response.data;

      if (data.success === true) {
        setPasswordVisible(true);
      } else {
        console.log("No users");
      }
    } catch (error) {
      setSignupVisible(true);
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    console.log("handleLogin function called");
    console.log(email, password);
    try {
      const response = await axios.post(
        api.login,
        {
          email,
          password,
        },
        {
          headers: {
            api_key: api.key,
            authantication: api.authantication,
          },
          body: JSON.stringify({ email, password }),
        }
      );

      console.log("Login response:", response);

      const accessToken = response.data.accessToken;
      const data = response.data;

      if (accessToken) {
        localStorage.setItem("userData", JSON.stringify(data));
        navigate("/");
      } else {
        console.error("Login failed with access token");
      }
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    console.log("handleLogin function called");
    console.log(email, signupPassword, firstName, lastName);
    try {
      const response = await axios.post(
        api.signup,
        {
          firstname: firstName,
          lastname: lastName,
          email,
          password: signupPassword,
        },
        {
          headers: {
            api_key: api.key,
            authantication: api.authantication,
          },
          body: JSON.stringify({ email, password }),
        }
      );

      console.log("sugnup response:", response);

      const accessToken = response.data.accessToken;
      const data = response.data;

      if (accessToken) {
        localStorage.setItem("userData", JSON.stringify(data));
        navigate("/");
      } else {
        console.error("signup failed with access token");
      }
    } catch (error) {
      console.error("signup failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((userCred) => {
        console.log(userCred);
        axios
          .post(
            api.googleAuth,
            {
              IdToken: userCred._tokenResponse.idToken,
              firstname: userCred._tokenResponse.firstName,
              lastname: userCred._tokenResponse.lastName,
              profileImage: userCred._tokenResponse.photoUrl,
            },
            {
              headers: {
                api_key: api.key,
                authantication: api.authantication,
              },
            }
          )
          .then((response) => {
            localStorage.setItem("userData", JSON.stringify(response.data));
            console.log(response);
            navigate("/");
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      })
      .catch((error) => {
        if (error.code === "auth/cancelled-popup-request") {
          // User cancelled the login request
          console.log("Google login request was cancelled.");
        } else {
          // Handle other errors
          console.error("Error signing in with Google:", error);
        }
      });
  };

  return (
    <div className="text-black flex justify-center items-center h-screen">
      <div
        onClick={() => navigate("/")}
        className="flex items-center space-x-2 absolute top-4 left-4 cursor-pointer"
      >
        <BiArrowBack className="text-header" />
        <p> Go Back</p>
      </div>
      <div className="w-full max-w-login px-4">
        <div className="space-y-4">
          <p className="text-title2 font-bold pb-6">
            Sign in or create an account
          </p>

          {signupVisible ? (
            <div className="space-y-2">
              <div className="space-y-2">
                <div className="w-full space-y-2">
                  <p>Email Address</p>
                  <input
                    type="email"
                    placeholder="Enter your Email Address"
                    className="border border-black/[.50] rounded-default p-2 w-full outline-none"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="flex space-x-2 w-full">
                  <div className="w-full space-y-2">
                    <p>First Name</p>
                    <input
                      type="text"
                      placeholder="Enter your First Name"
                      className="border border-black/[.50] rounded-default p-2 w-full outline-none"
                      onChange={(e) => setFirstName(e.target.value)}
                      value={firstName}
                    />
                  </div>
                  <div className="w-full space-y-2">
                    <p>Last Name</p>
                    <input
                      type="text"
                      placeholder="Enter your Last Name"
                      className="border border-black/[.50] rounded-default p-2 w-full outline-none"
                      onChange={(e) => setLastName(e.target.value)}
                      value={lastName}
                    />
                  </div>
                </div>
                <div className="w-full space-y-2">
                  <p>Password</p>
                  <input
                    type="password"
                    placeholder="Enter your Password"
                    className="border border-black/[.50] rounded-default p-2 w-full outline-none"
                    onChange={(e) => setSignupPassword(e.target.value)}
                    value={signupPassword}
                  />
                </div>
              </div>
              <div>
                <button
                  onClick={handleSignUp}
                  disabled={isLoading}
                  className="bg-primary text-white w-full p-3 rounded-default text-subtitle3"
                >
                  {isLoading ? "Loading..." : "SignUp"}
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="space-y-2">
                <p>Email address</p>
                <div>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="border border-black/[.50] rounded-default p-2 w-full outline-none"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                {passwordVisible ? (
                  <div className="space-y-2">
                    <p>Password</p>
                    <div>
                      <input
                        type="password"
                        placeholder="Enter your password"
                        className="border border-black/[.50] rounded-default p-2 w-full outline-none"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                      />
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
              {passwordVisible ? (
                <div>
                  <button
                    onClick={handleLogin}
                    disabled={isLoading}
                    className="bg-primary text-white w-full p-3 rounded-default text-subtitle3"
                  >
                    {isLoading ? "Loading..." : "Login"}
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    onClick={handleCkeckUser}
                    disabled={isLoading}
                    className="bg-primary text-white w-full p-3 rounded-default text-subtitle3"
                  >
                    {isLoading ? "Loading..." : "Continue with email"}
                  </button>
                </div>
              )}
            </div>
          )}

          <div className="flex justify-center items-center">
            <div className="h-[1px] bg-black/[.10] w-full"></div>
            <p className="w-[650px] text-center px-2 text-black/[.70]">
              or continue with Google
            </p>
            <div className="h-[1px] bg-black/[.10] w-full"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <div
              className="border p-4 rounded-default"
              onClick={loginWithGoogle}
            >
              <FcGoogle className="text-[2rem]" />
            </div>
          </div>
          <div className="h-[1px] bg-black/[.10] w-full"></div>
          <div>
            <p className="text-center text-subtitle2 text-black/[.70]">
              By signing in or creating an account, you agree with our Terms &
              Conditions and Privacy Statement
            </p>
          </div>
          <div className="h-[1px] bg-black/[.10] w-full"></div>
          <div>
            <p className="text-center text-subtitle2 text-black/[.70]">
              All rights reserved.
              <br /> Copyright 2023 A Booking App
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
