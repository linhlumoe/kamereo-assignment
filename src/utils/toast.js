import { toast } from "react-toastify";

const toastMessage = {
  success: (message = "", options = {}) => toast.success(message, options),
  error: (message = "", options = {}) => toast.error(message, options)
};

export default toastMessage;
