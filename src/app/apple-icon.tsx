import { renderInitialsIcon } from "@/lib/initials-icon";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// iOS rounds the corners itself, so this one stays square.
export default function AppleIcon() {
  return renderInitialsIcon(size.width, false);
}
