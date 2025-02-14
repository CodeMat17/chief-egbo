import { Cinzel_Decorative } from "next/font/google";

const cinzel = Cinzel_Decorative({ subsets: ["latin"], weight: "700" });


const Subheadings = ({text}: {text: string}) => {
  return (
    <h1
      className={`text-4xl font-extrabold mb-8 text-center ${cinzel.className}`}>
      {text}
    </h1>
  );
};

export default Subheadings;
