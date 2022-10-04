import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

const CircleImage = (props: Props) => {
  return <Image {...props} />;
};

export default CircleImage;
