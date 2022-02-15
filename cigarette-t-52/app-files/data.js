var APP_DATA = {
  "scenes": [
    {
      "id": "0-profile",
      "name": "Profile",
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
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 3.081656845188151,
        "pitch": 0.09290604245755851,
        "fov": 1.3608936558192368
      },
      "linkHotspots": [
        {
          "yaw": 3.057881986790247,
          "pitch": -0.234542976407365,
          "rotation": 9.42477796076938,
          "target": "2-helm"
        },
        {
          "yaw": -2.5375994497734027,
          "pitch": -0.0850599112904682,
          "rotation": 3.141592653589793,
          "target": "1-bow"
        },
        {
          "yaw": 2.5055170893261227,
          "pitch": -0.05474819893374416,
          "rotation": 3.141592653589793,
          "target": "3-transom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bow",
      "name": "Bow",
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
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 3.138473844802812,
        "pitch": 0.32147940692176924,
        "fov": 1.3608936558192368
      },
      "linkHotspots": [
        {
          "yaw": 3.096667687695266,
          "pitch": -0.02185188353943701,
          "rotation": 18.84955592153877,
          "target": "2-helm"
        },
        {
          "yaw": -2.820985794457103,
          "pitch": -0.131210297769643,
          "rotation": 16.493361431346422,
          "target": "3-transom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-helm",
      "name": "Helm",
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
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": -3.0698841033268742,
        "pitch": 0.671337466606424,
        "fov": 1.3608936558192368
      },
      "linkHotspots": [
        {
          "yaw": -2.3053753085709836,
          "pitch": 0.1521601097680243,
          "rotation": 5.497787143782138,
          "target": "1-bow"
        },
        {
          "yaw": 2.295141769186836,
          "pitch": 0.44758408418053186,
          "rotation": 0.7853981633974483,
          "target": "4-interior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-transom",
      "name": "Transom",
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
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 2.828494402137556,
        "pitch": 0.48756296553195355,
        "fov": 1.3608936558192368
      },
      "linkHotspots": [
        {
          "yaw": 2.96728523285152,
          "pitch": 0.17639927633780772,
          "rotation": 0,
          "target": "2-helm"
        },
        {
          "yaw": -3.0311665232712084,
          "pitch": -0.023689712067968216,
          "rotation": 5.497787143782138,
          "target": "1-bow"
        },
        {
          "yaw": 2.6032288017480205,
          "pitch": 0.07876562007817434,
          "rotation": 8.63937979737193,
          "target": "4-interior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-interior",
      "name": "Interior",
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
        "yaw": 1.5779023995332668,
        "pitch": 0.4402405255146338,
        "fov": 1.3608936558192368
      },
      "linkHotspots": [
        {
          "yaw": 3.1186314971122933,
          "pitch": 0.46431504063407303,
          "rotation": 0,
          "target": "5-head"
        },
        {
          "yaw": -1.8849756942671494,
          "pitch": 0.033365182932579174,
          "rotation": 0,
          "target": "2-helm"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-head",
      "name": "Head",
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
        "yaw": 1.1808793209291668,
        "pitch": 0.6826041604303157,
        "fov": 1.3608936558192368
      },
      "linkHotspots": [
        {
          "yaw": -1.4548780939149673,
          "pitch": 0.7863427961034724,
          "rotation": 0,
          "target": "4-interior"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Cigarette T-52",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
