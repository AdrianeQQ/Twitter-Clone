import { closeLoginModal, openLoginModal } from "@/redux/modalSlice";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";

const LoginModal = () => {
  const isOpen = useSelector((state) => state.modals.loginModalOpen);
  const dispatch = useDispatch();
  return (
    <>
      <button
        className="bg-transparent border border-white text-white w-[160px] rounded-full h-[40px] hover:bg-[#cbd2d7]"
        onClick={() => dispatch(openLoginModal())}
      >
        Log In
      </button>
      <Modal
        className="flex justify-center items-center"
        open={isOpen}
        onClose={() => dispatch(closeLoginModal())}
      >
        <div className="w-[90%] h-fit bg-black text-white md:w-[560px] md:h-[600px] border border-gray-700 rounded-lg flex justify-center">
          <div className="w-[90%] mt-8 flex flex-col">
            <h1 className=" mt-4 font-bold text-4xl">
              Sign In to your Account
            </h1>
            <input
              type="text"
              className="h-10 roudned-md bg-transparent border border-gray-700 p-6 mt-8"
              placeholder="Full Name"
            />
            <input
              type="email"
              className="h-10 roudned-md bg-transparent border border-gray-700 p-6 mt-8"
              placeholder="Email"
            />
            <input
              type="password"
              className="h-10 roudned-md bg-transparent border border-gray-700 p-6 mt-8"
              placeholder="Password"
            />
            <button className="bg-white text-black w-full font-bold text-lg p-2 mt-8 rounded-md">
              Sign In
            </button>
            <h1 className="text-center mt-8 font-bold text-lg">or</h1>
            <button className="bg-white text-black w-full font-bold text-lg p-2 rounded-md mt-4">
              Sign In as Guest
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default LoginModal;
