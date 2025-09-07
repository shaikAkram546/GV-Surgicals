import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Wrench, 
  Truck, 
  HeadphonesIcon, 
  GraduationCap, 
  Shield, 
  Clock 
} from "lucide-react"

const services = [
  {
    title: "Equipment Installation",
    description: "Professional setup and configuration of all medical equipment with comprehensive testing",
    icon: Wrench,
    features: ["On-site installation", "System configuration", "Safety testing", "Performance validation"]
  },
  {
    title: "Delivery & Logistics",
    description: "Fast and secure delivery across Hyderabad and Gajwel with tracking support",
    icon: Truck,
    features: ["Same-day delivery", "Secure packaging", "Real-time tracking", "Insurance coverage"]
  },
  {
    title: "Technical Support",
    description: "Round-the-clock technical assistance and troubleshooting for all equipment",
    icon: HeadphonesIcon,
    features: ["24/7 helpline", "Remote diagnostics", "On-site repairs", "Emergency support"]
  },
  {
    title: "Training & Education",
    description: "Comprehensive training programs for healthcare professionals and staff",
    icon: GraduationCap,
    features: ["Equipment training", "Safety protocols", "Best practices", "Certification programs"]
  },
  {
    title: "Maintenance & Warranty",
    description: "Extended warranty coverage and preventive maintenance programs",
    icon: Shield,
    features: ["Extended warranties", "Preventive maintenance", "Replacement parts", "Service contracts"]
  },
  {
    title: "Consultation Services",
    description: "Expert consultation for equipment selection and healthcare facility planning",
    icon: Clock,
    features: ["Needs assessment", "Equipment recommendation", "Facility planning", "Budget optimization"]
  }
]

export const Services = () => {
  return (
     <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-r from-[#8caccc] to-[#e9f1f8] pt-20 "
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
                  <Badge 
  variant="outline" 
  className="mb-3 text-primary border-primary px-4 py-2 text-lg rounded-lg"
>
  Our Services
</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Complete Healthcare Solutions
          </h2>
         <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Beyond equipment supply, we provide comprehensive services to ensure your 
            healthcare facility operates at peak efficiency with minimal downtime.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card 
                key={index} 
                className="group hover:shadow-medical transition-spring hover:-translate-y-1 bg-card border-border/50"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription>
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
        

      </div>
    </section>
  )
}