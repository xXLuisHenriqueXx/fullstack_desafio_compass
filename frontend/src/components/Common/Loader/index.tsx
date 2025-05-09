import { tv } from "tailwind-variants";
import { MagnifyingGlass } from "react-loader-spinner";

const container = tv({
  base: "flex flex-row items-center justify-center w-full h-92",
});

export default function Loader() {
  return (
    <div className={container()}>
      <MagnifyingGlass
        visible={true}
        height="120"
        width="120"
        ariaLabel="magnifying-glass-loading"
        glassColor="#c0efff"
        color="#003459"
      />
    </div>
  );
}
