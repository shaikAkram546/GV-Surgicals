import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-foreground">
      <div className="container mx-auto px-4 py-16 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-medical overflow-hidden">
                  <img
                    src="/Images/Company_Logo.jpg"
                    alt="GV Surgical Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">GV SURGICAL</h3>
                <p className="text-sm text-muted-foreground">& SERVICES</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Your trusted partner for premium medical equipment across
              Telangana. Specializing in physiotherapy, rehabilitation, and
              hospital equipment.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, link: "#" },
                { Icon: Linkedin, link: "#" },
                {
                  Icon: Instagram,
                  link: "https://www.instagram.com/gvsurgical_hyderabad?utm_source=qr&igsh=MTFuZzk3NTFtZDg0cg==",
                },
                { Icon: Youtube, link: "https://www.youtube.com/@gvsurgical" },
              ].map(({ Icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Equipment Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Equipment Range</h4>
            <ul className="space-y-3">
              {[
                "Physiotherapy Equipment",
                "Rehabilitation Machines",
                "Hospital Equipment",
                "Slimming Machines",
                "Acupressure Equipment",
                "Critical Care Devices",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#equipment"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Equipment Installation",
                "Technical Support",
                "Training Programs",
                "Maintenance & Repair",
                "Delivery & Logistics",
                "Consultation Services",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <a
                    href="tel:+917997069722"
                    className="hover:text-primary transition-colors hover:underline"
                  >
                    <div className="text-foreground">+91 79970 69722</div>
                  </a>
                  <a
                    href="tel:+917702512557"
                    className="hover:text-primary transition-colors hover:underline"
                  >
                    <div className="text-muted-foreground">+91 77025 12557</div>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <a
                  href="mailto:gvsurgical2@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  gvsurgical2@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <div>Chaitanyapuri, Hyderabad</div>
                  <div>Sitaphalmandi Secunderabad</div>
                  <div>Gajwel, Siddipet District</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <div>Mon-Sat: 9:00 AM - 7:00 PM</div>
                  <div>Emergency: 24/7 Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 GV Surgical & Services. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Warranty Information
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
