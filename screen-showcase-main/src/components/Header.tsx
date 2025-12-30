import { motion } from 'framer-motion';

const navItems = ['Product', 'Teams', 'Resources', 'Community', 'Support', 'Pricing'];

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md"
      style={{ background: 'hsla(var(--background) / 0.8)' }}
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-lg bg-foreground" />
      </div>

      {/* Navigation */}
      <nav className="hidden items-center gap-6 md:flex">
        {navItems.map((item) => (
          <a
            key={item}
            href="#"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Auth Buttons */}
      <div className="flex items-center gap-4">
        <a
          href="#"
          className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:block"
        >
          Log in
        </a>
        <a
          href="#"
          className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Sign up
        </a>
      </div>
    </motion.header>
  );
};

export default Header;
