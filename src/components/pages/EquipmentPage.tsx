import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { useEffect } from "react"


const equipmentData = {
  physiotherapy: [
    { id: 1, title: "2CH_TENS_&_MS", image: "/Images/equipment/Physiotherapy/2CH_TENS_&_MS.jpeg.jpg" },
    { id: 2, title: "3_COMBO", image: "/Images/equipment/Physiotherapy/3_COMBO.jpg" },
    { id: 3, title: "4 COMBO", image: "/Images/equipment/Physiotherapy/4 COMBO.jpeg.jpg" },
    { id: 4, title: "8-CH_TENS", image: "/Images/equipment/Physiotherapy/8-CH_TENS.jpeg.jpg" },
    { id: 5, title: "Click-it-hot-pad", image: "/Images/equipment/Physiotherapy/click-it-hot-pad.jpeg.jpg" },
    { id: 6, title: "Cryotherapy", image: "/Images/equipment/Physiotherapy/cryotherapy.jpeg.jpg" },
    { id: 7, title: "DIGI-4-CH-TENS", image: "/Images/equipment/Physiotherapy/DIGI-4-CH-TENS.jpeg.jpg" },
    { id: 8, title: "DIGI-Ultra Sound Therapy", image: "/Images/equipment/Physiotherapy/DIGI-US.jpeg.jpg" },
    { id: 9, title: "Hot&Cold-Therapy", image: "/Images/equipment/Physiotherapy/Hot&Cold-Therapy.jpeg.jpg" },
    { id: 10, title: "ift+us", image: "/Images/equipment/Physiotherapy/ift+us.jpeg.jpg" },
    { id: 11, title: "IRR-Adjustable", image: "/Images/equipment/Physiotherapy/IRR-Adjustable.jpeg.jpg" },
    { id: 12, title: "LCD-2CH TENS", image: "/Images/equipment/Physiotherapy/LCD-2CH TENS.jpeg.jpg"},
    { id: 13, title: "LCD-4-CH(TENS-MS)", image: "/Images/equipment/Physiotherapy/LCD-4-CH(TENS-MS).jpeg.jpg" },
    { id: 14, title: "Manual-Portable_2_CH-tens-Ms", image: "/Images/equipment/Physiotherapy/Manual-Portable_2_CH-tens-Ms.jpeg.jpg" },
    // { id: 15, title: "SWD-300W", image: "/Images/equipment/Physiotherapy/SWD-300W.jpg" },
    { id: 16, title: "Ultrasound-therapy", image: "/Images/equipment/Physiotherapy/Ultrasound-therapy.jpeg.jpg" },
    { id: 17, title: "US&MS", image: "/Images/equipment/Physiotherapy/US&MS.jpeg.jpg" },
    { id: 18, title: "WAX-BATH", image: "/Images/equipment/Physiotherapy/WAX-BATH.jpeg.jpg" },
    { id: 19, title: "Traction Bed", image: "/Images/equipment/Physiotherapy/bed.jpeg.jpg" },
    { id: 20, title: "Shortwave-diathermy", image: "/Images/equipment/Physiotherapy/shortwave-diathermy.jpeg.jpg" },
    { id: 21, title: "GMS-CPM", image: "/Images/equipment/Physiotherapy/GMS-CPM.jpg" },
    { id: 22, title: "Combo-TENS-MS", image: "/Images/equipment/Physiotherapy/combo-TENS-MS.jpeg.jpg" },
    { id: 23, title: "Moist heat therapy (Hydrocollator)", image: "/Images/equipment/Physiotherapy/Moist heat therapy (Hydrocollator).jpg" },
     // add more physiotherapy images
  ],
  
  rehab: [
    { id: 23, title: "Rehab  Robotics gloves", image: "/Images/equipment/Rehabilitation/37.jpeg.jpg" },
    { id: 24, title: "ANKEL-EXERCISER", image: "/Images/equipment/Rehabilitation/ANKEL-EXERCISER.jpeg.jpg" },
    { id: 25, title: "Balance-pad", image: "/Images/equipment/Rehabilitation/balance-pad.jpg" },
    { id: 26, title: "Balance-wood", image: "/Images/equipment/Rehabilitation/Balance-wood.jpg" },
    { id: 27, title: "Rehab Standing Support Trainer", image: "/Images/equipment/Rehabilitation/Rehab.jpg" },
    { id: 28, title: "Child&Adult-Sitting-With-Standing-frame", image: "/Images/equipment/Rehabilitation/Child&Adult-Sitting-With-Standing-frame(2).jpeg.jpg" },
    { id: 29, title: "Finger-exercisers", image: "/Images/equipment/Rehabilitation/finger-exercisers.jpg" },
    { id: 30, title: "Finger-Ladder", image: "/Images/equipment/Rehabilitation/Finger-Ladder.jpeg.jpg" },
    // { id: 31, title: "Rehab Vibrator", image: "/Images/equipment/Rehabilitation/g5-717.jpeg.jpg" },
    { id: 32, title: "Gait-trainer", image: "/Images/equipment/Rehabilitation/gait-trainer.jpeg.jpg" },
    { id: 33, title: "Manual-Tilting-Table", image: "/Images/equipment/Rehabilitation/manual-tilting-table.jpg" },
    { id: 34, title: "Massager Gun", image: "/Images/equipment/Rehabilitation/massager.jpeg.jpg" },
    { id: 35, title: "IRR", image: "/Images/equipment/Rehabilitation/Merphy-IRR.jpeg.jpg" },
    { id: 36, title: "Multishape-peg-board", image: "/Images/equipment/Rehabilitation/multishape-peg-board.jpg" },
    { id: 37, title: "Parapligiya-walker", image: "/Images/equipment/Rehabilitation/parapligiya-walker.jpg" },
    { id: 38, title: "Parllel-bar", image: "/Images/equipment/Rehabilitation/parllel-bar.jpg" },
    { id: 39, title: "PEDAL-EXERCISER", image: "/Images/equipment/Rehabilitation/PEDAL-EXERCISER.jpeg.jpg" },
    { id: 40, title: "Quadricepes-Table-Both-legs", image: "/Images/equipment/Rehabilitation/Quadricepes-Table-Both-legs.jpeg.jpg" },
    { id: 41, title: "Shoulder-wheel-roung-Big", image: "/Images/equipment/Rehabilitation/Shoulder-wheel-roung-Big.jpeg.jpg" },
    { id: 42, title: "Shoulder-wheel-supenature-and-pronature", image: "/Images/equipment/Rehabilitation/shoulder-wheel-supenature-and-pronature.jpg" },
    { id: 43, title: "Support-walker Trainer", image: "/Images/equipment/Rehabilitation/support-walker.jpeg.jpg" },
    { id: 44, title: "Traction-2-fold-Bed", image: "/Images/equipment/Rehabilitation/Traction-2-fold-Bed.jpg" },
    { id: 45, title: "Traction-split-bed", image: "/Images/equipment/Rehabilitation/traction-split-bed.jpeg.jpg" },
    { id: 46, title: "Un-weing-gait-trainer-motorized", image: "/Images/equipment/Rehabilitation/Un-weing-gait-trainer-motorized.jpeg.jpg" },
    { id: 47, title: "Rehab Vibrator", image: "/Images/equipment/Rehabilitation/WhatsApp Image 2023-12-06 at 3.51.25 PM (5).jpeg.jpg" },
    { id: 48, title: "Child-Sitting-With-Standing-frame", image: "/Images/equipment/Rehabilitation/WhatsApp Image 2023-12-06 at 3.51.25 PM (7).jpeg.jpg" },
    { id: 49, title: "Sholder Pulley", image: "/Images/equipment/Rehabilitation/WhatsApp Image 2024-07-26 at 21.00.41_15530be8.jpg" },
    { id: 50, title: "Instrument Trolley", image: "/Images/equipment/Rehabilitation/WhatsApp Image 2024-11-21 at 9.02.26 PM.jpeg.jpg" },
    { id: 51, title: "Nirmal Finger Exerciser", image: "/Images/equipment/Rehabilitation/WhatsApp Image 2024-11-21 at 9.03.40 PM (2).jpeg.jpg" },
    { id: 52, title: "Multi Exerciser Thread Mill", image: "/Images/equipment/Rehabilitation/WhatsApp Image 2024-11-21 at 9.03.40 PM.jpeg.jpg" },
    { id: 53, title: "Stare Case Corner", image: "/Images/equipment/Rehabilitation/WhatsApp Image 2024-11-21 at 9.03.41 PM (1).jpeg.jpg" },
    { id: 54, title: "Wooble Board", image: "/Images/equipment/Rehabilitation/WhatsApp Image 2024-12-23 at 11.06.41 PM.jpeg.jpg" },
    { id: 55, title: "Over Head Pulley", image: "/Images/equipment/Rehabilitation/WhatsApp Image 2024-12-24 at 8.35.44 AM.jpeg.jpg" },
    { id: 56, title: "Suspention Therapy", image: "/Images/equipment/Rehabilitation/WhatsApp Image 2024-12-24 at 8.58.35 AM.jpeg.jpg" },
    { id: 57, title: "Therapist Stool", image: "/Images/equipment/Rehabilitation/WhatsApp Image 2024-12-24 at 9.47.54 AM.jpeg.jpg" },
    { id: 58, title: "ADL Board", image: "/Images/equipment/Rehabilitation/ADL.jpg" },

    // add more rehabilitation images


  ],

  hospital: [
    { id: 59, title: "3-para-patient-monitor", image: "/Images/equipment/Hospital/3-para-patient-monitor.jpeg.jpg" },
    { id: 60, title: "AIR-BEDS", image: "/Images/equipment/Hospital/AIR-BEDS.jpeg.jpg" },
    { id: 61, title: "Autoclave", image: "/Images/equipment/Hospital/autoclave.jpeg.jpg" },
    { id: 62, title: "ECG-MACHINES", image: "/Images/equipment/Hospital/ECG-MACHINES.jpeg.jpg" },
    { id: 63, title: "6CH-ECG-Machines", image: "/Images/equipment/Hospital/ECG-Machines.jpg" },
    { id: 64, title: "OXYGEN-CONCENTRATOR", image: "/Images/equipment/Hospital/OXYGEN-CONCENTRATOR.jpeg.jpg" },
    { id: 65, title: "patient-beds", image: "/Images/equipment/Hospital/patient-beds.jpeg.jpg" },
    { id: 66, title: "PATIENT-MONITORS", image: "/Images/equipment/Hospital/PATIENT-MONITORS.jpeg.jpg" },
    { id: 67, title: "Phototherapy&warmers", image: "/Images/equipment/Hospital/phototherapy&warmers.jpeg.jpg" },
    { id: 68, title: "Suction-machine", image: "/Images/equipment/Hospital/suction-machine.jpeg.jpg" },
    { id: 69, title: "X-ray-view-Box", image: "/Images/equipment/Hospital/x-ray-view-Box.jpeg.jpg" },

    // add more hospital images
  ],
  Orthopaedic : [
    { id: 70, title: "Lumbar Support Belt", image: "/Images/equipment/orthopaedic/o1.jpg" },
    { id: 71, title: "Patient Back Rest", image: "/Images/equipment/orthopaedic/o2.jpg" },
    { id: 72, title: "Taylors Brace", image: "/Images/equipment/orthopaedic/o3.jpg" },
    { id: 73, title: "Shoulder Support", image: "/Images/equipment/orthopaedic/o4.jpg" },
    { id: 74, title: "Arm sling pouch", image: "/Images/equipment/orthopaedic/o5.jpg" },
    { id: 75, title: "Knee Inmobilizer", image: "/Images/equipment/orthopaedic/o6.jpg" },
    // { id: 76, title: "Ankle Brace", image: "/Images/equipment/orthopaedic/o7.jpg" },
    { id: 77, title: "Ankle Brace", image: "/Images/equipment/orthopaedic/o8.jpg" },
    { id: 78, title: "Crutches", image: "/Images/equipment/orthopaedic/o9.jpg" },
    { id: 79, title: "Shoulder support walker", image: "/Images/equipment/orthopaedic/o10.jpg" },
    // { id: 80, title: "Orthopaedic Equipment 11", image: "/Images/equipment/orthopaedic/o11.jpg" },
    { id: 81, title: "Walking Stick", image: "/Images/equipment/orthopaedic/o12.jpg" },
    { id: 82, title: "Electric Head Pad", image: "/Images/equipment/orthopaedic/o13.jpg" },
    // { id: 83, title: "Orthopaedic Equipment 14", image: "/Images/equipment/orthopaedic/o14.jpg" },
    { id: 84, title: "Wrist Support", image: "/Images/equipment/orthopaedic/o15.jpg" },
    { id: 85, title: "Cock up splint", image: "/Images/equipment/orthopaedic/o16.jpg" },
    { id: 86, title: "Dynamic Cock up splint", image: "/Images/equipment/orthopaedic/o17.jpg" },
    { id: 87, title: "Ealbow Cap", image: "/Images/equipment/orthopaedic/o18.jpg" },
    { id: 88, title: "Shoulder immobilizer", image: "/Images/equipment/orthopaedic/o19.jpg" },
    { id: 89, title: "Open patella", image: "/Images/equipment/orthopaedic/o20.jpg" },
    { id: 90, title: "Adjustable Angle Knee Orthoptic Supporter ", image: "/Images/equipment/orthopaedic/o21.jpg" },
    // { id: 91, title: "Orthopaedic Equipment 22", image: "/Images/equipment/orthopaedic/o22.jpg" },
    { id: 92, title: "Knee Cap", image: "/Images/equipment/orthopaedic/o23.jpg" },
    { id: 93, title: "Foot drop splint", image: "/Images/equipment/orthopaedic/o24.jpg" },
    { id: 94, title: "Maternity belt", image: "/Images/equipment/orthopaedic/o25.jpg" },
    // { id: 95, title: "Orthopaedic Equipment 26", image: "/Images/equipment/orthopaedic/o26.jpg" },

    // add more orthopaedic images
  ]
}




