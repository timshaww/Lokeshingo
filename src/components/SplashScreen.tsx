import { FC, ComponentProps, useState } from "react";

type SplashScreenProps = ComponentProps<"div"> & {
  name: string;
};

const SplashScreen: FC<SplashScreenProps> = ({ name }) => {
  const [splashScreenCSS, setSplashScreenCSS] = useState(
    // "absolute w-screen h-screen overflow-hidden animate-start bg"
    "absolute w-screen h-screen overflow-hidden"
  );

  return (
    <div className={splashScreenCSS}>
      <div className="absolute w-screen bg-white z-20 animate-shrink" />
      <div className="absolute inset- 0 w-screen h-screen bg-indigo-200 z-10">
        <div
          className="animate-appear flex h-screen items-center justify-center text-3xl"
          onAnimationEnd={() => {
            setTimeout(() => {
              setSplashScreenCSS(
                "absolute w-screen overflow-hidden animate-shrink"
              );
            }, 1000);
          }}
        >
          {name}
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
