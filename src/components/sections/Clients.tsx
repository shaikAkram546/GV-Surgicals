export const Clients = () => {
  const clients = [
    "Osmania General Hospital",
    "Gandhi Hospital",
    "JSPS Homeopathy Hospitals",
    "Gud Life Hospitals",
    "Gold Age Hospitals",
    "CNR Hospital",
    "Ozone Hospital",
    "Physiotherapy Clinics & Rehabilitation Centres",
    "Government General Hospitals",
    "Senior Citizen Association Trusts",
    "C.C Shroff Memorial Hospital",
    "Siddarth Hospital",
    "Vijaya Health Care Hospital",
    "NIEPID Physiotherapy Department"
  ];

  return (
      <section
      id="clients"
      className="relative overflow-hidden bg-gradient-to-r to-[#8caccc] from-[#e9f1f8] pt-20"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Trusted Clients</h2>
        <p className="text-gray-600 mb-10">
          We are proud to serve and be trusted by leading healthcare organizations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="p-4 bg-gray-200 shadow-md rounded-xl hover:shadow-lg transition"
            >
              <p className="font-extrabold text-gray-800">{client}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
