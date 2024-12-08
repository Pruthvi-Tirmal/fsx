"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
const TryPage = () => {
  const navigate = useRouter();
  useEffect(() => {
    navigate.push("/?callbackurl='/try'");
  }, [navigate]);

  return <div>page</div>;
};

export default TryPage;
