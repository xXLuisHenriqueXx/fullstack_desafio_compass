import { tv } from "tailwind-variants";
import { EnumProductType } from "../../../../common/enum/ProductType";
import { useProductsStore } from "../../../../states/ProductsState";

interface Props {
  type: EnumProductType | undefined;
}

const card = tv({
  slots: {
    containerMain:
      "flex flex-col items-start w-1/5 text-sm font-medium text-neutral-100 accent-primary",
    containerCheckboxes:
      "flex flex-col items-start w-full mt-4 pb-4 border-b border-neutral-10",
    containerColor: "w-4 aspect-square bg-state-red rounded-full",
    labelCheckbox: "flex flex-row items-center gap-x-2.5",
    title: "text-2xl font-bold text-primary",
    subtitle: "mb-2.5 text-base font-bold",
  },
  variants: {
    mb: {
      2: {
        labelCheckbox: "mb-2",
      },
    },
  },
});

const { containerMain, containerCheckboxes, labelCheckbox, title, subtitle } =
  card();

export default function Sidebar({ type }: Props) {
  const { filters, setFilters } = useProductsStore();
  const isPet = type === EnumProductType.PET || type === undefined;

  const handleGenderChange = (gender: string) => {
    const current = filters.gender || [];
    setFilters({
      gender: current.includes(gender)
        ? current.filter((g: string) => g !== gender)
        : [...current, gender],
    });
  };

  const handleColorChange = (color: string) => {
    setFilters({
      color: filters.color?.includes(color)
        ? filters.color.filter((c: string) => c !== color)
        : [...(filters.color || []), color],
    });
  };

  const handleMinChange = (min: number) => {
    setFilters({
      minPrice: min ? Number(min) : undefined,
    });
  };

  const handleMaxChange = (max: number) => {
    setFilters({
      maxPrice: max ? Number(max) : undefined,
    });
  };

  const handleBreedChange = (size: string) => {
    setFilters({
      size: filters.size?.includes(size)
        ? filters.size.filter((b: string) => b !== size)
        : [...(filters.size || []), size],
    });
  };

  return (
    <aside className={containerMain()}>
      <h1 className={title()}>Filter</h1>

      {isPet && (
        <article className={containerCheckboxes()}>
          <h2 className={subtitle()}>Gender</h2>

          <label className={labelCheckbox({ mb: 2 })} htmlFor="male">
            <input
              id="male"
              type="checkbox"
              onChange={() => handleGenderChange("male")}
            />
            Male
          </label>

          <label className={labelCheckbox()} htmlFor="female">
            <input
              id="female"
              type="checkbox"
              onChange={() => handleGenderChange("female")}
            />
            Female
          </label>
        </article>
      )}

      {isPet && (
        <article className={containerCheckboxes()}>
          <h2 className={subtitle()}>Color</h2>
          <label className={labelCheckbox({ mb: 2 })} htmlFor="red">
            <input
              id="red"
              type="checkbox"
              onChange={() => handleColorChange("red")}
            />
            <div className="w-4 aspect-square bg-state-red rounded-full" />
            Red
          </label>
          <label className={labelCheckbox({ mb: 2 })} htmlFor="apricot">
            <input
              id="apricot"
              type="checkbox"
              onChange={() => handleColorChange("apricot")}
            />
            <div className="w-4 aspect-square bg-state-apricot rounded-full" />
            Apricot
          </label>
          <label className={labelCheckbox({ mb: 2 })} htmlFor="black">
            <input
              id="black"
              type="checkbox"
              onChange={() => handleColorChange("black")}
            />
            <div className="w-4 aspect-square bg-black rounded-full" />
            Black
          </label>
          <label className={labelCheckbox({ mb: 2 })} htmlFor="black-white">
            <input
              id="black-white"
              type="checkbox"
              onChange={() => handleColorChange("black_white")}
            />
            <div
              className="w-4 aspect-square rounded-full"
              style={{
                background: "linear-gradient(to right, black 50%, #d3d3d3 50%)",
              }}
            />
            {`Black & white`}
          </label>
          <label className={labelCheckbox({ mb: 2 })} htmlFor="silver">
            <input
              id="silver"
              type="checkbox"
              onChange={() => handleColorChange("silver")}
            />
            <div className="w-4 aspect-square bg-state-silver rounded-full" />
            Silver
          </label>
          <label className={labelCheckbox()} htmlFor="tan">
            <input
              id="tan"
              type="checkbox"
              onChange={() => handleColorChange("tan")}
            />
            <div className="w-4 aspect-square bg-state-tan rounded-full" />
            Tan
          </label>
        </article>
      )}

      <article className={containerCheckboxes()}>
        <h2 className={subtitle()}>Price</h2>
        <div className={labelCheckbox({ mb: 2 })}>
          <input
            className="w-1/2 p-2.5 border-b border-b-neutral-10 text-primary placeholder:neutral-80 outline-none"
            type="number"
            placeholder="Min"
            onChange={(e) => handleMinChange(parseFloat(e.target.value))}
          />
          <input
            className="w-1/2 p-2.5 border-b border-b-neutral-10 text-primary placeholder:neutral-80 outline-none"
            type="number"
            placeholder="Max"
            onChange={(e) => handleMaxChange(parseFloat(e.target.value))}
          />
        </div>
      </article>

      {isPet && (
        <article className={containerCheckboxes()}>
          <h2 className={subtitle()}>Breed</h2>
          <label className={labelCheckbox({ mb: 2 })} htmlFor="small">
            <input
              id="small"
              type="checkbox"
              onChange={() => handleBreedChange("small")}
            />
            Small
          </label>
          <label className={labelCheckbox({ mb: 2 })} htmlFor="medium">
            <input
              id="medium"
              type="checkbox"
              onChange={() => handleBreedChange("medium")}
            />
            Medium
          </label>
          <label className={labelCheckbox()} htmlFor="large">
            <input
              id="large"
              type="checkbox"
              onChange={() => handleBreedChange("large")}
            />
            Large
          </label>
        </article>
      )}
    </aside>
  );
}
