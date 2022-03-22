const useLogout = () => {
  if (localStorage.removeItem("token")) {
    return true;
  }
  return false;
};

export default useLogout;
