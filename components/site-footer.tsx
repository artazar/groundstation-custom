export function SiteFooter({ productName }: { productName: string }) {
  return (
    <footer className="border-t border-white/[0.06] px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 text-xs text-white/35 sm:flex-row">
        <span className="font-medium text-white/55">{productName}</span>
        <span>
          &copy; {new Date().getFullYear()} {productName}. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
