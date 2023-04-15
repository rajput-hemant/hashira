import { Loader2 } from "lucide-react";

const Rloading = () => {
  return (
    <div className="container z-10 flex h-[calc(100vh-5rem)] w-screen items-center justify-center backdrop-blur">
      <Loader2 size={40} className="animate-spin" />
    </div>
  );
};

export default Rloading;
