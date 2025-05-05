export default function Sidebar() {
  return (
    <aside className="flex flex-col items-start w-1/5 text-sm font-medium text-neutral-100 accent-primary">
      <h1 className="text-2xl font-bold text-primary">Filter</h1>

      <article className="flex flex-col items-start w-full mt-4 pb-4 border-b border-neutral-10">
        <h2 className="mb-2.5 text-base font-bold">Gender</h2>

        <label
          className="flex flex-row items-center gap-x-2.5 mb-2"
          htmlFor="male"
        >
          <input id="male" type="checkbox" />
          Male
        </label>

        <label
          className="flex flex-row items-center gap-x-2.5"
          htmlFor="female"
        >
          <input id="female" type="checkbox" />
          Female
        </label>
      </article>

      <article className="flex flex-col items-start w-full mt-4 pb-4 border-b border-neutral-10">
        <h2 className="mb-2.5 text-base font-bold">Color</h2>
        <label
          className="flex flex-row items-center gap-x-2.5 mb-2"
          htmlFor="red"
        >
          <input id="red" type="checkbox" />
          <div className="w-4 aspect-square bg-state-red rounded-full" />
          Red
        </label>
        <label
          className="flex flex-row items-center gap-x-2.5 mb-2"
          htmlFor="apricot"
        >
          <input id="apricot" type="checkbox" />
          <div className="w-4 aspect-square bg-state-apricot rounded-full" />
          Apricot
        </label>
        <label
          className="flex flex-row items-center gap-x-2.5 mb-2"
          htmlFor="black"
        >
          <input id="black" type="checkbox" />
          <div className="w-4 aspect-square bg-black rounded-full" />
          Black
        </label>
        <label
          className="flex flex-row items-center gap-x-2.5 mb-2"
          htmlFor="black-white"
        >
          <input id="black-white" type="checkbox" />
          <div
            className="w-4 aspect-square rounded-full"
            style={{
              background: "linear-gradient(to right, black 50%, #d3d3d3 50%)",
            }}
          />
          Black &amp; white
        </label>
        <label
          className="flex flex-row items-center gap-x-2.5 mb-2"
          htmlFor="silver"
        >
          <input id="silver" type="checkbox" />
          <div className="w-4 aspect-square bg-state-silver rounded-full" />
          Silver
        </label>
        <label className="flex flex-row items-center gap-x-2.5" htmlFor="tan">
          <input id="tan" type="checkbox" />
          <div className="w-4 aspect-square bg-state-tan rounded-full" />
          Tan
        </label>
      </article>

      <article className="flex flex-col items-start w-full mt-4 pb-4 border-b border-neutral-10">
        <h2 className="mb-2.5 text-base font-bold">Price</h2>
        <div className="flex flex-row items-center gap-x-2.5 mb-2">
          <input
            className="w-1/2 p-2.5 border-b border-b-neutral-10 text-primary placeholder:neutral-80 outline-none"
            type="number"
            placeholder="Min"
          />
          <input
            className="w-1/2 p-2.5 border-b border-b-neutral-10 text-primary placeholder:neutral-80 outline-none"
            type="number"
            placeholder="Max"
          />
        </div>
      </article>

      <article className="flex flex-col items-start w-full mt-4 pb-4 border-b border-neutral-10">
        <h2 className="mb-2.5 text-base font-bold">Breed</h2>
        <label
          className="flex flex-row items-center gap-x-2.5 mb-2"
          htmlFor="small"
        >
          <input id="small" type="checkbox" />
          Small
        </label>
        <label
          className="flex flex-row items-center gap-x-2.5 mb-2"
          htmlFor="medium"
        >
          <input id="medium" type="checkbox" />
          Medium
        </label>
        <label className="flex flex-row items-center gap-x-2.5" htmlFor="large">
          <input id="large" type="checkbox" />
          Large
        </label>
      </article>
    </aside>
  );
}
