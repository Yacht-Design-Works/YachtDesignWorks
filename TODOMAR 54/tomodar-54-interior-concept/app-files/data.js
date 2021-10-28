var APP_DATA = {
  "scenes": [
    {
      "id": "0-hallway",
      "name": "Hallway",
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
        "yaw": -2.816415595668799,
        "pitch": 0.64203668436679,
        "fov": 1.3325409858300763
      },
      "linkHotspots": [
        {
          "yaw": -2.0215951182655125,
          "pitch": 0.5035664797122301,
          "rotation": 0,
          "target": "1-fwd-berth"
        },
        {
          "yaw": -0.2291196305993406,
          "pitch": 0.7292752806479559,
          "rotation": 0,
          "target": "3-head--shower"
        },
        {
          "yaw": 0.6939183657351933,
          "pitch": 0.885579064559634,
          "rotation": 0,
          "target": "4-mid-berth"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-fwd-berth",
      "name": "Fwd Berth",
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
        "yaw": 2.116223710783359,
        "pitch": 0.6495186913886535,
        "fov": 1.4222859978797786
      },
      "linkHotspots": [
        {
          "yaw": 1.7499290574964563,
          "pitch": 0.315182812049553,
          "rotation": 3.141592653589793,
          "target": "2-fwd-berth-on-bed"
        },
        {
          "yaw": -1.3012056174018127,
          "pitch": 1.0375085211099915,
          "rotation": 3.141592653589793,
          "target": "0-hallway"
        },
        {
          "yaw": -1.5974983898552004,
          "pitch": 0.5004192158792833,
          "rotation": 0,
          "target": "4-mid-berth"
        },
        {
          "yaw": -1.85177058354137,
          "pitch": 0.1895550320753543,
          "rotation": 4.71238898038469,
          "target": "3-head--shower"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-fwd-berth-on-bed",
      "name": "Fwd Berth on Bed",
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
        "yaw": 1.85281593997445,
        "pitch": 0.11813529956758373,
        "fov": 1.4222764926863753
      },
      "linkHotspots": [
        {
          "yaw": 1.9024210095662148,
          "pitch": 0.07649929964490809,
          "rotation": 0,
          "target": "0-hallway"
        },
        {
          "yaw": 1.7887445048225867,
          "pitch": 0.6125693194599133,
          "rotation": 3.141592653589793,
          "target": "1-fwd-berth"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-head--shower",
      "name": "Head & Shower",
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
        "yaw": 1.0220371880125292,
        "pitch": 0.7520389717164679,
        "fov": 1.495816476195885
      },
      "linkHotspots": [
        {
          "yaw": -1.1934999528922177,
          "pitch": 1.001536067840977,
          "rotation": 0,
          "target": "0-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-mid-berth",
      "name": "Mid Berth",
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
        "yaw": 1.8170849605857144,
        "pitch": 0.41719618437657857,
        "fov": 1.42266712172264
      },
      "linkHotspots": [
        {
          "yaw": -1.695534890644959,
          "pitch": 0.6661452167630095,
          "rotation": 0,
          "target": "0-hallway"
        },
        {
          "yaw": -1.4943898248143235,
          "pitch": 0.08287425215178956,
          "rotation": 0,
          "target": "1-fwd-berth"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Tomodar 54 Interior Concept",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
