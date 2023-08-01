var APP_DATA = {
  "scenes": [
    {
      "id": "0-port",
      "name": "Port",
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
        "yaw": 1.6362411643807304,
        "pitch": -0.055936393545099605,
        "fov": 1.4120510421252042
      },
      "linkHotspots": [
        {
          "yaw": 2.038505012500333,
          "pitch": 0.10871206984199056,
          "rotation": 3.141592653589793,
          "target": "1-starboard"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-starboard",
      "name": "Starboard",
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
        "yaw": 1.580242670752444,
        "pitch": -0.14871123117769613,
        "fov": 1.4120510421252042
      },
      "linkHotspots": [
        {
          "yaw": 0.8527665976523231,
          "pitch": 0.09608993383824682,
          "rotation": 3.141592653589793,
          "target": "0-port"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "T52 Skylight",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
