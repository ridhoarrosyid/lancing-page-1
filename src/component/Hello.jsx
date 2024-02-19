import HelloCard from "./HelloCard";
import gambar1 from "../assets/gambar1.png";

export default function Hello() {
  return (
    <div className="px-24 flex justify-between items-center mt-10">
      <HelloCard
        h1={"SaaS Landing Page Tamplate"}
        p="this is a tamplate figma file turned into code using Anima. Learn more at AnimaApp.com"
        textTombol="get started"
      />
      <div className="p-8 rounded-3xl bg-neutral-700">
        <img
          src={gambar1}
          className="rounded-t-3xl rounded-b-lg object-cover object-center h-96"
        />
      </div>
    </div>
  );
}
