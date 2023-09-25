import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props{
    onClick: ()=> void
}

function Like({onClick}: Props) {
  const [status, setStatus] = useState(false);

  const toggle = ()=>{
    setStatus(!status);
    onClick();
  }
  if (status) return <AiFillHeart size={32} color="red" onClick={toggle}></AiFillHeart>;
  return <AiOutlineHeart size={32} color="red" onClick={toggle}></AiOutlineHeart>;
}

export default Like;
