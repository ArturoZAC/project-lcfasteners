import { Container } from "./Container";

interface BannerProps {
  children: React.ReactNode;
  backgroundImage?: string;
  backgroundColor?: string;
  overlay?: boolean;
  overlayColor?: string;
  className?: string;
}

export const Banner = ({
  children,
  backgroundImage,
  backgroundColor = "bg-gray-100",
  overlay = false,
  overlayColor = "bg-black/85",
  className = "",
}: BannerProps) => {
  return (
    <section
      className={`w-full relative ${backgroundColor} ${className}`}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      {overlay && <div className={`absolute inset-0 ${overlayColor}`}></div>}
      <Container className="relative z-10">{children}</Container>
    </section>
  );
};
