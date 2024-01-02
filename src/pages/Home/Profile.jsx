import React from "react";

const Profile = () => {
  return (
    <div className="wrapper my-32">
      <div className="p-10 -z-10 contain bg-[url('/images/profile-background.png')] min-h-[440px] bg-cover bg-center bg-no-repeat bg-[#363636] flex center justify-center items-center flex-col gap-[80px]">
        <div className="flex center justify-center items-center flex-col gap-5">
          <h2 className="text-[40px] sm:text-[45px] md:text-[50px]lg:text-[55px]xl:text-[60px] text-center font-ProtoMono lg:leading-[66px] text-white">
            YOUR WEB3 USERNAME
          </h2>
          <p className="font-ProtoMono sm:text-lg lg:text-[20px] text-white text-center max-w-[750px] p-5">
            No more sandboxed usernames. Own your username, store an avatar and
            other profile data, and use it across services.
          </p>
        </div>
        <button className="flex gap-[12px] items-center rounded-[100px] border-2 px-[32px] py-[16px] border-solid border-white max-w-[304px] mb-5">
          <img
            src="/images/orange-avatar.png"
            alt="Profile-Pic"
            className="w-[30px] md:w-[36px] aspect-square shrink-0 rounded-[36px]"
            m
          />
          <span className="text-center font-ProtoMono text-[20px] md:text-[24px] leading-[18px] text-white">
            Nick.eth
          </span>
        </button>
      </div>
    </div>
  );
};

export default Profile;
