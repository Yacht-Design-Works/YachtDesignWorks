var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "ENTRANCE",
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
        "yaw": 1.534133376228704,
        "pitch": 0.20476734404310548,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5320392654324912,
          "pitch": 0.07920410137716338,
          "rotation": 3.141592653589793,
          "target": "2-helm"
        },
        {
          "yaw": 0.34387893561556915,
          "pitch": 0.34860714622752553,
          "rotation": 3.141592653589793,
          "target": "1-galley"
        },
        {
          "yaw": 0.9285510333643341,
          "pitch": 0.18309324151788964,
          "rotation": 8.63937979737193,
          "target": "3-aft-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-galley",
      "name": "GALLEY",
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
        "yaw": 1.5465758461819092,
        "pitch": 0.07408720682567704,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5968065742255835,
          "pitch": 0.06072726515188265,
          "rotation": 3.141592653589793,
          "target": "2-helm"
        },
        {
          "yaw": 3.0842960859096387,
          "pitch": 0.11707344343220782,
          "rotation": 3.141592653589793,
          "target": "0-entrance"
        },
        {
          "yaw": 0.9376225060598156,
          "pitch": 0.26806553114934495,
          "rotation": 8.63937979737193,
          "target": "3-aft-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-helm",
      "name": "HELM",
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
        "yaw": 1.5427954528754624,
        "pitch": 0.06816008491797021,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.513368845430322,
          "pitch": 0.15018041131874682,
          "rotation": 3.141592653589793,
          "target": "0-entrance"
        },
        {
          "yaw": 1.885314082387735,
          "pitch": 0.16437735885820004,
          "rotation": 3.141592653589793,
          "target": "1-galley"
        },
        {
          "yaw": 2.4348920386049135,
          "pitch": 0.1744145476005592,
          "rotation": 3.9269908169872414,
          "target": "3-aft-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-aft-hallway",
      "name": "AFT HALLWAY",
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
        "yaw": 1.004965257643482,
        "pitch": 0.18192172041512578,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6396530559820324,
          "pitch": 0.2608235499073235,
          "rotation": 0,
          "target": "4-master-stbd"
        },
        {
          "yaw": 1.8934965183057004,
          "pitch": 0.13634151394862926,
          "rotation": 1.5707963267948966,
          "target": "10-stbd-twin-cabin"
        },
        {
          "yaw": 1.3581271015431735,
          "pitch": 0.20727605031298957,
          "rotation": 3.141592653589793,
          "target": "12-foward-hallway"
        },
        {
          "yaw": 1.3616244744524035,
          "pitch": 0.0290392163092541,
          "rotation": 0,
          "target": "15-vip-cabin"
        },
        {
          "yaw": -0.07943171356422951,
          "pitch": -0.38174515718260515,
          "rotation": 5.497787143782138,
          "target": "1-galley"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-master-stbd",
      "name": "MASTER STBD",
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
        "yaw": 1.4977063183057826,
        "pitch": 0.2789516465138302,
        "fov": 1.262160329804369
      },
      "linkHotspots": [
        {
          "yaw": 0.028421325335804326,
          "pitch": 0.1744343680085283,
          "rotation": 3.141592653589793,
          "target": "5-master-port"
        },
        {
          "yaw": -2.2030183015300953,
          "pitch": 0.2226486464841706,
          "rotation": 0,
          "target": "6-master-closet"
        },
        {
          "yaw": 0.971834294910817,
          "pitch": 0.16358661489131698,
          "rotation": 0,
          "target": "3-aft-hallway"
        },
        {
          "yaw": -0.07147750296834943,
          "pitch": 0.127651314211505,
          "rotation": 4.71238898038469,
          "target": "7-master-heads"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-master-port",
      "name": "MASTER PORT",
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
        "yaw": 1.4725502022981969,
        "pitch": 0.28862542479468445,
        "fov": 1.395287170018175
      },
      "linkHotspots": [
        {
          "yaw": 2.762071429342016,
          "pitch": 0.1943742384755751,
          "rotation": 3.141592653589793,
          "target": "4-master-stbd"
        },
        {
          "yaw": 1.8850920759529366,
          "pitch": 0.18975094731300324,
          "rotation": 11.780972450961727,
          "target": "3-aft-hallway"
        },
        {
          "yaw": -1.8599777971775175,
          "pitch": 0.33177555908784306,
          "rotation": 0,
          "target": "7-master-heads"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-master-closet",
      "name": "MASTER CLOSET",
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
        "yaw": 1.8363374530373715,
        "pitch": 0.10936950864175188,
        "fov": 1.395287170018175
      },
      "linkHotspots": [
        {
          "yaw": -1.4894948455853996,
          "pitch": 0.20424858528031464,
          "rotation": 0,
          "target": "4-master-stbd"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-master-heads",
      "name": "MASTER HEADS",
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
        "yaw": 1.8554059705845685,
        "pitch": 0.19647253450383495,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2169683736511399,
          "pitch": 0.20364649848101024,
          "rotation": 0,
          "target": "8-master-shower"
        },
        {
          "yaw": -2.729119217346316,
          "pitch": 0.1921325335046955,
          "rotation": 0.7853981633974483,
          "target": "9-master-toilet"
        },
        {
          "yaw": -0.6231227817813689,
          "pitch": 0.13258686394589247,
          "rotation": 0,
          "target": "5-master-port"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-master-shower",
      "name": "MASTER SHOWER",
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
        "yaw": 0.9592853875131766,
        "pitch": 0.09620288730180704,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0269550063355464,
          "pitch": 0.26581444522919284,
          "rotation": 0,
          "target": "7-master-heads"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-master-toilet",
      "name": "MASTER TOILET",
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
        "yaw": 1.9099412336722938,
        "pitch": 0.45637661441656086,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5105987204766258,
          "pitch": 0.26337482922140154,
          "rotation": 0,
          "target": "7-master-heads"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-stbd-twin-cabin",
      "name": "STBD TWIN CABIN",
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
        "yaw": 1.816249197565046,
        "pitch": 0.16686788525863605,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6123684236409659,
          "pitch": 0.2013435340625218,
          "rotation": 0,
          "target": "11-twin-heads"
        },
        {
          "yaw": -2.5800197146473707,
          "pitch": 0.1408851364038739,
          "rotation": 0,
          "target": "3-aft-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-twin-heads",
      "name": "TWIN HEADS",
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
        "yaw": 1.5595504671970986,
        "pitch": 0.12785807564934615,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7033019146828607,
          "pitch": 0.04880604648523601,
          "rotation": 0,
          "target": "10-stbd-twin-cabin"
        },
        {
          "yaw": -0.23608153892709183,
          "pitch": 0.1999987233607552,
          "rotation": 0,
          "target": "12-foward-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-foward-hallway",
      "name": "FOWARD HALLWAY",
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
        "yaw": -1.5758418996129464,
        "pitch": 0.0805158264791217,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5040297952316664,
          "pitch": 0.22649364560852803,
          "rotation": 0.7853981633974483,
          "target": "14-port-twin-cabin"
        },
        {
          "yaw": -0.7660902800637786,
          "pitch": 0.2658605428900742,
          "rotation": 0.7853981633974483,
          "target": "13-laundry"
        },
        {
          "yaw": -1.8874102492144917,
          "pitch": 0.2910826844392602,
          "rotation": 10.995574287564278,
          "target": "11-twin-heads"
        },
        {
          "yaw": 1.6586933503743388,
          "pitch": 0.20981851140955676,
          "rotation": 0,
          "target": "15-vip-cabin"
        },
        {
          "yaw": -1.6961897547983114,
          "pitch": 0.35667209311712433,
          "rotation": 3.141592653589793,
          "target": "3-aft-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-laundry",
      "name": "LAUNDRY",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9400993498066015,
          "pitch": 0.058201115953247395,
          "rotation": 0,
          "target": "12-foward-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-port-twin-cabin",
      "name": "PORT TWIN CABIN",
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
        "yaw": 3.027785135164521,
        "pitch": 0.19258853488405236,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7373438633101301,
          "pitch": 0.1922002002700811,
          "rotation": 0,
          "target": "12-foward-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-vip-cabin",
      "name": "VIP CABIN",
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
        "yaw": 1.5240804028871864,
        "pitch": 0.09284612974883188,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.1619968537345109,
          "pitch": 0.18138809274011614,
          "rotation": 0,
          "target": "16-vip-shower"
        },
        {
          "yaw": 2.968734074644118,
          "pitch": 0.1532366823875897,
          "rotation": 0,
          "target": "17-vip-heads"
        },
        {
          "yaw": -1.319783776070981,
          "pitch": 0.010345591252669095,
          "rotation": 0,
          "target": "12-foward-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-vip-shower",
      "name": "VIP SHOWER",
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
        "yaw": 1.834592347409914,
        "pitch": 0.1722119713832484,
        "fov": 1.7684787571870488
      },
      "linkHotspots": [
        {
          "yaw": -1.6145858392339747,
          "pitch": 0.36707594692264145,
          "rotation": 0,
          "target": "15-vip-cabin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-vip-heads",
      "name": "VIP HEADS",
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
        "yaw": 1.6421984611000857,
        "pitch": 0.24453063215259796,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.52776310703333,
          "pitch": 0.06484113664549618,
          "rotation": 0,
          "target": "15-vip-cabin"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "SARAH B UPDATES 20230815",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
