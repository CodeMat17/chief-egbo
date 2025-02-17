import { Cinzel_Decorative } from "next/font/google";

const cinzel = Cinzel_Decorative({ subsets: ["latin"], weight: "700" });


const Subheadings = ({text}: {text: string}) => {
  return (
    <h1
      className={`text-3xl sm:text-4xl text-amber-600 dark:text-amber-400 font-extrabold mb-8 text-center ${cinzel.className}`}>
      {text}
    </h1>
  );
};

export default Subheadings;
