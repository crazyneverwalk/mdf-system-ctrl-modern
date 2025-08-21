import Image from 'next/image';

const Logo = () => {
  return (
    <Image
      src="/placeholder-logo.svg"
      width={32}
      height={32}
      alt="Logo"
    />
  );
};

export default Logo;
