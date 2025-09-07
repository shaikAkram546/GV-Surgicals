import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail, MapPin } from "lucide-react"

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top contact bar */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm border-b border-border/50">
          <div className="flex items-center gap-6 text-muted-foreground">
          <div className="flex space-x-5">
  <a href="tel:+917997069722" className="text-blue-600 hover:underline">
    +91 79970 69722
  </a>
  
  <a href="tel:+917702512557" className="text-blue-600 hover:underline">
    +91 77025 12557
  </a>
</div>

            <div className="flex items-center gap-2">
              <Mail className="h-3 w-3" />
              <span>gvsurgical2@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-3 w-3" />
              <span>Hyderabad & Gajwel</span>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden shadow-medical">
              <img 
                src="/Images/Company_Logo.jpg" 
                alt="GV Surgical Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">GV SURGICAL</h1>
              <p className="text-sm text-gray-300">& SERVICES</p>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="/#home" className="text-foreground hover:text-primary transition-smooth">Home</a>
            <a href="/#equipment" className="text-foreground hover:text-primary transition-smooth">Equipment</a>
            <a href="/#services" className="text-foreground hover:text-primary transition-smooth">Services</a>
            <a 
              href="https://wa.me/7702512557" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-foreground hover:text-primary transition-smooth"
            >
              Contact
            </a>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-4">
           <a href="https://wa.me/7702512557" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-foreground hover:text-primary transition-smooth">
             <Button variant="default" className="hidden md:flex">
              Get Quote
            </Button>
           </a>
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>

        {/* Mobile menu */}
        {isOpen && (
  <div className="lg:hidden flex flex-col gap-4 py-4 border-t border-border">
    <a 
      href="/#home" 
      className="text-foreground hover:text-primary transition-smooth"
      onClick={() => setIsOpen(false)}
    >
      Home
    </a>
    <a 
      href="/#equipment" 
      className="text-foreground hover:text-primary transition-smooth"
      onClick={() => setIsOpen(false)}
    >
      Equipment
    </a>
    <a 
      href="/#services" 
      className="text-foreground hover:text-primary transition-smooth"
      onClick={() => setIsOpen(false)}
    >
      Services
    </a>
    <a 
      href="https://wa.me/7702512557" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-foreground hover:text-primary transition-smooth"
      onClick={() => setIsOpen(false)}
    >
      Contact
    </a>

    <a 
     href="https://wa.me/7702512557" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-foreground hover:text-primary transition-smooth">
      <Button 
      variant="default" 
      className="w-full"
      onClick={() => setIsOpen(false)}
    >
      Get Quote
    </Button>
    </a>
  </div>
)}

      </div>
    </header>
  )
}
