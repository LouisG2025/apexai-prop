export default function Footer() {
  return (
    <footer className="bg-[#0a0f1e] border-t border-white/[0.08] px-6 lg:px-20 py-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <img
          src="/main_short_whtie_logo_(4).webp"
          alt="ApexAI"
          className="h-5 lg:h-6 w-auto"
        />
        <div className="flex items-center gap-6">
          <span className="text-sm text-white/40 hover:text-white transition-colors duration-200 cursor-pointer" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Privacy Policy
          </span>
          <span className="text-sm text-white/40 hover:text-white transition-colors duration-200 cursor-pointer" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Terms and Conditions
          </span>
        </div>
        <p className="text-sm text-white/40" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          &copy; 2026 ApexAI Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
