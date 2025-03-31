export default function Spotify({ link }) {
  return (
    <iframe
      title="Spotify"
      src={link}
      width="560"
      height="380"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
}