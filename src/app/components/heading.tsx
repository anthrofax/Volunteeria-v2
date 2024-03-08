'use client'

function Heading({
  text,
  level,
  className,
}: {
  text: string;
  level: string;
  className: string;
}) {
  if (level === "h3") return <h3 className={className}>{text}</h3>;
  if (level === "h2") return <h2 className={className}>{text}</h2>;

  return <h1 className={`font-semibold text-4xl ${className}`}>{text}</h1>;
}

export default Heading;
