interface IconProps {
  href: string;
  path: string;
  ariaLabel: string;
}

const Icon: React.FC<IconProps> = ({ href, path, ariaLabel }) => {
  return (
    <a
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <svg
        className="w-8 m-1 hover:scale-110 transform transition ease-in-out duration-300 fill-current hover:text-gray-900 text-gray-800 dark:text-gray-100 dark:hover:text-gray-50"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d={path} />
      </svg>
    </a>
  );
};

export const IconPlaceholder = () => {
  return <div className="w-8 m-1"></div>;
};

export default Icon;
