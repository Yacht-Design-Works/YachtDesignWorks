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
        "yaw": -1.3455930273072454,
        "pitch": 0.20128452033906363,
        "fov": 1.1946758112663731
      },
      "linkHotspots": [
        {
          "yaw": -1.4183594383616924,
          "pitch": 0.15065533808566123,
          "rotation": 0,
          "target": "1-helm"
        },
        {
          "yaw": -1.6982162696851884,
          "pitch": 0.0718999790142103,
          "rotation": 7.0685834705770345,
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
        "yaw": 1.570039612579091,
        "pitch": 0.503639130254097,
        "fov": 1.4247463008564816
      },
      "linkHotspots": [
        {
          "yaw": 1.5678922069405514,
          "pitch": 0.1543837261226706,
          "rotation": 0,
          "target": "0-bow"
        },
        {
          "yaw": -2.0033022436019117,
          "pitch": 0.24443384932748735,
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
        "yaw": 0.8728154366421528,
        "pitch": 0.7190145897847628,
        "fov": 1.4247463008564816
      },
      "linkHotspots": [
        {
          "yaw": 0.0539097302600382,
          "pitch": 0.5248329182091158,
          "rotation": 0,
          "target": "3-swimplatform"
        },
        {
          "yaw": 2.4464895145488104,
          "pitch": -0.011584337646075582,
          "rotation": 0,
          "target": "1-helm"
        },
        {
          "yaw": 2.8162997335002213,
          "pitch": 0.11788061210484813,
          "rotation": 0,
          "target": "0-bow"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-swimplatform",
      "name": "Swimplatform",
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
        "yaw": 2.5007116220861887,
        "pitch": 0.6484578970670825,
        "fov": 1.4247463008564816
      },
      "linkHotspots": [
        {
          "yaw": 2.784772628939052,
          "pitch": 0.46196570805172854,
          "rotation": 3.9269908169872414,
          "target": "2-transom"
        },
        {
          "yaw": 2.4565921487623763,
          "pitch": -0.0037647636030531118,
          "rotation": 0,
          "target": "1-helm"
        },
        {
          "yaw": 2.7506042418949637,
          "pitch": -0.03706892890846447,
          "rotation": 10.995574287564278,
          "target": "0-bow"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "ASCENT42 WIP",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
