import { Container } from "./Container";
interface BannerProps {
  children: React.ReactNode;
  backgroundImage?: string;
  backgroundColor?: string;
  overlay?: boolean;
  overlayColor?: string;
  className?: string;
  overlayDirection?: "none" | "left-to-right" | "right-to-left" | "top-to-bottom" | "bottom-to-top";
  backgroundEffect?: React.ReactNode;
}

export const Banner = ({
  children,
  backgroundImage,
  backgroundColor = "bg-gray-100",
  overlay = false,
  overlayColor = "bg-black/85",
  className = "",
  overlayDirection = "none",
  backgroundEffect,
}: BannerProps) => {
  const getOverlayGradient = () => {
    if (overlayDirection === "none") return overlayColor;
    if (overlayDirection === "left-to-right")
      return "bg-gradient-to-r from-zinc-500 via-blue-100/40 to-white/30";
    if (overlayDirection === "right-to-left")
      return "bg-gradient-to-l from-gray-900/85 via-gray-800/50 to-transparent";
    if (overlayDirection === "top-to-bottom")
      return "bg-gradient-to-b from-gray-900/85 via-gray-800/50 to-transparent";
    if (overlayDirection === "bottom-to-top")
      return "bg-gradient-to-t from-gray-900/85 via-gray-800/50 to-transparent";
    return overlayColor;
  };

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
      {/* 1️⃣ EFECTO ENTRE IMAGEN Y OVERLAY */}
      {backgroundEffect}

      {/* 2️⃣ OVERLAY */}
      {overlay && <div className={`absolute inset-0 ${getOverlayGradient()}`} />}

      {/* 3️⃣ CONTENIDO */}
      <Container className="relative z-10">{children}</Container>
    </section>
  );
};
