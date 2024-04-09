import React from 'react'
import { useUserContext } from "../context/userContext";
import ProfileButton from "./buttons/ProfileButton";
import CartButton from "./buttons/CartButton";
import SignIn from "./buttons/SignInButton";
import SignOutButton from "./buttons/SignOutButton";

const AvatarMenu = () => {

  const { user } = useUserContext();


  return (
    <div className="absolute flex flex-col justify-evenly w-1/5 h-20 p-2 right-2 top-[4rem] rounded-sm bg-white">
          <ProfileButton />
          <CartButton />
          { user ? <SignOutButton /> : <SignIn /> }
        </div>
  )
}

export default AvatarMenu