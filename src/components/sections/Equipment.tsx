import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Zap, 
  Heart, 
  Activity, 
  Stethoscope, 
  Monitor, 
  Gauge,
  ArrowRight,
  CheckCircle
} from "lucide-react"

const equipmentCategories = [
  {
    id: 1,
    title: "Physiotherapy Equipment",
    image: "/Images/equipment/physio.jpg",
    link: "/equipment#physiotherapy"
  },
 
  {
    id: 2,
    title: "Rehabilitation Equipment",
    image: "/Images/equipment/rehab.jpg",
    link: "/equipment#rehab"
  },

  {
    id: 3,
    title: "Hospital Equipment",
    image: "/Images/equipment/hospital.jpg",
    link: "/equipment#hospital"
  },
  {
    id: 4,
    title: "Orthopaedic Care Equipment",
    image: "/Images/equipment/orthopaedic/o3.jpg",
    link: "/equipment#Orthopaedic"
  }
]

export const Equipment = () => {
  return (
     <section
      id="equipment"
      className="relative overflow-hidden bg-gradient-to-r to-[#8caccc] from-[#e9f1f8] pt-20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
         <Badge 
  variant="outline" 
  className="mb-3 text-primary border-primary px-4 py-2 text-lg rounded-lg"
>
  Our Equipment Range
</Badge>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive Medical Solutions
          </h2>
      <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            From physiotherapy to critical care, we provide cutting-edge medical equipment 
            designed to enhance patient outcomes and streamline healthcare operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {equipmentCategories.map((category) => (
<Card 
  key={category.id} 
  className="relative overflow-hidden bg-gradient-to-r to-[#1a2633] from-[#e9f1f8] pt-8"
>


      {/* Image */}
      <div className="w-full h-80 overflow-hidden flex justify-center items-center">
  <img 
    src={category.image} 
    alt={category.title} 
    className="object-contain max-h-full group-hover:scale-105 transition-transform" 
  />
</div>


      {/* Title + Button */}
      <CardContent className="p-4 text-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-950 underline">{category.title}</h1>

      <Button 
  variant="outline" 
  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
  onClick={() => window.location.href = category.link}
>
  Learn More
  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
</Button>



      </CardContent>
    </Card>
  ))}
</div>

        
        <div className="text-center mt-12 mb-5">
          <a href="/equipment">
            <Button size="lg" className="shadow-medical hover:shadow-glow transition-spring ">
            View Complete Catalog
          </Button>
          </a>
        </div>
      </div>
    </section>
  )
}