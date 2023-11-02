import React, { useState, useEffect, useContext } from "react"
import { Link, Navigate } from "react-router-dom"
import "./ProviderLogin.css"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import Swal from "sweetalert2"
import { useForm } from "react-hook-form"
import { AuthContext } from "../../Providers/AuthProviders"
const ProviderLogin = () => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
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
            role: "provider",
            password: data.password,
            phone : data.phone,
           location : data.area,
           category : data.category 
          }
          fetch("http://localhost:5000/users/providersignup", {
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
                  title: "Provider created successfully.",
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
        <div className="main1">
          <div className="main2">
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
                SERVICE PROVIDER REGISTRATION
              </p>
              <div className="s-underline"></div>
              <div className="service-reg-container">
                <div className="reg-form">
                  <div className="service-reg-label">Full Name</div>
                  <input
                    type="text"
                    {...register("name")}
                    name="name"
                    placeholder="Enter your Full Name"
                    className="service-reg-field"
                  />
                   {errors.name && (
                        <span className="text-red-600">Name is required</span>
                      )}

                  <div className="service-reg-label">Email</div>
                  <input
                    type="text"
                    {...register("email")}
                    name="email"
                    placeholder="Enter your Email Address"
                    className="service-reg-field"
                  />
                   {errors.email && (
                        <span className="text-red-600">Email is required</span>
                      )}

                  <div className="service-reg-label">
                    Position you are applying for
                  </div>
                  <select {...register("category", { validate: (value) => value !== "0" })} 
                  className="service-reg-field">
                    <option value="">Choose option</option>
                    <option value="electrician">Electrician</option>
                    <option value="plumber">Plumber</option>
                    <option value="handyman">Handyman</option>
                  </select>
                </div>

                <div className="additional-service-reg-container">
                  <div className="service-reg-label">Phone Number</div>
                  <input
                    
                    type="text"
                    {...register("phone")}
                    name="phone"
                    placeholder="Enter your phone number"
                    className="service-reg-field"
                  />
                  {errors.phone && (
                        <span className="text-red-600">Email is required</span>
                      )}

                  <div className="service-reg-label">Area</div>
                  <select {...register("area", { validate: (value) => value !== "0" })} className="service-reg-field">
                    <option value="">Select</option>
                    <option value="badda">Badda</option>
                    <option value="gulshan">Gulshan</option>
                    <option value="banani">Banani</option>
                    <option value="mirpur">Mirpur</option>
                    <option value="dhanmondi">Dhanmondi</option>
                  </select>

                  <div className="service-reg-label">Password</div>
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
              </div>

              <button
                className="service-reg-btn"
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
                  backgroundColor: "#4C40ED",
                  color: "white",
                }}
              >
                Sign Up
              </button>
            </div>
          </div>

          <div className="main3">
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
                className="service-signin-btn"
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
                Sign In
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

export default ProviderLogin
