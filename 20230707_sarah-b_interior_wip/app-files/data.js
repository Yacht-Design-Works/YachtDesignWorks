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
        "yaw": 1.475607705703494,
        "pitch": 0.20985795494417658,
        "fov": 1.557758975746875
      },
      "linkHotspots": [
        {
          "yaw": 0.008928371172615357,
          "pitch": 0.37422910220508854,
          "rotation": 3.141592653589793,
          "target": "1-galley"
        },
        {
          "yaw": 1.4107133185873124,
          "pitch": 0.1535360540320152,
          "rotation": 3.141592653589793,
          "target": "2-helm-lounge"
        },
        {
          "yaw": 0.6999962022593351,
          "pitch": 0.23446025411675464,
          "rotation": 2.356194490192345,
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
        "yaw": -0.989798793832481,
        "pitch": 0.21385763203669228,
        "fov": 1.557758975746875
      },
      "linkHotspots": [
        {
          "yaw": 0.3573571427040889,
          "pitch": 0.2394997155162688,
          "rotation": 0,
          "target": "0-salon"
        },
        {
          "yaw": -1.8182810652993204,
          "pitch": 0.26720141256977925,
          "rotation": 3.141592653589793,
          "target": "3-hallway_aft"
        },
        {
          "yaw": -1.1308758153459593,
          "pitch": 0.13745437838866081,
          "rotation": 3.141592653589793,
          "target": "2-helm-lounge"
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
        "yaw": 1.885060882425103,
        "pitch": 0.3731859060129725,
        "fov": 1.557758975746875
      },
      "linkHotspots": [
        {
          "yaw": 0.8283688528797306,
          "pitch": 0.18723276628951524,
          "rotation": 3.141592653589793,
          "target": "0-salon"
        },
        {
          "yaw": 1.2278646055295557,
          "pitch": 0.15753289372046098,
          "rotation": 3.141592653589793,
          "target": "1-galley"
        },
        {
          "yaw": 1.822730052541731,
          "pitch": 0.2014604186068567,
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
        "yaw": -2.554874302896865,
        "pitch": 0.23036966072716325,
        "fov": 1.557758975746875
      },
      "linkHotspots": [
        {
          "yaw": 1.4225072322344428,
          "pitch": 0.2765877798246308,
          "rotation": 0,
          "target": "5-owners-cabin_stbd"
        },
        {
          "yaw": -1.9600524417400642,
          "pitch": 0.3178449416662126,
          "rotation": 3.141592653589793,
          "target": "4-hallway_fwd"
        },
        {
          "yaw": -1.2081452720766244,
          "pitch": 0.19498945880640228,
          "rotation": 0.7853981633974483,
          "target": "11-twim-cabin_stbd"
        },
        {
          "yaw": -2.1056793905860687,
          "pitch": 0.02006068231197844,
          "rotation": 4.71238898038469,
          "target": "12-twim-cabin_port"
        },
        {
          "yaw": 2.776894069201637,
          "pitch": -0.11384874243444543,
          "rotation": 5.497787143782138,
          "target": "1-galley"
        },
        {
          "yaw": -1.9390346112239918,
          "pitch": 0.008377706233414273,
          "rotation": 0,
          "target": "14-laundry"
        },
        {
          "yaw": -2.192441875399192,
          "pitch": 0.2819157799822598,
          "rotation": 4.71238898038469,
          "target": "12-twim-cabin_port"
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
        "yaw": 1.8131278998266467,
        "pitch": 0.17830256474601036,
        "fov": 1.557758975746875
      },
      "linkHotspots": [
        {
          "yaw": 1.732886837846097,
          "pitch": 0.18004439378695025,
          "rotation": 6.283185307179586,
          "target": "3-hallway_aft"
        },
        {
          "yaw": -1.2833837746832515,
          "pitch": 0.14529034206793412,
          "rotation": 0,
          "target": "15-vip-cabin"
        },
        {
          "yaw": -2.594434623387505,
          "pitch": 0.3327627134126345,
          "rotation": 0,
          "target": "14-laundry"
        },
        {
          "yaw": 1.9926845654854963,
          "pitch": 0.20210730095383056,
          "rotation": 7.0685834705770345,
          "target": "12-twim-cabin_port"
        },
        {
          "yaw": 1.2031840670101808,
          "pitch": 0.31606903371477557,
          "rotation": 5.497787143782138,
          "target": "13-share-head--shower"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-owners-cabin_stbd",
      "name": "Owner's Cabin_STBD",
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
        "yaw": 2.8011633540743652,
        "pitch": 0.40336855492677515,
        "fov": 1.557758975746875
      },
      "linkHotspots": [
        {
          "yaw": 2.322548724475906,
          "pitch": 0.18455794484063226,
          "rotation": 3.141592653589793,
          "target": "6-owners-cabin_port"
        },
        {
          "yaw": 2.0374605633501854,
          "pitch": 0.17057947304933663,
          "rotation": 4.71238898038469,
          "target": "8-owners-cabin_head"
        },
        {
          "yaw": 3.090501691990273,
          "pitch": 0.21219433456129266,
          "rotation": 0.7853981633974483,
          "target": "3-hallway_aft"
        },
        {
          "yaw": 0.5609560159911879,
          "pitch": 0.20353110782557948,
          "rotation": 0,
          "target": "7-owners-cabin_walkin-closet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-owners-cabin_port",
      "name": "Owner's Cabin_PORT",
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
        "yaw": -1.5278188200530742,
        "pitch": 0.38610375842483435,
        "fov": 1.557758975746875
      },
      "linkHotspots": [
        {
          "yaw": -2.3080499018500475,
          "pitch": 0.24263795447382996,
          "rotation": 0,
          "target": "8-owners-cabin_head"
        },
        {
          "yaw": 2.0403566510878255,
          "pitch": 0.15388342364703433,
          "rotation": 3.141592653589793,
          "target": "5-owners-cabin_stbd"
        },
        {
          "yaw": 1.2563404192308916,
          "pitch": 0.2227390217381302,
          "rotation": 5.497787143782138,
          "target": "3-hallway_aft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-owners-cabin_walkin-closet",
      "name": "Owner's Cabin_Walkin-Closet",
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
        "yaw": -2.9263166609066538,
        "pitch": 0.3235888846274353,
        "fov": 1.557758975746875
      },
      "linkHotspots": [
        {
          "yaw": -0.6222854314739212,
          "pitch": 0.21006492464852045,
          "rotation": 0,
          "target": "5-owners-cabin_stbd"
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
        "yaw": 1.5966487704727914,
        "pitch": 0.24164532552243045,
        "fov": 1.557758975746875
      },
      "linkHotspots": [
        {
          "yaw": -2.3511379985770127,
          "pitch": 0.3689550293154866,
          "rotation": 0,
          "target": "9-owners-cabin_toilet"
        },
        {
          "yaw": 0.7957219460319163,
          "pitch": 0.28025428171920197,
          "rotation": 0,
          "target": "10-owners-cabin_shower"
        },
        {
          "yaw": -1.0066579970460818,
          "pitch": 0.25721246005653065,
          "rotation": 0,
          "target": "6-owners-cabin_port"
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
        "yaw": -0.24495432921163918,
        "pitch": 0.4339036703833372,
        "fov": 1.557758975746875
      },
      "linkHotspots": [
        {
          "yaw": -3.0935783143895748,
          "pitch": 0.31736991215980126,
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
        "yaw": 0.26493983097118345,
        "pitch": 0.27719511606532166,
        "fov": 1.557758975746875
      },
      "linkHotspots": [
        {
          "yaw": 3.090936223140954,
          "pitch": 0.32231191652960334,
          "rotation": 0,
          "target": "8-owners-cabin_head"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-twim-cabin_stbd",
      "name": "Twim Cabin_STBD",
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
        "yaw": 0.5284189441081164,
        "pitch": 0.5750529211747484,
        "fov": 1.557758975746875
      },
      "linkHotspots": [
        {
          "yaw": -3.04240420970417,
          "pitch": 0.3174174604698976,
          "rotation": 0,
          "target": "3-hallway_aft"
        },
        {
          "yaw": -1.6474770687714475,
          "pitch": 0.260943673576401,
          "rotation": 0,
          "target": "13-share-head--shower"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-twim-cabin_port",
      "name": "Twim Cabin_PORT",
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
        "yaw": 2.2952038635841863,
        "pitch": 0.3181603178811283,
        "fov": 1.557758975746875
      },
      "linkHotspots": [
        {
          "yaw": -1.9548465727822961,
          "pitch": 0.2443711660868484,
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
        "yaw": 3.1188658983354767,
        "pitch": 0.2977292398568938,
        "fov": 1.557758975746875
      },
      "linkHotspots": [
        {
          "yaw": -2.6510880004193265,
          "pitch": 0.29288318291580495,
          "rotation": 0.7853981633974483,
          "target": "4-hallway_fwd"
        },
        {
          "yaw": 2.5049266352234927,
          "pitch": 0.4774971793071643,
          "rotation": 5.497787143782138,
          "target": "11-twim-cabin_stbd"
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
        "yaw": -0.9615692762906782,
        "pitch": 0.2073393293609307,
        "fov": 1.557758975746875
      },
      "linkHotspots": [
        {
          "yaw": 1.7955879898041314,
          "pitch": 0.20868095461130132,
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
        "yaw": 1.5758008820047111,
        "pitch": 0.29151231471691297,
        "fov": 1.557758975746875
      },
      "linkHotspots": [
        {
          "yaw": -0.38657885947814563,
          "pitch": 0.21655415554947766,
          "rotation": 0,
          "target": "16-vip-cabin_shower"
        },
        {
          "yaw": -1.2147511952385521,
          "pitch": 0.24802983418733504,
          "rotation": 0,
          "target": "4-hallway_fwd"
        },
        {
          "yaw": -2.879039858713245,
          "pitch": 0.21149213800698163,
          "rotation": 0,
          "target": "17-vip-cabin_head"
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
        "yaw": -2.236383710112648,
        "pitch": 0.5470918509168214,
        "fov": 1.557758975746875
      },
      "linkHotspots": [
        {
          "yaw": 1.0367972380967228,
          "pitch": 0.20086657970671418,
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
        "yaw": 1.3101374970832076,
        "pitch": 0.3217919026189282,
        "fov": 1.557758975746875
      },
      "linkHotspots": [
        {
          "yaw": -1.6744607525509316,
          "pitch": 0.20651358526160024,
          "rotation": 0,
          "target": "15-vip-cabin"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "20230707_Sarah B_Interior_WIP",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
