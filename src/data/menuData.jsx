const menuData = {
  "Computer & Laptop": {
    subCategories: [
      {
        key: "Computer & Laptops",
        label: "Computer & Laptops",
        leftList: [
          "Prebuilt PCs",
          "All-in-One PCs",
          "Custom PCs",
        ],
        columns: [
          {
            title: "Laptops",
            items: [
              "Gaming Laptops",
              "Business Laptops",
              "Students Laptops",
              "Creator /Editing Laptops",
              "Budget Laptops",
            ],
          },
          {
            title: "Others",
            items: [
              "2-in-1 Convertibles",
            ],
          },
          // {
          //   title: "Top Add-Ons",
          //   items: ["Socks", "Apparel", "Bags", "Gift Cards"],
          // },
        ],
          promo: {
        image: "/images/promo/laptops.jpg",
        tag: "Laptop Deals",
        title: "Up to 40% OFF",
        desc: "Gaming & Business Laptops"
      }
      },

      {
        key: "PC Components",
        label: "PC Components",
        leftList: ["CPU","GPU","Motherboard","RAM"],
        columns: [
          {
            title: "Other Components",
            items: ["SSD/HDD", "Power Supply", "CPU Coolers", "PC Cases","Thermal Paste","Expansion Cards"],
          },
          // {
          //   title: "Apparel",
          //   items: ["T-Shirts", "Hoodies", "Sweaters"],
          // },
          // {
          //   title: "Accessories",
          //   items: ["Insoles", "Care Kits"],
          // },
        ],
         promo: {
        image: "/images/promo/laptops.jpg",
        tag: "Laptop Deals",
        title: "Up to 40% OFF",
        desc: "Gaming & Business Laptops"
      }
        
      },

      {
        key: "Monitors & Displays",
        label: "Monitor",
        leftList: ["Gaming Monitor", "Professional Monitor"],
        columns: [
          {
            title: "Structure",
            items: ["Curved Monitor", "UltraWide Monitor"],
          },
          {
            title: "Others",
            items: ["Portable Monitor", "Monitor Arms"],
          },

          // {
          //   title: "More",
          //   items: ["Gift Cards"],
          // },
        ],
        
      promo: {
        image: "/images/promo/components.jpg",
        tag: "Build Your PC",
        title: "Top Components",
        desc: "Latest CPUs & GPUs"
      }
      },
    ],
  },

  //mobile start here
  Mobile : {
    subCategories: [
      {
        key: "Mobiles & Tablets",
        label: "Mobiles",
        leftList: [
          "Android Phones",
          "iPhones",
          "iPads",
        ],
        columns: [
          {
            title: "Tablets",
            items: [
              "Android Tablet",
              "Drawing Tablet",
              
            ],
          },
          {
            title: "Others",
            items: [
              "Budget Phones",
               "Flagship Phones",
              "Gaming Phones"
            ],
          },
          // {
          //   title: "Top Add-Ons",
          //   items: ["Socks", "Apparel", "Bags", "Gift Cards"],
          // },
        ],
         promo: {
        image: "/images/promo/components.jpg",
        tag: "Build Your PC",
        title: "Top Components",
        desc: "Latest CPUs & GPUs"
      }
      },

      {
        key: "Mobile Accessories",
        label: "Mobile Accessories",
        leftList: ["Chargers","Fast Cables","Power Banks","Earphones"],
        columns: [
          {
            title: "Other Components",
            items: ["Wireless Buds", "Phone Cases", "Screen Protectors", "Phone holders","OTG Adapters"],
          },
          // {
          //   title: "Apparel",
          //   items: ["T-Shirts", "Hoodies", "Sweaters"],
          // },
          // {
          //   title: "Accessories",
          //   items: ["Insoles", "Care Kits"],
          // },
        ],
         promo: {
        image: "/images/promo/components.jpg",
        tag: "Build Your PC",
        title: "Top Components",
        desc: "Latest CPUs & GPUs"
      }
      },

      {
        key: "Power, Charging & Cooling",
        label: "Power",
        leftList: ["UPS", "Power Extensions","Surge Protectors"],
        columns: [
          {
            title: "Charging",
            items: ["Inverters", "Laptop CHargers","Mobile Chargers"],
          },
          {
            title: "Cooling",
            items: ["Case Fans", "Liquid Cooling","Laptop Cooling Pads"],
          },
          // {
          //   title: "More",
          //   items: ["Gift Cards"],
          // },
        ],
         promo: {
        image: "/images/promo/components.jpg",
        tag: "Build Your PC",
        title: "Top Components",
        desc: "Latest CPUs & GPUs"
      }
      },
    ],
  },
  Accessories: {
    subCategories: [
      {
        key: "Laptop Accessories",
        label: "Laptop Accessories",
        leftList: [
          "Laptop Bags",
          "Laptop Stands",
          "Cooling Pads",
        ],
        columns: [
          {
            title: "External",
            items: [
              "External Keyboard",
              "External Mouse",
            ],
          },
          {
            title: "Others",
            items: [
              "Privacy Screens",
              "Docking Stations",
              "Chargers",
            ],
          },
        
        ],
         promo: {
        image: "/images/promo/components.jpg",
        tag: "Build Your PC",
        title: "Top Components",
        desc: "Latest CPUs & GPUs"
      }
      },

      {
        key: "Peripherals & Input Devices",
        label: "Peripherals & input Devices",
        leftList: ["Keyboards","Mouse","Game Controllers",],
        columns: [
          {
            title: "Other Components",
            items: ["Drawing Tablets", "Barcode Scanners", "Biometric Devices"],
          },
          // {
          //   title: "Apparel",
          //   items: ["T-Shirts", "Hoodies", "Sweaters"],
          // },
          // {
          //   title: "Accessories",
          //   items: ["Insoles", "Care Kits"],
          // },
        ],
         promo: {
        image: "/images/promo/components.jpg",
        tag: "Build Your PC",
        title: "Top Components",
        desc: "Latest CPUs & GPUs"
      }
      },

      {
        key: "Cables, Adapters & Hubs",
        label: "Cables, Adapters & Hubs",
        leftList: ["HDMI", "Display","LAN"],
        columns: [
          {
            title: "Hubs",
            items: ["USB Hubs ", "Type-C Hubs"],
          },
          {
            title: "Adapter",
            items: ["Audio Adapters", "USB Type-C"],
          },
          // {
          //   title: "More",
          //   items: ["Gift Cards"],
          // },
        ],
         promo: {
        image: "/images/promo/components.jpg",
        tag: "Build Your PC",
        title: "Top Components",
        desc: "Latest CPUs & GPUs"
      }
      },
    ],
  },
  Gaming: {
    subCategories: [
      {
        key: "Video Games Consoles & Accessories",
        label: "Video Games Consoles & Accessories",
        leftList: [
          "PlayStation",
          "Xbox",
          "Handheld Consoles",
          "Console Headsets",
        ],
        columns: [
          {
            title: "Controllers",
            items: [
              "Wireless Controllers",
              "Wired Controllers",
            ],
          },
          {
            title: "Others",
            items: [
              "Racing Wheels",
              "Charging Docks",
              "Skins & Grips",
            ],
          },
          // {
          //   title: "Top Add-Ons",
          //   items: ["Socks", "Apparel", "Bags", "Gift Cards"],
          // },
        ],
         promo: {
        image: "/images/promo/components.jpg",
        tag: "Build Your PC",
        title: "Top Components",
        desc: "Latest CPUs & GPUs"
      }
      },

      {
        key: "Gaming Furniture",
        label: "Gaming Furniture",
        leftList: ["Gaming Chairs","Gaming Desks",],
        columns: [
          {
            title: "Other Components",
            items: ["Height-Adjustable Desks", "Monitor Stands", "Foot Rests"],
          },
          // {
          //   title: "Apparel",
          //   items: ["T-Shirts", "Hoodies", "Sweaters"],
          // },
          // {
          //   title: "Accessories",
          //   items: ["Insoles", "Care Kits"],
          // },
        ],
         promo: {
        image: "/images/promo/components.jpg",
        tag: "Build Your PC",
        title: "Top Components",
        desc: "Latest CPUs & GPUs"
      }
      },

      // {
      //   key: "Cables, Adapters & Hubs",
      //   label: "Cables,Adapters & Hubs",
      //   leftList: ["HDMI", "Display","LAN"],
      //   columns: [
      //     {
      //       title: "Hubs",
      //       items: ["USB Hubs ", "Type-C Hubs"],
      //     },
      //     {
      //       title: "Adapter",
      //       items: ["Audio Adapters", "USB Type-C"],
      //     },
          // {
          //   title: "More",
          //   items: ["Gift Cards"],
          // },
        // ],
      // },
    ],
  },
  "Smart & Office": {
    subCategories: [
      {
        key: "Smart Gadget",
        label: "Smart Gadget",
        leftList: [
          "Smart Watches",
          "Fitness Bands",
          "VR Headsets",
        ],
        columns: [
          {
            title: "others",
            items: [
              "Smart Glasses",
              "Smart Trackers"
            ],
          },
          // {
          //   title: "Others",
          //   items: [
          //     "2-in-1 Convertibles",
          //   ],
          // },
          // {
          //   title: "Top Add-Ons",
          //   items: ["Socks", "Apparel", "Bags", "Gift Cards"],
          // },
        ],
         promo: {
        image: "/images/promo/components.jpg",
        tag: "Build Your PC",
        title: "Top Components",
        desc: "Latest CPUs & GPUs"
      }
      },

      {
        key: "Office Electronics",
        label: "Office Electronics",
        leftList: ["Printers","Scanners",],
        columns: [
          {
            title: "Printers",
            items: ["Receipt Printers", "Label Printers",],
          },
          {
            title: "others",
            items: ["POS Systems", "Projectors",],
          },
          // {
          //   title: "Accessories",
          //   items: ["Insoles", "Care Kits"],
          // },
        ],
         promo: {
        image: "/images/promo/components.jpg",
        tag: "Build Your PC",
        title: "Top Components",
        desc: "Latest CPUs & GPUs"
      }
      },

      {
        key: "Security & Surveillance",
        label: "Cameras",
        leftList: ["Indoor Cameras", "Outdoor Cameras","Smart Door Cameras"],
        columns: [
          {
            title: "Accessories",
            items: ["Mounting Accessories", "SD Cards"],
          },
          {
            title: "Others",
            items: ["Wireless CCTV Cameras", "NVR"],
          },
          // {
          //   title: "More",
          //   items: ["Gift Cards"],
          // },
        ],
         promo: {
        image: "/images/promo/components.jpg",
        tag: "Build Your PC",
        title: "Top Components",
        desc: "Latest CPUs & GPUs"
      }
      },
    ],
  },

   "Deals & Support": {
    subCategories: [
      {
        key: "Deals & Combo",
        label: "Deals & Combo",
        leftList: [
          "Gaming Setup Combos",
          "Office Setup Combos",
        
        ],
        columns: [
          {
            title: "Others Combo",
            items: [
              "Creator Combos",
              "Student Combos",
            
              
            ],
          },
          {
            title: "Others",
            items: [
              "Clearance Sale",
            ],
          },
          // {
          //   title: "Top Add-Ons",
          //   items: ["Socks", "Apparel", "Bags", "Gift Cards"],
          // },
        ],
         promo: {
        image: "/images/promo/components.jpg",
        tag: "Build Your PC",
        title: "Top Components",
        desc: "Latest CPUs & GPUs"
      }
      },

      {
        key: "Support, Warranty & Services",
        label: "Support, Warranty & Services",
        leftList: ["Warranty Registration","RMA/Service Requests",],
        columns: [
          {
            title: "Services",
            items: ["Installation Services", "Delivery & Returns", "EMI Help",],
          },
          {
            title: "Others",
            items: ["Drivers & Software", "Corporate Orders",],
          },
          // {
          //   title: "Accessories",
          //   items: ["Insoles", "Care Kits"],
          // },
        ],
         promo: {
        image: "/images/promo/components.jpg",
        tag: "Build Your PC",
        title: "Top Components",
        desc: "Latest CPUs & GPUs"
      }
      },

    
    ],
  },
 Others: {
    subCategories: [
      {
        key: "Storage & Networking",
        label: "Storage & Networking",
        leftList: [
          "Internal SSD",
          "External SSD",
          "HDD",
          
        ],
        columns: [
          {
            title: "Networking",
            items: [
              "Routers",
              "WiFi Adapters",
              "Network Switch",
              "LAN Cables",
            ],
          },
          {
            title: "Others",
            items: [
              "Pendrives",
              "Memory Cards",
            ],
          },
          // {
          //   title: "Top Add-Ons",
          //   items: ["Socks", "Apparel", "Bags", "Gift Cards"],
          // },
        ],
         promo: {
        image: "/images/promo/components.jpg",
        tag: "Build Your PC",
        title: "Top Components",
        desc: "Latest CPUs & GPUs"
      }
      },

      {
        key:"Audio, Camera & Video",
        label: "Audio, Camera & Video",
        leftList: ["Gaming Headsets","Speakers","Microphones",],
        columns: [
          {
            title: "Cameras & Video",
            items: ["Action Cameras","Vlogging Cameras", "Webcams", "Conference Cameras","Tripods"],
          },
          // {
          //   title: "Apparel",
          //   items: ["T-Shirts", "Hoodies", "Sweaters"],
          // },
          // {
          //   title: "Accessories",
          //   items: ["Insoles", "Care Kits"],
          // },
        ],
         promo: {
        image: "/images/promo/components.jpg",
        tag: "Build Your PC",
        title: "Top Components",
        desc: "Latest CPUs & GPUs"
      }
      },

     
    ],
  },


};

export default menuData;