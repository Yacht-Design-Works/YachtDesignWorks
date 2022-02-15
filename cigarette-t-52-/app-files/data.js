var APP_DATA = {
  "scenes": [
    {
      "id": "0-bow",
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
        "yaw": 3.1269970427082727,
        "pitch": 0.3395637975327297,
        "fov": 1.3646202047689777
      },
      "linkHotspots": [
        {
          "yaw": 3.1064948533673853,
          "pitch": -0.03817057633342813,
          "rotation": 0,
          "target": "1-helm"
        },
        {
          "yaw": -2.787229710883775,
          "pitch": -0.03561171215058323,
          "rotation": 10.995574287564278,
          "target": "2-transom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-helm",
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
          "target": "0-bow"
        },
        {
          "yaw": 2.295141769186836,
          "pitch": 0.44758408418053186,
          "rotation": 0.7853981633974483,
          "target": "3-interior"
        },
        {
          "yaw": 0.07756624837032433,
          "pitch": 0.05750436903014844,
          "rotation": 0,
          "target": "2-transom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-transom",
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
          "target": "1-helm"
        },
        {
          "yaw": -3.0311665232712084,
          "pitch": -0.023689712067968216,
          "rotation": 5.497787143782138,
          "target": "0-bow"
        },
        {
          "yaw": 2.6032288017480205,
          "pitch": 0.07876562007817434,
          "rotation": 8.63937979737193,
          "target": "3-interior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-interior",
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
          "target": "4-head"
        },
        {
          "yaw": -1.8849756942671494,
          "pitch": 0.033365182932579174,
          "rotation": 0,
          "target": "1-helm"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-head",
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
          "target": "3-interior"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Cigarette T-52 ",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
