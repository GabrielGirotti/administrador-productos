import { PropsWithChildren } from "react";

const ErrorMsg = ({ children }: PropsWithChildren) => {
  return (
    <p className=" text-red font-kanit text-center p-2 border rounded-xl mt-4 w-[500px] max-w-[80vw]">
      {children}
    </p>
  );
};

export default ErrorMsg;
