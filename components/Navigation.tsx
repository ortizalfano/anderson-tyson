import { Button } from "./ui/button";
import { Moon, Sun, Phone } from "lucide-react";
import { AndersonTysonLogo } from "./AndersonTysonLogo";
import { ContactDialog } from "./ContactDialog";

interface NavigationProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export function Navigation({ darkMode, onToggleDarkMode }: NavigationProps) {

  return (
    <nav className="border-b border-blue-900 dark:border-blue-900 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <AndersonTysonLogo size="md" className="drop-shadow-sm" showWordmark={true} />
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-2">
            {/* Contact button */}
            <ContactDialog>
              <Button
                variant="outline"
                size="sm"
                className="h-8 px-3 border-blue-900 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-blue-900 dark:text-blue-400"
              >
                <Phone className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">Contact</span>
              </Button>
            </ContactDialog>

            {/* Dark mode toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={onToggleDarkMode}
              className="h-8 w-8 p-0 border-blue-900 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/20"
            >
              {darkMode ? (
                <Sun className="h-4 w-4 text-blue-900 dark:text-blue-400" />
              ) : (
                <Moon className="h-4 w-4 text-blue-900 dark:text-blue-400" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}