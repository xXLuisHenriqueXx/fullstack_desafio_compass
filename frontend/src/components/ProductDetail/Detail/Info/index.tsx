import { MessageSquareMore } from "lucide-react";

export default function Info() {
  return (
    <article className="flex flex-col items-start gap-y-5 max-w-1/2">
      <p className="text-sm font-medium text-neutral-60">{`Home  >  Dog  >  Large Dog  >  Shiba Inu Sepia`}</p>

      <div className="flex flex-col items-start gap-y-1.5">
        <div className="flex flex-col items-start gap-y-0.5">
          <p className="text-sm font-medium text-neutral-40">SKU #1000078</p>
          <h1 className="text-2xl font-bold text-neutral-100">
            Shiba Inu Sepia
          </h1>
        </div>
        <h2 className="text-xl font-bold text-primary-80">34.000.000 VND</h2>
      </div>

      <div className="flex flex-row items-center gap-x-5">
        <button className="px-7 py-3 bg-primary hover:bg-state-blue text-base font-bold text-neutral hover:text-primary rounded-full transition-all duration-300 cursor-pointer">
          Contact us
        </button>
        <button className="flex flex-row items-center gap-x-2.5 px-7 py-3 border-2 border-primary-80 hover:bg-primary-80 text-base font-bold text-primary hover:text-neutral rounded-full transition-all duration-300 cursor-pointer">
          <MessageSquareMore size={24} />
          Chat with Monito
        </button>
      </div>

      <div className="flex flex-col max-w-full">
        <div className="flex flex-row items-center justify-evenly w-full py-2 border-b border-neutral-10 text-sm font-medium text-neutral-60">
          <p className="w-1/2">SKU</p>
          <p className="w-1/2">: #1000078</p>
        </div>

        <div className="flex flex-row items-center justify-evenly w-full py-2 border-b border-neutral-10 text-sm font-medium text-neutral-60">
          <p className="w-1/2">Gender</p>
          <p className="w-1/2">: Female</p>
        </div>

        <div className="flex flex-row items-center justify-evenly w-full py-2 border-b border-neutral-10 text-sm font-medium text-neutral-60">
          <p className="w-1/2">Age</p>
          <p className="w-1/2">: 2 Months</p>
        </div>

        <div className="flex flex-row items-center justify-evenly w-full py-2 border-b border-neutral-10 text-sm font-medium text-neutral-60">
          <p className="w-1/2">Size</p>
          <p className="w-1/2">: Small</p>
        </div>

        <div className="flex flex-row items-center justify-evenly w-full py-2 border-b border-neutral-10 text-sm font-medium text-neutral-60">
          <p className="w-1/2">Color</p>
          <p className="w-1/2">: Appricot & Tan</p>
        </div>

        <div className="flex flex-row items-center justify-evenly w-full py-2 border-b border-neutral-10 text-sm font-medium text-neutral-60">
          <p className="w-1/2">Vaccinated</p>
          <p className="w-1/2">: Yes</p>
        </div>

        <div className="flex flex-row items-center justify-evenly w-full py-2 border-b border-neutral-10 text-sm font-medium text-neutral-60">
          <p className="w-1/2">Dewormed</p>
          <p className="w-1/2">: Yes</p>
        </div>

        <div className="flex flex-row items-center justify-evenly w-full py-2 border-b border-neutral-10 text-sm font-medium text-neutral-60">
          <p className="w-1/2">Cert</p>
          <p className="w-1/2">{`: Yes (MKA)`}</p>
        </div>

        <div className="flex flex-row items-center justify-evenly w-full py-2 border-b border-neutral-10 text-sm font-medium text-neutral-60">
          <p className="w-1/2">Microchip</p>
          <p className="w-1/2">: Yes</p>
        </div>

        <div className="flex flex-row items-center justify-evenly w-full py-2 border-b border-neutral-10 text-sm font-medium text-neutral-60">
          <p className="w-1/2">Location</p>
          <p className="w-1/2">: Vietnam</p>
        </div>

        <div className="flex flex-row items-center justify-evenly w-full py-2 border-b border-neutral-10 text-sm font-medium text-neutral-60">
          <p className="w-1/2">Published Date</p>
          <p className="w-1/2">: 12-Oct-2022</p>
        </div>

        <div className="flex flex-row items-center justify-evenly w-full py-2 border-b border-neutral-10 text-sm font-medium text-neutral-60">
          <p className="w-1/2">Additional Information</p>
          <p className="w-1/2">
            : Pure breed Shih Tzu. Good body structure. With MKA cert and
            Microchip. Father from champion lineage.
          </p>
        </div>
      </div>
    </article>
  );
}
