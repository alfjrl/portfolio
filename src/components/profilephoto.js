import Image from "next/image";

export default function ProfilePhoto() {
  return (
    <div className="lg:max-w-screen-sm lg:pt-10 container w-full px-5 lg:px-8 h-full overflow-hidden">
      <Image
        src="/profile-1.png"
        alt="Alfred"
        width={2020}
        height={3020}
        className="rounded"
        style={{ objectFit: "cover", objectPosition: "bottom" }}
      ></Image>
    </div>
  );
}
