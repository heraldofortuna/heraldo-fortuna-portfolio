interface ButtonProps {
  text: string;
  hasFullWidth?: boolean;
};

const Button = ({ text, hasFullWidth = false }: ButtonProps) => {
  return (
    <button className={`${hasFullWidth ? 'w-full' : 'w-fit'} relative px-[32px] py-[16px] rounded-[8px] cursor-pointer transform group`}>
      <span className="absolute top-0 left-0 z-[10] w-full h-full border border-dark-brown rounded-[8px] transition-transform duration-300 transform group-hover:translate-x-[8px] group-hover:translate-y-[8px]"></span>
      <span className="block z-[1] text-dark-brown transition-transform duration-300 transform group-hover:translate-x-[8px] group-hover:translate-y-[8px]">{text}</span>
      <span className="absolute top-0 left-0 z-[-1] bg-yellow w-full h-full rounded-[8px] transform translate-x-[8px] translate-y-[8px]"></span>
    </button>
  )
};

export default Button;