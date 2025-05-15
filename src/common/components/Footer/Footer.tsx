export const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-4 mt-auto">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-white/70">
          MUSIC DATABASE © 2024-
         {(new Date().getFullYear())}
        </p>
      </div>
    </footer>
  );
};
