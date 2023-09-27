import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export type TTopBarProps = {};

export default function TopBar(props: TTopBarProps) {
  const {} = props;

  return (
    <div className="bg-gray-900 h-16">
      <div className="px-10 h-full flex items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-800 pl-8 pr-4 py-2 rounded text-sm"
          />
          <MagnifyingGlassIcon className="absolute left-2 top-2/4 transform -translate-y-2/4 text-gray-400 w-5 h-5" />
        </div>
      </div>
    </div>
  );
}
