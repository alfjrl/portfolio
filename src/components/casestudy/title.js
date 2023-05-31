export default function Title({ children }) {
  return (
    <h2 className="text-xl font-semibold text-slate-900 uppercase">
      # {children}
    </h2>
  );
}
