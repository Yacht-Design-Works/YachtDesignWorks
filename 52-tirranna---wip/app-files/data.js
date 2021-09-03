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
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 1.7067618160922517,
        "pitch": 0.655781873031966,
        "fov": 1.4247463008564816
      },
      "linkHotspots": [
        {
          "yaw": -1.5610046492122311,
          "pitch": 0.060896422126187844,
          "rotation": 0,
          "target": "1-helm"
        },
        {
          "yaw": -1.030170150270779,
          "pitch": 0.06694710531021464,
          "rotation": 5.497787143782138,
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
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 1.5456770773283957,
        "pitch": 0.27179535291755386,
        "fov": 1.0671669190804185
      },
      "linkHotspots": [
        {
          "yaw": -1.5586099204200732,
          "pitch": 0.4488367375695148,
          "rotation": 0,
          "target": "2-transom"
        },
        {
          "yaw": 1.592026149888481,
          "pitch": 0.050580007885201894,
          "rotation": 0,
          "target": "0-bow"
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
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 1.617556652207381,
        "pitch": 0.44282103205913437,
        "fov": 1.4247463008564816
      },
      "linkHotspots": [
        {
          "yaw": 1.6821688679114892,
          "pitch": 0.23721615900545245,
          "rotation": 0,
          "target": "1-helm"
        },
        {
          "yaw": 1.9687836418348468,
          "pitch": 0.07034726448915407,
          "rotation": 5.497787143782138,
          "target": "0-bow"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "52 Tirranna - WIP",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
