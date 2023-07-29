interface GapProps {
  hSize?: string;
  wSize?: string;
}

export default function Gap({ hSize, wSize }: GapProps) {
  return <div style={{ marginTop: `${hSize}`, marginRight: `${wSize}` }}></div>;
}
