import Image from 'next/image';

const Logo = () => {
  return (
    <Image
      src="/placeholder-logo.png"
      width={32}
      height={32}
      alt="Logo"
    />
  );
};

export default Logo;
