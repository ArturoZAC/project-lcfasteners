export const RadialHighlight = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-1">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.55)_0%,_rgba(255,255,255,0.48)_12%,_rgba(255,255,255,0.38)_22%,_rgba(255,255,255,0.26)_34%,_rgba(255,255,255,0.18)_44%,_rgba(255,255,255,0.10)_54%,_rgba(255,255,255,0.04)_62%,_transparent_72%)] backdrop-blur-[2px]" />
    </div>
  );
};
