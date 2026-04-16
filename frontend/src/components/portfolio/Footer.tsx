export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm text-muted-foreground sm:px-6">
        © {new Date().getFullYear()} Zachary Harrison. Built with care.
      </div>
    </footer>
  );
}
