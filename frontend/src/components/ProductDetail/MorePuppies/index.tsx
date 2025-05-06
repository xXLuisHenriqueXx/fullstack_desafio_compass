import List from "../../Common/List";

export default function MorePuppies() {
  return (
    <section className="flex flex-col w-full px-32 mb-20">
      <header className="flex flex-row items-end justify-between w-full mb-9">
        <div>
          <h3 className="text-base font-medium text-black">Whats new?</h3>
          <h2 className="text-2xl font-bold text-primary">See More Puppies</h2>
        </div>
      </header>

      <List numCols={4} numItems={4} />
    </section>
  );
}
