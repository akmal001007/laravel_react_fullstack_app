import { useRef } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";

const Signup = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passeordConfirmationRef = useRef();

    const onSubmit = (ev) => {
        const payLoad = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passeordConfirmationRef.current.value,
        };

        axiosClient
            .post("/signup", payLoad)
            .then(({ data }) => {
                setUser(data.user);
                SetToken(data.token);
            })
            .catch((err) => {
                const response = err.response;
                if (response && response.status === 422) {
                    console.log(response.data.errors);
                }
            });
        ev.preventDefault();
    };

    return (
        <form action="" onSubmit={onSubmit}>
            <h1>signup for free</h1>
            <input ref={nameRef} type="text" placeholder="Full Name" />
            <input ref={emailRef} type="email" placeholder="Email Address" />
            <input ref={passwordRef} type="password" placeholder="Password" />
            <input
                ref={passeordConfirmationRef}
                type="password"
                placeholder="Confirm Password"
            />
            <button className="btn btn-block">Signup</button>
            <p className="message">
                Already Registered?
                <Link to="/login">Sign in</Link>
            </p>
        </form>
    );
};

export default Signup;
