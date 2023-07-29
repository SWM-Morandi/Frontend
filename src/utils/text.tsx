interface TextProps {
  children: React.ReactNode;
  size?: string;
  bold?: string;
}

export default function Text({ children, size, bold }: TextProps) {
  return (
    <div style={{ fontSize: `${size}`, fontWeight: `${bold}` }}>{children}</div>
  );
}
