export const servicesData: Record<string, {
  includes: string[];
  excludes: string[];
  faqs: { question: string; answer: string; }[];
}> = {
  "electrician": {
    includes: [
      "Wiring and rewiring of rooms",
      "Switchboard installation and repair",
      "Ceiling fan and light installation",
      "MCB and fuse replacement",
      "Fault finding and short circuit repair",
      "Inverter setup and battery connection"
    ],
    excludes: [
      "Major wall chiseling without prior notice",
      "Cost of spare parts or wires (charged at actuals)",
      "Appliance repair (like TV, Fridge)"
    ],
    faqs: [
      { question: "Do you provide electrical wires and switches?", answer: "Our professionals can procure the required materials for you, but the cost of spare parts and materials will be added to your final bill." },
      { question: "Is there a warranty on electrical repairs?", answer: "Yes, we offer a 30-day service warranty on all our electrical repairs." },
      { question: "Can the electrician fix my broken TV?", answer: "No, electricians handle wiring, switches, and fixtures. For appliances like TVs, please book an appliance repair specialist." }
    ]
  },
  "plumbing": {
    includes: [
      "Leak detection and fixing",
      "Tap and washbasin installation",
      "Toilet flush and jet spray repair",
      "Water tank cleaning and pipe connection",
      "Blockage removal from drains and sinks",
      "Motor pump installation"
    ],
    excludes: [
      "Major civil work or breaking of tiles",
      "Cost of replacement taps, pipes, or sanitaryware",
      "Underground pipe replacement"
    ],
    faqs: [
      { question: "Will the plumber bring spare parts?", answer: "The plumber carries basic tools. If specific parts are needed, they will purchase them locally and add the cost to your bill." },
      { question: "Do you repair water heaters / geysers?", answer: "Basic plumbing connections for geysers are included, but internal heating element repairs require an electrician." },
      { question: "How quickly can a plumber arrive for an emergency?", answer: "We aim to dispatch a professional within 60 minutes for emergency leakages." }
    ]
  },
  "ac-repair": {
    includes: [
      "Deep cleaning of indoor and outdoor units",
      "Gas leak detection and refilling",
      "Compressor repair and replacement",
      "Cooling issue diagnosis",
      "AC installation and uninstallation",
      "PCB board repair"
    ],
    excludes: [
      "Cost of refrigerant gas (charged separately if needed)",
      "Masonry work for wall holes",
      "Transportation of AC during shifting"
    ],
    faqs: [
      { question: "Is AC gas refilling included in the standard service?", answer: "No, standard service covers deep cleaning. Gas refilling is a separate package." },
      { question: "Do you service all brands of ACs?", answer: "Yes, our technicians are trained to service all major brands including LG, Samsung, Daikin, and Voltas." },
      { question: "How often should I service my AC?", answer: "We recommend a deep cleaning service at least twice a year, ideally before and after the summer season." }
    ]
  },
  "cctv": {
    includes: [
      "Installation of dome and bullet cameras",
      "DVR / NVR setup and configuration",
      "Mobile app setup for live viewing",
      "Hard drive installation for recording",
      "Cable laying and clipping",
      "Troubleshooting existing camera issues"
    ],
    excludes: [
      "Cost of cameras, DVR, and cables",
      "Concealed wiring inside walls",
      "Internet router configuration issues"
    ],
    faqs: [
      { question: "Can you install cameras I bought online?", answer: "Absolutely. We offer installation-only services where you provide the hardware." },
      { question: "Do you provide a warranty on CCTV installation?", answer: "We provide a 30-day warranty on our installation workmanship. Hardware warranties depend on the brand." },
      { question: "Can I view the cameras on my phone?", answer: "Yes, our technicians will configure the mobile app for you to view live footage anywhere, provided you have an active internet connection." }
    ]
  },
  "cleaning": {
    includes: [
      "Deep cleaning of all rooms",
      "Dusting of all surfaces and furniture",
      "Vacuuming and mopping of floors",
      "Cleaning of mirrors and glass surfaces",
      "Emptying trash bins",
      "Sanitizing high-touch areas"
    ],
    excludes: [
      "Moving heavy furniture",
      "Cleaning of exterior windows",
      "Deep stain removal from carpets",
      "Pest control services"
    ],
    faqs: [
      { question: "Do I need to provide cleaning supplies?", answer: "No, our professionals come fully equipped with industry-grade cleaning supplies and equipment." },
      { question: "Are your professionals verified?", answer: "Absolutely. Every professional undergoes strict background checks." },
      { question: "What if I am not satisfied?", answer: "We offer a 100% Satisfaction Guarantee and will arrange a free rework within 24 hours." }
    ]
  },
  "carpenter": {
    includes: [
      "Door lock and hinge replacement",
      "Furniture assembly (IKEA, etc.)",
      "Custom wardrobe and cabinet making",
      "Window frame repair",
      "Sofa frame repair",
      "Wooden polishing and varnishing"
    ],
    excludes: [
      "Cost of wood, plywood, or laminates",
      "Upholstery fabric changing",
      "Major civil structural work"
    ],
    faqs: [
      { question: "Can you build custom furniture from a picture?", answer: "Yes, our expert carpenters can replicate designs based on images and measurements provided." },
      { question: "Do you polish old wooden furniture?", answer: "Yes, we offer sanding, polishing, and varnishing services to restore old wooden furniture." },
      { question: "Who buys the raw materials?", answer: "You can purchase them, or our carpenter can procure them for you and provide the original bills." }
    ]
  },
  "painter": {
    includes: [
      "Interior wall painting",
      "Exterior building painting",
      "Wall putty and primer application",
      "Texture painting and stencils",
      "Wood and grill painting",
      "Post-painting cleanup"
    ],
    excludes: [
      "Cost of paint and primer (unless a package is chosen)",
      "Major wall crack repairing (requires masonry)",
      "Moving heavy furniture"
    ],
    faqs: [
      { question: "Do you help with color selection?", answer: "Yes, our experts can provide a shade card and help you select the best combinations." },
      { question: "How long does it take to paint a 2BHK?", answer: "A standard 2BHK usually takes 3-4 days including putty, primer, and two coats of paint." },
      { question: "Will you cover the furniture before painting?", answer: "Yes, our team uses masking tape and drop cloths to protect your furniture and floors." }
    ]
  },
  "computer-repair": {
    includes: [
      "Windows / OS installation",
      "Virus and malware removal",
      "Hard drive to SSD upgrade",
      "RAM upgrade",
      "Laptop screen and keyboard replacement",
      "Data recovery and backup"
    ],
    excludes: [
      "Cost of software licenses (Windows, Antivirus)",
      "Cost of hardware components (SSD, RAM)",
      "Advanced motherboard chip-level repair"
    ],
    faqs: [
      { question: "Is my data safe during repair?", answer: "Yes, we prioritize data safety. However, we highly recommend taking a backup before handing over the device for OS installations." },
      { question: "Can you speed up my slow laptop?", answer: "Absolutely. Most slow laptops can be significantly sped up by upgrading from an HDD to an SSD and adding RAM." },
      { question: "Do you repair Apple MacBooks?", answer: "Yes, we have specialists trained in Mac OS troubleshooting and MacBook hardware repairs." }
    ]
  }
};
