import React, { useState, useEffect, useContext } from "react"
import { Link, Navigate } from "react-router-dom"
import "./registration.css"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { useForm } from "react-hook-form"
import { AuthContext } from "../../Providers/AuthProviders"
import Swal from "sweetalert2"

function Registration() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm()

const { createUser, updateUserProfile } = useContext(AuthContext)

  const handlesignup = data => {
   
    createUser(data.email, data.password).then(result => {
      const loggedUser = result.user
      console.log(loggedUser)

      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const saveUser = {
            name: data.name,
            email: data.email,
            role: "user",
            password: data.password,
            phone : data.phone
            
          }
          fetch("http://localhost:5000/users/signup", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then(res => res.json())
            .then(data => {
              if (data.insertedId) {
                reset()
                Swal.fire({
                  position: "middle",
                  icon: "success",
                  title: "User created successfully.",
                  showConfirmButton: false,
                  timer: 1500,
                })
                Navigate("/login")
              }
            })
        })
        .catch(error => console.log(error))
    })
  }

  return (
    <>
      <Navbar></Navbar>
      <div>
      <form onSubmit={handleSubmit(handlesignup)}>
        <div className="whole">
          <div className="left">
            <div>
              <p
                style={{
                  display: "flex",
                  color: "white",
                  justifyContent: "center",
                  marginTop: "170px",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Already have an account?
              </p>

              <button
                className="overlay-btn"
                style={{
                  display: "flex",
                  marginLeft: "auto",
                  marginRight: "auto",
                  justifyContent: "center",
                  marginTop: "20px",
                  width: "30%",
                  padding: "10px",
                  border: "1px",
                  borderRadius: "10px",
                  backgroundColor: "white",
                  color: "#570DF8",
                }}
              >
                <Link to={"/login"}>Sign In</Link>
              </button>
            </div>
          </div>

          <div className="right">
            <div>
              <p
                style={{
                  display: "flex",
                  color: "black",
                  justifyContent: "center",
                  marginTop: "30px",
                  fontSize: "25px",
                  fontWeight: "bold",

                  
                }}
              >
                CREATE AN ACCOUNT
              </p>
              <div className="r-underline"></div>

              <div className="reg-container">
                <div className="reg-label">Full Name </div>
                <input
                        type="text"
                        {...register("name")}
                        name="name"
                        placeholder="Full Name"
                        className="reg-field"
                      />
                      {errors.name && (
                        <span className="text-red-600">Name is required</span>
                      )}

                <div className="reg-label">Phone Number </div>
               
                <input
                        type="text"
                        {...register("phone")}
                        name="phone"
                        placeholder="Enter your phone number"
                        className="reg-field"
                      />
                      {errors.phone && (
                        <span className="text-red-600">Phone Number is required</span>
                      )}

                <div className="reg-label">Email</div>
                <input
                  type="text"
                  {...register("email")}
                  name="email"
                  placeholder="Enter your email address"
                  className="reg-field"
                />
                {errors.email && (
                        <span className="text-red-600">Email is required</span>
                      )}

                <div className="reg-label">Password</div>
                <input
                        type="password"
                        id="password"
                        {...register("password", {
                          required: true,
                          minLength: 6,
                          pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                        })}
                        placeholder="password"
                        className="reg-field"
                      />
                      {errors.password?.type === "required" && (
                        <p className="text-red-600">Password is required</p>
                      )}
                      {errors.password?.type === "minLength" && (
                        <p className="text-red-600">
                          Password must be 6 characters
                        </p>
                      )}
                      {errors.password?.type === "pattern" && (
                        <p className="text-red-600">
                          Password must have one Uppercase and one special
                          character.
                        </p>
                      )}
              </div>

              <button
                className="reg-btn"
                style={{
                  display: "flex",
                  marginLeft: "auto",
                  marginRight: "auto",
                  justifyContent: "center",
                  marginTop: "10px",
                  width: "30%",
                  padding: "10px",
                  border: "1px",
                  borderRadius: "10px",
                  backgroundColor: "#4C40ED",
                  color: "white",
                }}
              >
                <button className="text-white text-lg">Create Account</button>
              </button>
            </div>
          </div>
        </div>
        </form>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Registration
