import { toast } from "react-toastify";

const CustomToast = ({ message, type }) => {
  const showToast = () => {
    if (type === 'success') {
      toast.success(message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true, 
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (type === 'error') {
      toast.error(message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  showToast();

  return null; // Return null as the component doesn't render anything
};

export default CustomToast;
