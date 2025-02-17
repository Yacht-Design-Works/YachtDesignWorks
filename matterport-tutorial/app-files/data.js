var APP_DATA = {
  "scenes": [
    {
      "id": "0-helm",
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
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.5224727665502122,
        "pitch": 0.5148066247425742,
        "fov": 1.5340283971151114
      },
      "linkHotspots": [
        {
          "yaw": 1.5802232121902788,
          "pitch": 0.09885516020140983,
          "rotation": 0,
          "target": "2-bow"
        },
        {
          "yaw": -1.7024432657670907,
          "pitch": 0.3747648908269987,
          "rotation": 3.141592653589793,
          "target": "1-aft-deck"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-aft-deck",
      "name": "Aft Deck",
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
        "yaw": -2.0916053110573323,
        "pitch": 0.529048166787847,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -2.210950455767229,
          "pitch": 0.19561658929731784,
          "rotation": 6.283185307179586,
          "target": "0-helm"
        },
        {
          "yaw": -2.4059504479445906,
          "pitch": 0.014973470548348189,
          "rotation": 2.356194490192345,
          "target": "2-bow"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bow",
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
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.3398748768469915,
        "pitch": 0.507487598014368,
        "fov": 1.5340283971151114
      },
      "linkHotspots": [
        {
          "yaw": -1.3314126170297982,
          "pitch": 0.14886477340922255,
          "rotation": 3.141592653589793,
          "target": "0-helm"
        },
        {
          "yaw": -1.6782513229413674,
          "pitch": 0.09078363863357097,
          "rotation": 2.356194490192345,
          "target": "1-aft-deck"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Matterport Tutorial",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
