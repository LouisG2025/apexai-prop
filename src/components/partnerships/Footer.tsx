export default function Footer() {
  return (
    <footer className="bg-[#0a0f1e] border-t border-white/[0.08] px-6 lg:px-20 py-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <img
          src="/white_ApexAI_logo.png"
          alt="ApexAI"
          className="h-5 lg:h-6 w-auto"
        />
        <div className="flex items-center gap-6 text-sm text-white/40 hover:[&>span]:text-white [&>span]:transition-colors [&>span]:duration-200 [&>span]:cursor-pointer">
          <span>Privacy Policy</span>
          <span>Terms and Conditions</span>
        </div>
        <p className="text-sm text-white/40">
          &copy; 2026 ApexAI Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
