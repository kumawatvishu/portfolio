import { PROFILE } from "@/lib/data";

export default function Footer({ style }: { style?: React.CSSProperties }) {
  return (
    <footer style={style}>
      <div className="wrap">
        <div className="foot-bottom">
          <span>© 2026 {PROFILE.name}</span>
          <span>{PROFILE.location}</span>
        </div>
      </div>
    </footer>
  );
}
