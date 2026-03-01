export default function Spotify({ link }: { link: string }) {
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