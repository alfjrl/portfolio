import Image from "next/image";

export default function HeroPhoto() {
  return (
    <div className="relative group container w-80 lg: h-full">
      <div className="absolute rounded-lg bottom-0 w-full h-full bg-slate-700"></div>
      <div className="relative w-full h-full -translate-y-4 -translate-x-4 transition-all duration-150 ease-in hover:border-slate-900 group-hover:translate-y-0 group-hover:translate-x-0">
        <Image
          src="/alfred.png"
          alt="Alfred"
          width={2020}
          height={3020}
          className="rounded-lg object-cover object-bottom transition-transform duration-150 ease-in "
        ></Image>
      </div>
    </div>
  );
}
