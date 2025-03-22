import React , { useState }from "react";
import { Link } from "react-router-dom";
import { IoIosMail } from "react-icons/io";
import {login} from "../../services/ApiUser"
import { useHistory } from "react-router-dom";

export default function Login() {
    const history = useHistory();
  const [newAccount , setNewAccount] = useState({
    email :"",password:""
  })

  const handleChange = (e) => {
    const { name , value } = e.target;
    setNewAccount({...newAccount , [name]: value})
  }

  const login2 = async () => {
    try {
      const res = await login(newAccount);
      console.log("res", res);  // S'assurer que res est bien défini
      localStorage.setItem("user", JSON.stringify(res.data.user)); // Sauvegarde les infos dans localStorage

      if(res.data.user.role === "client"){
        history.push("/landing");
      }else{
        history.push("/admin/tables");
      }
    } catch (error) {
      console.error("Erreur de connexion :", error);
    }
  };
  

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full mb-4">
          <div className="w-full lg:w-4/12 px-4 mt-30">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0 mt-9">
                <form>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <div className="flex items-center border border-gray-300 rounded shadow-sm px-3 py-2">
                      <IoIosMail className="text-blueGray-600 text-xl" />
                      <input
                        type="email"
                        className="border-0 px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white text-sm focus:outline-none focus:ring w-full"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                      name="password"
                      onChange={handleChange}

                    />
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        Remember me
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      onClick={()=>{login2(newAccount)}}
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <Link
                  to="/auth/Forget"
                  className="text-blueGray-200"
                >
                  <small>Forgot password?</small>
                </Link>
              </div>
              <div className="w-1/2 text-right">
                <Link to="/auth/register" className="text-blueGray-200">
                  <small>Create new account</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
