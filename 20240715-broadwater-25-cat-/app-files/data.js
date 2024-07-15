var APP_DATA = {
  "scenes": [
    {
      "id": "0-perspective",
      "name": "Perspective",
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
        "yaw": 1.7208682885298838,
        "pitch": -0.02203567107764215,
        "fov": 1.3608036366560152
      },
      "linkHotspots": [
        {
          "yaw": 1.7954102755379715,
          "pitch": 0.00577341782854468,
          "rotation": 3.141592653589793,
          "target": "3-bow"
        },
        {
          "yaw": 1.5143913433969685,
          "pitch": -0.008664743597517344,
          "rotation": 3.141592653589793,
          "target": "1-helm"
        },
        {
          "yaw": 1.332085937999734,
          "pitch": 0.04322318248482304,
          "rotation": 3.141592653589793,
          "target": "2-stern"
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
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.6009802562117397,
        "pitch": 0.6282322785307066,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": -1.5710529066442689,
          "pitch": 0.6425277025592067,
          "rotation": 3.141592653589793,
          "target": "2-stern"
        },
        {
          "yaw": 1.5913361056445643,
          "pitch": 0.21732913142521681,
          "rotation": 3.141592653589793,
          "target": "3-bow"
        },
        {
          "yaw": 2.9291600952017474,
          "pitch": 0.3017208316190363,
          "rotation": 3.141592653589793,
          "target": "0-perspective"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-stern",
      "name": "Stern",
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
        "yaw": 1.561830023625796,
        "pitch": 0.5642282588226664,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": 1.5839498225354829,
          "pitch": 0.03601294631412699,
          "rotation": 0,
          "target": "3-bow"
        },
        {
          "yaw": 2.7069115877455836,
          "pitch": 0.13769636617802306,
          "rotation": 3.141592653589793,
          "target": "0-perspective"
        },
        {
          "yaw": 1.5777856601431663,
          "pitch": 0.2598724496672382,
          "rotation": 0,
          "target": "1-helm"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bow",
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
        "yaw": 1.2374373172409268,
        "pitch": 0.6113919049060819,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": 1.5839061910721357,
          "pitch": 0.2866180583760318,
          "rotation": 3.141592653589793,
          "target": "1-helm"
        },
        {
          "yaw": 1.5801721801354889,
          "pitch": 0.17555686549446747,
          "rotation": 3.141592653589793,
          "target": "2-stern"
        },
        {
          "yaw": 0.39432303934460755,
          "pitch": 0.2258226659561391,
          "rotation": 3.141592653589793,
          "target": "0-perspective"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "20240715 Broadwater 25 CAT ",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
