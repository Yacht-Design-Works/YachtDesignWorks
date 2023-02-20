var APP_DATA = {
  "scenes": [
    {
      "id": "0-salon",
      "name": "Salon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.80738696208273,
        "pitch": 0.44036522094284436,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": 0.6540808360380019,
          "pitch": 0.3781630025008216,
          "rotation": 3.141592653589793,
          "target": "1-galley"
        },
        {
          "yaw": 1.7800857401814483,
          "pitch": 0.1360390924990611,
          "rotation": 3.141592653589793,
          "target": "2-helm-lounge"
        },
        {
          "yaw": 1.1842507776784572,
          "pitch": 0.23261360880908555,
          "rotation": 8.63937979737193,
          "target": "3-hallway_aft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-galley",
      "name": "Galley",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.4464033148942477,
        "pitch": 0.5737941898444703,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": 2.4082202324826394,
          "pitch": 0.35463195541002435,
          "rotation": 9.42477796076938,
          "target": "0-salon"
        },
        {
          "yaw": 1.058600057426851,
          "pitch": 0.06073999576855016,
          "rotation": 3.141592653589793,
          "target": "2-helm-lounge"
        },
        {
          "yaw": 0.4223769900419061,
          "pitch": 0.29390486886359746,
          "rotation": 3.141592653589793,
          "target": "3-hallway_aft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-helm-lounge",
      "name": "Helm Lounge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.3987747542575324,
        "pitch": 0.6280366617409037,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": 1.525354142677088,
          "pitch": 0.2973405684778321,
          "rotation": 3.141592653589793,
          "target": "0-salon"
        },
        {
          "yaw": 1.9055810096887793,
          "pitch": 0.18441918628644594,
          "rotation": 3.141592653589793,
          "target": "1-galley"
        },
        {
          "yaw": 2.419386849918439,
          "pitch": 0.22878294705040858,
          "rotation": 3.141592653589793,
          "target": "3-hallway_aft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-hallway_aft",
      "name": "Hallway_Aft",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.9144544577693807,
        "pitch": 0.6027411019839608,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": 0.6379394732964236,
          "pitch": -0.3238820324336551,
          "rotation": 5.497787143782138,
          "target": "1-galley"
        },
        {
          "yaw": -0.5045519461232111,
          "pitch": 0.3663524381958947,
          "rotation": 0,
          "target": "5-owners-cabin_stb"
        },
        {
          "yaw": 2.9013370942857266,
          "pitch": 0.12257822924353334,
          "rotation": 7.853981633974483,
          "target": "12-twin-cabin_stb"
        },
        {
          "yaw": 2.271683519502936,
          "pitch": 0.05522828607652208,
          "rotation": 0,
          "target": "15-vip-cabin"
        },
        {
          "yaw": 2.112157849805902,
          "pitch": 0.06429642652479473,
          "rotation": 4.71238898038469,
          "target": "14-laundry"
        },
        {
          "yaw": 2.2368860887759023,
          "pitch": 0.385097756787836,
          "rotation": 3.141592653589793,
          "target": "4-hallway_fwd"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-hallway_fwd",
      "name": "Hallway_Fwd",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.2923951418556978,
        "pitch": 0.5094484178612504,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": 2.188328756590092,
          "pitch": 0.7065319768933378,
          "rotation": 0.7853981633974483,
          "target": "14-laundry"
        },
        {
          "yaw": 0.9570486155729512,
          "pitch": 0.43233920964371286,
          "rotation": 4.71238898038469,
          "target": "13-share-head--shower"
        },
        {
          "yaw": 1.3757453629604637,
          "pitch": 0.22108997370242278,
          "rotation": 0,
          "target": "11-twin-cabin_port"
        },
        {
          "yaw": 1.158604177441454,
          "pitch": 0.44944426592034503,
          "rotation": 3.141592653589793,
          "target": "3-hallway_aft"
        },
        {
          "yaw": 1.1818348125314078,
          "pitch": 0.1668959985728833,
          "rotation": 0,
          "target": "5-owners-cabin_stb"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-owners-cabin_stb",
      "name": "Owner's Cabin_STB",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.0726467547363416,
        "pitch": 0.44244106802205607,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": 2.0013605496443745,
          "pitch": 0.18138940848443852,
          "rotation": 0,
          "target": "3-hallway_aft"
        },
        {
          "yaw": -0.9189727044058049,
          "pitch": 0.32489194294385015,
          "rotation": 0,
          "target": "7-owners-cabin_walkin-closet"
        },
        {
          "yaw": 1.112263689924296,
          "pitch": 0.3152171805735904,
          "rotation": 3.141592653589793,
          "target": "6-owners-cabin_port"
        },
        {
          "yaw": 0.9023283102336777,
          "pitch": 0.1326522633715257,
          "rotation": 4.71238898038469,
          "target": "8-owners-cabin_head"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-owners-cabin_port",
      "name": "Owner's Cabin_Port",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.460254710804124,
        "pitch": 0.4874268727020272,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": -3.0463325586518977,
          "pitch": 0.13740994887509217,
          "rotation": 1.5707963267948966,
          "target": "7-owners-cabin_walkin-closet"
        },
        {
          "yaw": -1.017080942825693,
          "pitch": 0.5585639979007926,
          "rotation": 0,
          "target": "8-owners-cabin_head"
        },
        {
          "yaw": 2.1049627876280432,
          "pitch": 0.1624729123977957,
          "rotation": 0,
          "target": "3-hallway_aft"
        },
        {
          "yaw": 3.011863660747676,
          "pitch": 0.299170311177102,
          "rotation": 3.141592653589793,
          "target": "5-owners-cabin_stb"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-owners-cabin_walkin-closet",
      "name": "Owner's Cabin_Walkin Closet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.9586883232344183,
        "pitch": 0.38216621414180096,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": 0.9529408933394041,
          "pitch": 0.43347499466768014,
          "rotation": 0,
          "target": "5-owners-cabin_stb"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-owners-cabin_head",
      "name": "Owner's Cabin_Head",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.5297177207831822,
        "pitch": 0.5530366158671516,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": -0.12221008111236742,
          "pitch": 0.5698739588616561,
          "rotation": 0,
          "target": "6-owners-cabin_port"
        },
        {
          "yaw": 1.4833739047819927,
          "pitch": 0.32050652032286386,
          "rotation": 0,
          "target": "10-owners-cabin_shower"
        },
        {
          "yaw": -1.3665031395287972,
          "pitch": 0.6703682347799056,
          "rotation": 0,
          "target": "9-owners-cabin_toilet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-owners-cabin_toilet",
      "name": "Owner's Cabin_Toilet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.8576755695958305,
        "pitch": 1.0922033370743804,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": -2.4289837406241297,
          "pitch": 0.7565275740272526,
          "rotation": 0,
          "target": "8-owners-cabin_head"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-owners-cabin_shower",
      "name": "Owner's Cabin_Shower",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.0605915106912303,
        "pitch": 0.7618969772487354,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": -0.3796489228659663,
          "pitch": 0.6497157363000667,
          "rotation": 0,
          "target": "8-owners-cabin_head"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-twin-cabin_port",
      "name": "Twin Cabin_Port",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.3646988451266147,
        "pitch": 0.5758642558500391,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": -2.8507284786970164,
          "pitch": 0.5350369608698564,
          "rotation": 0,
          "target": "3-hallway_aft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-twin-cabin_stb",
      "name": "Twin Cabin_STB",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.3594230873363182,
        "pitch": 0.6524736539785465,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": -0.30620513480312894,
          "pitch": 0.44944701565951206,
          "rotation": 0,
          "target": "13-share-head--shower"
        },
        {
          "yaw": -2.0026609388553176,
          "pitch": 0.6132471152243308,
          "rotation": 0,
          "target": "3-hallway_aft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-share-head--shower",
      "name": "Share Head & Shower",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.0237741766265556,
        "pitch": 0.5957416893063083,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": 2.9394578937881333,
          "pitch": 0.653000759143973,
          "rotation": 0.7853981633974483,
          "target": "12-twin-cabin_stb"
        },
        {
          "yaw": -0.8218937503772565,
          "pitch": 0.6689141649546393,
          "rotation": 0,
          "target": "4-hallway_fwd"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-laundry",
      "name": "Laundry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.9519670713178021,
        "pitch": 0.6258689293192372,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": -1.5154244744219945,
          "pitch": 0.9834757829054652,
          "rotation": 0,
          "target": "4-hallway_fwd"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-vip-cabin",
      "name": "VIP Cabin",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.0686086287201526,
        "pitch": 0.46211443410779296,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": -0.6974588772006882,
          "pitch": 0.4214185993495416,
          "rotation": 0,
          "target": "16-vip-cabin_shower"
        },
        {
          "yaw": 2.760226660616425,
          "pitch": 0.33189723069767396,
          "rotation": 0,
          "target": "17-vip-cabin_head"
        },
        {
          "yaw": -1.465150505139782,
          "pitch": 0.5880712568936435,
          "rotation": 0,
          "target": "4-hallway_fwd"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-vip-cabin_shower",
      "name": "VIP Cabin_Shower",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.7001263298531102,
        "pitch": 0.3553052521983524,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": -1.5686994397211684,
          "pitch": 0.8892161232212192,
          "rotation": 0,
          "target": "15-vip-cabin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-vip-cabin_head",
      "name": "VIP Cabin_Head",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.1336059355637147,
        "pitch": 0.9566050651256539,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": -2.1401776279863505,
          "pitch": 0.8313800902769213,
          "rotation": 0,
          "target": "15-vip-cabin"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "20230220_SarahB_Interior_Updates",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
