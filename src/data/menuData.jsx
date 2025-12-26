import laptop from "../assets/menudata/1.png";
import desktop from "../assets/menudata/2.png";
import monitor from "../assets/menudata/3.png";
import tablet from "../assets/menudata/4.png";
import mobileAccess from "../assets/menudata/5.png";
import charger from "../assets/menudata/6.png";
import stands from "../assets/menudata/7.png";
import gamecontroller from "../assets/menudata/8.png";
import adapter from "../assets/menudata/9.png";
import controller from "../assets/menudata/10.png";
import furniture from "../assets/menudata/12.png";
import watch from "../assets/menudata/13.png";
import printer from "../assets/menudata/16.png";
import camera from "../assets/menudata/19.png";
import combo from "../assets/menudata/21.png";
import support from "../assets/menudata/22.png";
import router from "../assets/menudata/24.png";
import headphone from "../assets/menudata/25.png";

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
        image: laptop,
        tag: "Laptop Deals",
        title: "Up to 40% OFF",
        desc: "Gaming & Business Laptops "
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
  image: desktop,
  tag: "PC Essentials",
  title: "Special PC Discounts",
  desc: "Home, Business & Gaming Desktops"
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
  image: monitor,
  tag: "Gaming Monitors",
  title: "Smooth Visuals, Big Savings",
  desc: "High Refresh & Curved Displays"
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
  image: tablet,
  tag: "Tablet Deals",
  title: "Up to 30% OFF",
  desc: "Android, iPad & Learning Tablets"
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
  image: mobileAccess,
  tag: "Mobile Essentials",
  title: "Style & Protect",
  desc: "Covers, Screen Guards & Stands"
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
  image: charger,
  tag: "Charging Essentials",
  title: "Power Up & Save",
  desc: "Fast Chargers, Cables & Power Banks"
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
  image: stands,
  tag: "Laptop Essentials",
  title: "Work Smarter, Save More",
  desc: "Docking, Stands & Carry Bags"
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
  image: gamecontroller,
  tag: "Peripheral Deals",
  title: "Up to 35% OFF",
  desc: "Keyboards, Mouse & Controllers"
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
  image: adapter,
  tag: "USB-C Essentials",
  title: "Connect More, Spend Less",
  desc: "Fast Cables, Adapters & Multi-Ports"
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
  image: controller,
  tag: "Gaming Deals",
  title: "Up to 30% OFF",
  desc: "Consoles, Controllers & Games"
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
  image: furniture,
  tag: "Gaming Furniture Deals",
  title: "Up to 25% OFF",
  desc: "Gaming Chairs, Desks & Setups"
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
  image: watch,
  tag: "Future Tech",
  title: "Live Smarter",
  desc: "Watches, Trackers & IoT Devices"
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
  image: printer,
  tag: "Office Essentials",
  title: "Boost Your Workflow",
  desc: "Printers, Scanners & Office Gadgets"
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
  image: camera,
  tag: "Surveillance Essentials",
  title: "Protect What Matters",
  desc: "Indoor, Outdoor & Smart Security"
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
  image: combo,
  tag: "Special Deals",
  title: "Up to 50% OFF",
  desc: "Bundles, Combos & Exclusive Offers"
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
  image: support,
  tag: "Service Deals",
  title: "Trusted Support",
  desc: "Warranty, Repairs & Customer Care"
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
  image: router,
  tag: "Network Essentials",
  title: "Connect & Save",
  desc: "Routers, Switches & Wi-Fi Devices"
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
  image: headphone,
  tag: "Sound & Vision",
  title: "Upgrade Your Gear",
  desc: "Headphones, Speakers & Microphones"
}

      },

     
    ],
  },


};

export default menuData;