import { ArrowLeft, ArrowRight } from "lucide-react";

export default function PageNavigator() {
  return (
    <nav className="flex flex-row items-center self-center gap-x-3 mt-10">
      <button className="px-3.5 py-1.5 text-primary-80 cursor-pointer">
        <ArrowLeft size={20} />
      </button>

      <button className="px-3.5 py-1.5 bg-primary text-lg font-bold text-neutral rounded-lg cursor-pointer">
        1
      </button>
      <button className="px-3.5 py-1.5 text-lg font-bold text-primary cursor-pointer">
        2
      </button>
      <button className="px-3.5 py-1.5 text-lg font-bold text-primary cursor-pointer">
        3
      </button>

      <button className="px-3.5 py-1.5 text-primary-80 cursor-pointer">
        <ArrowRight size={20} />
      </button>
    </nav>
  );
}
