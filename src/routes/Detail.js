import React, { useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

const Detail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state === null) {
      navigate("/");
    }
  });

  if (location.state === null) {
    return null;
  } else {
    return <span>{ location.state.title }</span>;
  }
}

export default Detail;
