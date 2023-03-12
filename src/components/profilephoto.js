import Image from "next/image";

export default function ProfilePhoto() {
  return (
    <div className="max-w-screen-sm pt-10 container max-auto px-5 sm:px-8  h-full grid justify-items-center">
      <Image
        src="/profile.jpg"
        alt="Alfred"
        width={896}
        height={597}
        className="object-cover rounded"
      ></Image>
    </div>
  );
}
