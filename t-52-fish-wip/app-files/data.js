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
        "yaw": -3.0988491494274673,
        "pitch": 0.39155333344306165,
        "fov": 1.3608936558192368
      },
      "linkHotspots": [
        {
          "yaw": -3.0780676568132694,
          "pitch": 0.030588474138276922,
          "rotation": 0,
          "target": "1-helm"
        },
        {
          "yaw": -2.614245380465844,
          "pitch": 0.2323339108927378,
          "rotation": 0,
          "target": "4-walkthrough---port"
        },
        {
          "yaw": 2.848642849145568,
          "pitch": 0.05484571193519905,
          "rotation": 3.141592653589793,
          "target": "3-walkthrough---stb"
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
        "yaw": 2.8381354095138196,
        "pitch": 0.42444133098939574,
        "fov": 1.3608936558192368
      },
      "linkHotspots": [
        {
          "yaw": 2.6100380143156983,
          "pitch": 0.013575326084495742,
          "rotation": 0,
          "target": "0-bow"
        },
        {
          "yaw": -0.27820623017431245,
          "pitch": 0.04464673110055628,
          "rotation": 3.141592653589793,
          "target": "2-transom"
        },
        {
          "yaw": -0.7880263927736451,
          "pitch": 0.15294767343186422,
          "rotation": 3.141592653589793,
          "target": "3-walkthrough---stb"
        },
        {
          "yaw": 1.4440821406342028,
          "pitch": 0.32487980781263914,
          "rotation": 3.141592653589793,
          "target": "4-walkthrough---port"
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
        "yaw": 3.107880207901502,
        "pitch": 0.3366886171026575,
        "fov": 1.3608936558192368
      },
      "linkHotspots": [
        {
          "yaw": 3.0950963866085655,
          "pitch": 0.047470049714439355,
          "rotation": 0,
          "target": "1-helm"
        },
        {
          "yaw": -2.455797130831911,
          "pitch": 0.11717356188195183,
          "rotation": 3.141592653589793,
          "target": "3-walkthrough---stb"
        },
        {
          "yaw": 2.705211150169573,
          "pitch": 0.04909862810242771,
          "rotation": 3.141592653589793,
          "target": "4-walkthrough---port"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-walkthrough---stb",
      "name": "Walkthrough - STB",
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
        "yaw": 1.9234016560964111,
        "pitch": 0.4465034553510918,
        "fov": 1.3608936558192368
      },
      "linkHotspots": [
        {
          "yaw": 1.9177145994846443,
          "pitch": 0.21679144941492012,
          "rotation": 0,
          "target": "1-helm"
        },
        {
          "yaw": 2.785234776610803,
          "pitch": 0.25449356769796694,
          "rotation": 0,
          "target": "0-bow"
        },
        {
          "yaw": 0.018298618030868852,
          "pitch": 0.2796077891367936,
          "rotation": 3.141592653589793,
          "target": "2-transom"
        },
        {
          "yaw": 1.8611476941443001,
          "pitch": 0.024819744880218764,
          "rotation": 3.141592653589793,
          "target": "4-walkthrough---port"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-walkthrough---port",
      "name": "Walkthrough - Port",
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
        "yaw": 2.551910783997555,
        "pitch": 0.472419798370483,
        "fov": 1.3608936558192368
      },
      "linkHotspots": [
        {
          "yaw": -2.9157451741454903,
          "pitch": 0.3437885629800199,
          "rotation": 0,
          "target": "2-transom"
        },
        {
          "yaw": 2.14620815573614,
          "pitch": 0.27267116484059173,
          "rotation": 0,
          "target": "1-helm"
        },
        {
          "yaw": 0.34969351238310864,
          "pitch": 0.26314291400701606,
          "rotation": 0,
          "target": "0-bow"
        },
        {
          "yaw": 2.440354804608244,
          "pitch": -0.0030719030044856765,
          "rotation": 3.141592653589793,
          "target": "3-walkthrough---stb"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "T-52 Fish WIP",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
