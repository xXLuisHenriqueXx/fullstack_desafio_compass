export default function Path({ name }: { name: string | undefined }) {
  return (
    <p className="mt-28 mb-3 ml-32 text-sm font-medium text-neutral-60">
      Home &nbsp;&rsaquo;&nbsp; Dog &nbsp;&rsaquo;&nbsp; {name}
    </p>
  );
}
