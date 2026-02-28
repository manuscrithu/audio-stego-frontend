import { useState } from "react";

export default function TeamAvatar({ name, initials, imageSrc }) {
  const [hasImageError, setHasImageError] = useState(false);

  if (!imageSrc || hasImageError) {
    return (
      <div className="team-avatar" aria-label={`${name} avatar`}>
        {initials}
      </div>
    );
  }

  return (
    <img
      className="team-avatar team-avatar-image"
      src={imageSrc}
      alt={name}
      onError={() => setHasImageError(true)}
    />
  );
}
