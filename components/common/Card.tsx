import cn from "classnames";

export type TCardProps = React.HTMLAttributes<HTMLDivElement> & {};

export default function Card(props: TCardProps) {
  const { className, children } = props;

  return (
    <div className={cn("bg-gray-900 rounded-lg shadow-lg p-6", className)}>
      {children}
    </div>
  );
}