export default function EquipmentPage() {

  
  useEffect(() => {
    // check if there's a hash (#critical, #physiotherapy, etc.)
    if (window.location.hash) {
      const id = window.location.hash.substring(1) // remove #
      const element = document.getElementById(id)
      if (element) {
        // smooth scroll into view
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }, [])



  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <section className="relative overflow-hidden bg-gradient-to-r from-[#8caccc] to-[#e9f1f8] pt-20">
        <main className="flex-1 container mx-auto px-4 py-10">
          <h1 className="text-4xl font-bold text-center mb-10">Our Equipments</h1>

          {/* Loop through categories */}
          {Object.entries(equipmentData).map(([categoryKey, items]) => (
            <div key={categoryKey} id={categoryKey} className="mb-16">
              <h2 className="text-3xl font-semibold mb-6 capitalize text-center">
                {categoryKey.replace("-", " ")} Equipment
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((item) => (
                  <Card key={item.id} className="group overflow-hidden shadow-md">
                    <div className="w-full h-40 flex justify-center items-center bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="object-contain max-h-full group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <CardContent className="p-4 text-center">
                      <h2 className="text-xl font-semibold mb-4">{item.title}</h2>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <br />
               <a 
     href="https://wa.me/7702512557" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-foreground hover:text-primary transition-smooth">
      <Button 
      variant="default" 
      className="w-full"
    >
      More Items..
    </Button>
    </a>
            </div>
            
          ))}
        </main>
      </section>

      <Footer />
    </div>
  )
}
