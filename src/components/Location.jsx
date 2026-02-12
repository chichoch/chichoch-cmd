import { useState, useEffect } from "react";

export default function Location() {
  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        setPosition({ lat: pos.coords.latitude, lon: pos.coords.longitude });
      },
      (err) => {
        setError(`Unable to retrieve location: ${err.message}`);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  if (error) return <p>{error}</p>;
  if (!position) return <p>Locating…</p>;

  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${position.lon - 0.01},${position.lat - 0.01},${position.lon + 0.01},${position.lat + 0.01}&layer=mapnik&marker=${position.lat},${position.lon}`;

  return (
    <iframe
      title="Your Location"
      src={mapSrc}
      width="560"
      height="400"
      frameBorder="0"
      style={{ border: 0 }}
    ></iframe>
  );
}
