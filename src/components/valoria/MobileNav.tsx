import { Home, Grid, ShoppingBag, Heart, User } from "lucide-react";

const MobileNav = () => {
  const navItems = [
    { icon: Home, label: "الرئيسية", href: "#", active: true },
    { icon: Grid, label: "الأقسام", href: "#categories", active: false },
    { icon: ShoppingBag, label: "السلة", href: "#cart", active: false, badge: 3 },
    { icon: Heart, label: "المفضلة", href: "#wishlist", active: false, badge: 2 },
    { icon: User, label: "حسابي", href: "#account", active: false },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="mx-2 mb-2">
        <div className="glass-panel rounded-2xl py-2 px-4">
          <div className="flex items-center justify-around">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`relative flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-colors ${
                  item.active
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <div className="relative">
                  <item.icon className="w-6 h-6" />
                  {item.badge && (
                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-r from-primary to-secondary text-white text-xs rounded-full flex items-center justify-center font-semibold">
                      {item.badge}
                    </span>
                  )}
                </div>
                <span className="text-xs font-medium">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
