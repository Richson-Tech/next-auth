import React from "react";
import Link from "next/link";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, googleSignIn, logout } = UserAuth();
  const handleSignIn = async () => {
    try {
      await googleSignIn;
    } catch (error) {}
  };

  return (
    <div className="h-20 border-b-2 flex items-center justify-between p-2">
      <ul className="flex">
        <li className="p-2 cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="p-2 cursor-pointer">
          <Link href="/profile">Profile</Link>
        </li>
        <li className="p-2 cursor-pointer">
          <Link href="/about">About</Link>
        </li>
      </ul>

      <ul className="flex justify-end">
        <li onClick={handleSignIn} className="p-2 cursor-pointer">Login</li>
        <li onClick={handleSignIn} className="p-2 cursor-pointer">LogOut</li>
      </ul>
    </div>
  );
};

export default Navbar;
