import Image from "next/image";
const logo = "@/assets/icons/FOH-logo.svg";

export default function Loading() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black fixed top-0 left-0 z-[9998] overflow-clip">
      <div className="size-32 lg:size-40 xl:size-52 min-[90rem]:size-64 overflow-hidden">
        <Image
          src={logo}
          width={0}
          height={0}
          sizes="100vw"
          unoptimized
          unselectable="on"
          alt="Future of Health Africa, 2025"
          className="w-full h-full object-cover transition-all duration-300 animate-ping"
        />
      </div>
    </div>
  );
}
