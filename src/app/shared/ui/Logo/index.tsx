import Image from 'next/image';

const Logo = () => {
  return (
    <Image
      src='/logo.png'
      alt='Macaron shop logo'
      width={100}
      height={100}
    />
  );
};

export default Logo;
