import React from "react";
import type { userDataType } from "../types/userTypes";
const Card: React.FC<userDataType> = ({
  name,
  imgURL,
  text,
  title,
  verifiedGraduate,
  bg_color,
}) => {
  return (
    <div className={`${bg_color} p-7 rounded-2xl text-[16px]  `}>
      <div className="flex gap-5">
        <div>
          <img className="rounded-full" src={imgURL} alt="profile-pic" />
        </div>
        <div>
          <p
            className={`${
              bg_color == "bg-white"
                ? "text-Very-dark-blackish-blue"
                : "text-White"
            }  text-2xl `}
          >
            {name}
          </p>
          <p className="text-White-50 text-2xl">
            {verifiedGraduate && "Verified Graduate"}
          </p>
        </div>
      </div>
      <div>
        <p
          className={`${
            bg_color == "bg-white"
              ? "text-Very-dark-blackish-blue"
              : "text-White"
          } text-2xl font-medium mt-5 mb-5`}
        >
          {title}
        </p>
      </div>
      <div>
        <p className="text-White-70">{text}</p>
      </div>
    </div>
  );
};
export default Card;
