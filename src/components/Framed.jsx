
export default function Framed(props) {
  return (
    <iframe
      style={{ backgroundColor: "fff" }}
      title={props.src}
      width="560"
      height="400"
      src={props.src}
      frameBorder="0"
    ></iframe>);
}