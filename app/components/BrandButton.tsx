interface BrandButtonProps {
  children: React.ReactNode;
  link?: string;
}


function BrandButton({ children, link }: BrandButtonProps) {
  return (
    <a href={link}>
      <button className="w-40 bg-brand/50 brand-button">
        <div className="bg-brand px-3 py-2 ">{children}</div>
      </button>
    </a>
  );
}

export default BrandButton;
