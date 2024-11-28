import React from "react";

const Footer = () => {
  return (
    <footer className="py-4 mt-5 border-t bg-white/50 required-padding">
      <section className="grid grid-cols-3 place-items-center">
        <a
          href="mailto:support@example.com?subject=Report%20an%20Issue"
          className="text-sm cursor-pointer underline-offset-4 decoration-dotted text-muted-foreground hover:underline sm:text-base">
          Report an Issue
        </a>
        <p className="order-3 text-xs font-medium text-center text-gray-500 lg:order-none sm:text-lg">
          Made with ❤️ in India
        </p>
        <a
          href="https://x.com/Pruthvix7"
          className="font-medium text-center lg:text-right md:text-base sm:hover:underline decoration-wavy text-muted-foreground">
          <span className="hidden lg:inline-flex">
            Design & Developed by Phoenix
          </span>{" "}
          <span className="text-xl">⚡️</span>
        </a>
      </section>
    </footer>
  );
};

export default Footer;
