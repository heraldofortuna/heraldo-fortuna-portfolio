interface ButtonProps {
  text: string;
  hasFullWidth?: boolean;
};

const Button = ({ text, hasFullWidth = false }: ButtonProps) => {
  return (
    <button className={`relative ${hasFullWidth ? 'w-full' : 'w-fit'} px-[32px] py-[16px] border border-dark-brown rounded-[8px] cursor-pointer`}>
      <span className="block text-dark-brown">{text}</span>
      <span className="absolute top-[6px] left-[6px] z-[-10] bg-yellow w-full h-full rounded-[8px]"></span>
    </button>
  )
};

export default Button;