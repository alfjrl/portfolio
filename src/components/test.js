import { useState } from "react";
import styles from "./test.module.css";

export default function Test() {
  const [isLoaded, setIsLoaded] = useState(false);
  const src = "/profile.jpg";
  const alt = "Alfred";

  return (
    <div className="h-52 w-52">
      {/* <div className={`${styles.div} h-52 w-52 `}> */}
      <p className="text-fuchsia-600">test</p>
      <div
        className={`${styles.img} ${styles.img_blur_down} ${
          isLoaded && styles.is_loaded
        }`}
      >
        <div className={`${styles.img_placeholder} ${styles.div}`} />
        <img
          className={styles.img_element}
          alt={alt}
          src={src}
          onLoad={() => setIsLoaded(true)}
        />
        {/* </div> */}
      </div>
    </div>
  );
}
