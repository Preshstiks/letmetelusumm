import { toast, Zoom } from "react-toastify";
const CustomToast = ({ message, type }) => {
  const toastOptions = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    transition: Zoom,
    rtl: false,
    closeButton: false,
    theme: "light",
  };

  switch (type) {
    case "success":
      toast.success(message, toastOptions);
      break;
    case "error":
      toast.error(message, toastOptions);
      break;
    case "warning":
      toast.warning(message, toastOptions);
      break;
    default:
      toast(message, toastOptions);
  }
};

export default CustomToast;
