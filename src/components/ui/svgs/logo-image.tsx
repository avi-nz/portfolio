/* eslint-disable @next/next/no-img-element */
// Skill logos stored as SVG files in public/skills (from Devicon, MIT licence).
function logo(src: string, alt: string) {
  const Logo = ({ className }: { className?: string }) => (
    <img src={src} alt={alt} className={className} />
  );
  Logo.displayName = `${alt}Logo`;
  return Logo;
}

export const CLogo = logo("/skills/c.svg", "C");
export const CppLogo = logo("/skills/cplusplus.svg", "C++");
export const MatlabLogo = logo("/skills/matlab.svg", "MATLAB");
