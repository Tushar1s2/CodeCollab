import React from 'react'
import { useForm } from "react-hook-form";
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";




function SetupPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const [searchParam] = useSearchParams();
  const userId = searchParam.get("userId");

  const navigate=useNavigate();

  const onSubmit = async (data) => {
    const response = await fetch(`http://localhost:8080/auth/setup-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        userId: userId,
        password: data.password
      })
    });
    console.log("15");
    if(response.ok){
      navigate("/dashboard");
    }
    else{
      console.log("Password setup failed");
    }
    

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="min-h-screen w-[100%] bg-[#08090D] text-[#F5F5F5]">
        <div className="h-[50px] flex justify-between mx-6 items-center border-b border-[#262936]">

          <div className="flex items-center gap-2 mt-2">
            <i className="fa-solid fa-code text-2xl text-[#7C3AED]"></i>

            <h1 className="text-2xl font-semibold tracking-tight">
              Code<span className="text-[#7C3AED]">Collab</span>
            </h1>
          </div>
          <div>
            <h3>Any Help?</h3>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="mt-14 border border-[#7C3AED] bg-[#0F172A] p-6 flex flex-col items-center w-[360px] rounded-lg min-h-[340px]">

            <div className="flex flex-col items-center w-full">

              <div className="h-15 w-15 border border-[#7C3AED] rounded-full text-[#7C3AED] bg-[#151821] flex items-center justify-center">
                <i className="fa-solid fa-user-lock"></i>
              </div>

              <h3 className="mt-3 font-semibold text-2xl">
                Set Your Password
              </h3>

              <div className="mt-5 flex flex-col w-full">
                <label>Password</label>

                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters"
                    }
                  })}
                  className="mt-2 border border-[#374151] bg-[#151821] rounded-md h-10 px-3 outline-none focus:border-[#7C3AED]"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className='text-sm mt-6 flex justify-center p-2 rounded-lg bg-[#7C3AED] hover:bg-[#8B5CF6] w-20'>

                <button className='' type='submit'>Submit</button>


              </div>
            </div>

          </div>
        </div>
      </div>
    </form>
  )
}

export default SetupPassword
