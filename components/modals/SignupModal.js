import { closeSignupModal, openSignupModal } from "@/redux/modalSlice";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { setUser } from "@/redux/userSlice";
import { auth } from "@/firebase";

const SignupModal = () => {
  const isOpen = useSelector((state) => state.modals.signupModalOpen);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignup = async () => {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) return;
      dispatch(
        setUser({
          username: currentUser.email.split("@")[0],
          name: null,
          email: currentUser.email,
          uid: currentUser.uid,
          photoUrl: null,
        })
      );
    });
    return unsubscribe;
  }, []);
  return (
    <>
      <button
        className="bg-white text-black w-[160px] rounded-full h-[40px] hover:bg-[#cbd2d7]"
        onClick={() => dispatch(openSignupModal())}
      >
        Sign Up
      </button>
      <Modal
        className="flex justify-center items-center"
        open={isOpen}
        onClose={() => dispatch(closeSignupModal())}
      >
        <div className="w-[90%] h-fit bg-black text-white md:w-[560px] md:h-[600px] border border-gray-700 rounded-lg flex justify-center">
          <div className="w-[90%] mt-8 flex flex-col">
            <button className="bg-white text-black w-full font-bold text-lg p-2 rounded-md">
              Sign In as Guest
            </button>
            <h1 className="text-center mt-4 font-bold text-lg">or</h1>
            <h1 className=" mt-4 font-bold text-4xl">Create your Account</h1>
            <input
              type="text"
              className="h-10 roudned-md bg-transparent border border-gray-700 p-6 mt-8"
              placeholder="Full Name"
            />
            <input
              type="email"
              className="h-10 roudned-md bg-transparent border border-gray-700 p-6 mt-8"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="h-10 roudned-md bg-transparent border border-gray-700 p-6 mt-8"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={handleSignup}
              className="bg-white text-black w-full font-bold text-lg p-2 mt-8 rounded-md"
            >
              Create account
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SignupModal;
