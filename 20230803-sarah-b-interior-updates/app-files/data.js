var APP_DATA = {
  "scenes": [
    {
      "id": "0-salon",
      "name": "SALON",
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
        "yaw": 1.5315957975952719,
        "pitch": 0.08845515487946898,
        "fov": 1.4408666390078466
      },
      "linkHotspots": [
        {
          "yaw": 1.5035016012758424,
          "pitch": 0.0827945195635138,
          "rotation": 3.141592653589793,
          "target": "2-helm"
        },
        {
          "yaw": 0.46323341482492886,
          "pitch": 0.22905898886185483,
          "rotation": 3.141592653589793,
          "target": "1-galley"
        },
        {
          "yaw": 0.9347730615988237,
          "pitch": 0.14179791416771437,
          "rotation": 2.356194490192345,
          "target": "3-lower-hallway-aft"
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
        "yaw": 1.8331673200757157,
        "pitch": 0.29563449801722186,
        "fov": 1.4408666390078466
      },
      "linkHotspots": [
        {
          "yaw": -2.920403709963896,
          "pitch": 0.165658534819201,
          "rotation": 3.141592653589793,
          "target": "0-salon"
        },
        {
          "yaw": 1.807681008313578,
          "pitch": 0.0907697761857591,
          "rotation": 3.141592653589793,
          "target": "2-helm"
        },
        {
          "yaw": 1.110275189564634,
          "pitch": 0.22720666152235935,
          "rotation": 3.141592653589793,
          "target": "3-lower-hallway-aft"
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
        "yaw": -2.510000373398162,
        "pitch": 0.3273517870678333,
        "fov": 1.4408666390078466
      },
      "linkHotspots": [
        {
          "yaw": 1.1400897746836165,
          "pitch": 0.15468507652305874,
          "rotation": 3.141592653589793,
          "target": "0-salon"
        },
        {
          "yaw": 1.5501423344293483,
          "pitch": 0.14712154875053685,
          "rotation": 3.141592653589793,
          "target": "1-galley"
        },
        {
          "yaw": 2.118929399234407,
          "pitch": 0.16819570772010195,
          "rotation": 3.141592653589793,
          "target": "3-lower-hallway-aft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-lower-hallway-aft",
      "name": "LOWER HALLWAY AFT",
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
        "yaw": 1.0661255069348066,
        "pitch": 0.03746425374190565,
        "fov": 1.4408666390078466
      },
      "linkHotspots": [
        {
          "yaw": -1.421591863736083,
          "pitch": 0.11477937283573425,
          "rotation": 0,
          "target": "4-master-sartboard"
        },
        {
          "yaw": 0.1685004905511871,
          "pitch": -0.21731580026246533,
          "rotation": 5.497787143782138,
          "target": "1-galley"
        },
        {
          "yaw": 1.5802511484758996,
          "pitch": 0.2687994362579005,
          "rotation": 3.141592653589793,
          "target": "14-lower-hallway-fwd"
        },
        {
          "yaw": 1.5753518463503564,
          "pitch": 0.0422248447083966,
          "rotation": 0,
          "target": "15-vip-cabin"
        },
        {
          "yaw": 2.189753072489358,
          "pitch": 0.09609303186509166,
          "rotation": 1.5707963267948966,
          "target": "10-sartboard-cabin"
        },
        {
          "yaw": 1.4758428771394954,
          "pitch": 0.045833317601530865,
          "rotation": 4.71238898038469,
          "target": "12-laundry-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-master-sartboard",
      "name": "MASTER SARTBOARD",
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
        "yaw": 1.3860488427309576,
        "pitch": 0.3201671455541515,
        "fov": 1.4408666390078466
      },
      "linkHotspots": [
        {
          "yaw": 0.38905328041795073,
          "pitch": 0.12299442632361135,
          "rotation": 3.141592653589793,
          "target": "5-master-port"
        },
        {
          "yaw": 1.2227280466023185,
          "pitch": 0.14277416057010228,
          "rotation": 0.7853981633974483,
          "target": "3-lower-hallway-aft"
        },
        {
          "yaw": 0.2388162629773518,
          "pitch": 0.11707947856920242,
          "rotation": 4.71238898038469,
          "target": "7-master-head"
        },
        {
          "yaw": -1.553105839488314,
          "pitch": 0.15419974155350147,
          "rotation": 0,
          "target": "6-master-closet"
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
        "yaw": 0.9434498268716638,
        "pitch": 0.23018855218093037,
        "fov": 1.4408666390078466
      },
      "linkHotspots": [
        {
          "yaw": 2.140910531115888,
          "pitch": 0.15363950105823498,
          "rotation": 3.141592653589793,
          "target": "4-master-sartboard"
        },
        {
          "yaw": 1.256736510640419,
          "pitch": 0.18961767121334283,
          "rotation": 5.497787143782138,
          "target": "3-lower-hallway-aft"
        },
        {
          "yaw": -1.998622223137943,
          "pitch": 0.20640234812610103,
          "rotation": 0,
          "target": "7-master-head"
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
        "yaw": -0.5238920629478496,
        "pitch": 0.349274507516526,
        "fov": 1.4408666390078466
      },
      "linkHotspots": [
        {
          "yaw": 2.9830644264024286,
          "pitch": 0.19945249432570478,
          "rotation": 0,
          "target": "4-master-sartboard"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-master-head",
      "name": "MASTER HEAD",
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
        "yaw": 1.9281766927015331,
        "pitch": 0.26945882801343757,
        "fov": 1.4408666390078466
      },
      "linkHotspots": [
        {
          "yaw": -2.6069428346972785,
          "pitch": 0.01317121854118497,
          "rotation": 0,
          "target": "8-master-toilet"
        },
        {
          "yaw": 0.9376528582586232,
          "pitch": 0.20101345851739794,
          "rotation": 6.283185307179586,
          "target": "9-master-shower"
        },
        {
          "yaw": -0.9995084625550668,
          "pitch": -0.01923375497880464,
          "rotation": 0,
          "target": "5-master-port"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-master-toilet",
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
        "yaw": 3.0610559738843985,
        "pitch": 0.5259926582146832,
        "fov": 1.4408666390078466
      },
      "linkHotspots": [
        {
          "yaw": -1.1602771938911154,
          "pitch": 0.1889858769153392,
          "rotation": 0,
          "target": "7-master-head"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-master-shower",
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
        "yaw": 2.199660048175506,
        "pitch": 0.34890496321608566,
        "fov": 1.4408666390078466
      },
      "linkHotspots": [
        {
          "yaw": -1.6002930595280311,
          "pitch": 0.20512587720742914,
          "rotation": 0,
          "target": "7-master-head"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-sartboard-cabin",
      "name": "SARTBOARD CABIN",
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
        "yaw": 1.6998352977729283,
        "pitch": 0.2288960205108843,
        "fov": 1.4408666390078466
      },
      "linkHotspots": [
        {
          "yaw": -0.21329207530035,
          "pitch": 0.18934064031179076,
          "rotation": 0,
          "target": "11-shared-head"
        },
        {
          "yaw": -2.226833473795196,
          "pitch": 0.17054334031221252,
          "rotation": 0,
          "target": "3-lower-hallway-aft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-shared-head",
      "name": "SHARED HEAD",
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
        "yaw": 0.7673098277238122,
        "pitch": 0.2935705878524466,
        "fov": 1.4408666390078466
      },
      "linkHotspots": [
        {
          "yaw": -2.0521110698694436,
          "pitch": 0.2615923928770023,
          "rotation": 0,
          "target": "10-sartboard-cabin"
        },
        {
          "yaw": -0.3848174827261488,
          "pitch": 0.2131436851418531,
          "rotation": 0,
          "target": "14-lower-hallway-fwd"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-laundry-room",
      "name": "LAUNDRY ROOM",
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
        "yaw": 1.8046216619132958,
        "pitch": 0.27958216205206377,
        "fov": 1.4408666390078466
      },
      "linkHotspots": [
        {
          "yaw": -1.5856060174423412,
          "pitch": 0.21157057114323763,
          "rotation": 0,
          "target": "14-lower-hallway-fwd"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-port-cabin",
      "name": "PORT CABIN",
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
        "yaw": 2.9441308273551705,
        "pitch": 0.24337620308602226,
        "fov": 1.4408666390078466
      },
      "linkHotspots": [
        {
          "yaw": -0.8355737934882494,
          "pitch": 0.3060475056089125,
          "rotation": 0,
          "target": "14-lower-hallway-fwd"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-lower-hallway-fwd",
      "name": "LOWER HALLWAY FWD",
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
        "yaw": 1.4874566579701591,
        "pitch": 0.17459813808565627,
        "fov": 1.4408666390078466
      },
      "linkHotspots": [
        {
          "yaw": 2.36689555911169,
          "pitch": 0.3190618844240536,
          "rotation": 0.7853981633974483,
          "target": "12-laundry-room"
        },
        {
          "yaw": 1.506598653234489,
          "pitch": 0.16197281202649094,
          "rotation": 0.7853981633974483,
          "target": "13-port-cabin"
        },
        {
          "yaw": 1.3014774746195492,
          "pitch": 0.3935453786723482,
          "rotation": 3.141592653589793,
          "target": "3-lower-hallway-aft"
        },
        {
          "yaw": 1.0951149148454888,
          "pitch": 0.22218827649775363,
          "rotation": 4.71238898038469,
          "target": "11-shared-head"
        },
        {
          "yaw": 1.3168145635867567,
          "pitch": 0.1268972094745049,
          "rotation": 0,
          "target": "4-master-sartboard"
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "16-vip-head",
      "name": "VIP HEAD",
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
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "17-vip-shower",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "20230803 Sarah B Interior Updates",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
