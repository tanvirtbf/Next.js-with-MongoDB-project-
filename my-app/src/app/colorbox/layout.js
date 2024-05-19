export default function ColorBoxLayout({ children, left, right }) {
  const isSidebar = false;
  return (
    <section>
      {children}
      {isSidebar ? left : right}
    </section>
  );
}
