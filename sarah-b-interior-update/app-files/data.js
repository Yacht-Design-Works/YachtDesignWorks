var APP_DATA = {
  "scenes": [
    {
      "id": "0-salon",
      "name": "Salon",
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
        "yaw": 1.799956126285064,
        "pitch": 0.3159111458487516,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": 0.5584763129138626,
          "pitch": 0.43502150941983864,
          "rotation": 3.141592653589793,
          "target": "1-galley"
        },
        {
          "yaw": 1.1134290221376268,
          "pitch": 0.2903997670255727,
          "rotation": 0.7853981633974483,
          "target": "2-hallway_aft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-galley",
      "name": "Galley",
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
        "yaw": 3.00338850816744,
        "pitch": 0.4852443320008426,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": 2.4325053506349708,
          "pitch": 0.27553282955750724,
          "rotation": 3.141592653589793,
          "target": "2-hallway_aft"
        },
        {
          "yaw": -1.866079547327132,
          "pitch": 0.3327017605708349,
          "rotation": 9.42477796076938,
          "target": "0-salon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-hallway_aft",
      "name": "Hallway_Aft",
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
        "yaw": 1.99420503555661,
        "pitch": 0.3412631658322294,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": 0.1633695785359759,
          "pitch": -0.30389420573528625,
          "rotation": 5.497787143782138,
          "target": "1-galley"
        },
        {
          "yaw": 1.6423023768662386,
          "pitch": 0.3799276847826718,
          "rotation": 3.141592653589793,
          "target": "3-hallway_fwd"
        },
        {
          "yaw": -1.23782620977817,
          "pitch": 0.41726788194557685,
          "rotation": 0,
          "target": "4-owners-cabin_stb"
        },
        {
          "yaw": 2.2735453854485845,
          "pitch": 0.17101773608255222,
          "rotation": 1.5707963267948966,
          "target": "13-twin-cabin_stb"
        },
        {
          "yaw": 1.6822708537110422,
          "pitch": 0.04072812926902003,
          "rotation": 0,
          "target": "14-vip-cabin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-hallway_fwd",
      "name": "Hallway_Fwd",
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
        "yaw": 1.5456925819827037,
        "pitch": 0.5709881160904722,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": 1.397069434088035,
          "pitch": 0.47319197027751514,
          "rotation": 3.141592653589793,
          "target": "2-hallway_aft"
        },
        {
          "yaw": 1.4319826048895106,
          "pitch": 0.19552603285912262,
          "rotation": 0,
          "target": "4-owners-cabin_stb"
        },
        {
          "yaw": 2.472765359021249,
          "pitch": 0.7023479660098886,
          "rotation": 0.7853981633974483,
          "target": "10-laundry"
        },
        {
          "yaw": 1.6101048861977958,
          "pitch": 0.22981355195758546,
          "rotation": 0.7853981633974483,
          "target": "12-twin-cabin_port"
        },
        {
          "yaw": 1.1875998322553443,
          "pitch": 0.4578327966136335,
          "rotation": 4.71238898038469,
          "target": "11-share-head--shower"
        },
        {
          "yaw": -1.5762865980644385,
          "pitch": 0.7096724462666977,
          "rotation": 0,
          "target": "14-vip-cabin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-owners-cabin_stb",
      "name": "Owner's Cabin_STB",
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
        "yaw": 1.9808273679639683,
        "pitch": 0.4314833776668685,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": 1.8309956838271084,
          "pitch": 0.18706248582826035,
          "rotation": 0,
          "target": "2-hallway_aft"
        },
        {
          "yaw": -1.1167557531037087,
          "pitch": 0.2886682358717856,
          "rotation": 0,
          "target": "6-owners-cabin_walkin-closet"
        },
        {
          "yaw": 1.0119739819086995,
          "pitch": 0.3094559400056127,
          "rotation": 3.141592653589793,
          "target": "5-owners-cabin_port"
        },
        {
          "yaw": 0.7187696783789921,
          "pitch": 0.09079157412995187,
          "rotation": 4.71238898038469,
          "target": "7-owners-cabin_head"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-owners-cabin_port",
      "name": "Owner's Cabin_Port",
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
        "yaw": 2.964175041225994,
        "pitch": 0.48537095933749796,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": 3.0547200720600403,
          "pitch": 0.3005020071298574,
          "rotation": 3.141592653589793,
          "target": "4-owners-cabin_stb"
        },
        {
          "yaw": -2.905432625807771,
          "pitch": 0.0924352466106555,
          "rotation": 7.853981633974483,
          "target": "6-owners-cabin_walkin-closet"
        },
        {
          "yaw": -0.8507172289422691,
          "pitch": 0.27693483261898777,
          "rotation": 0,
          "target": "7-owners-cabin_head"
        },
        {
          "yaw": 2.24304994742148,
          "pitch": 0.1490980634916923,
          "rotation": 0,
          "target": "2-hallway_aft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-owners-cabin_walkin-closet",
      "name": "Owner's Cabin_Walkin Closet",
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
        "yaw": 1.9365924854554555,
        "pitch": 0.6688102929750208,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": 0.9784941908367948,
          "pitch": 0.3476151549406641,
          "rotation": 0,
          "target": "4-owners-cabin_stb"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-owners-cabin_head",
      "name": "Owner's Cabin_Head",
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
        "yaw": 2.3629466911428185,
        "pitch": 0.7899256442722766,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": -0.13901880022244306,
          "pitch": 0.3546848325295855,
          "rotation": 0,
          "target": "3-hallway_fwd"
        },
        {
          "yaw": -1.3985909315178837,
          "pitch": 0.3281905320637364,
          "rotation": 0,
          "target": "9-owners-cabin_toilet"
        },
        {
          "yaw": 1.5669994925609663,
          "pitch": 0.23455728228758765,
          "rotation": 0,
          "target": "8-owners-cabin_shower"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-owners-cabin_shower",
      "name": "Owner's Cabin_Shower",
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
        "yaw": 1.4228446727702266,
        "pitch": 0.45628391241301713,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": -0.3901954409297659,
          "pitch": 0.43539775035638684,
          "rotation": 0,
          "target": "7-owners-cabin_head"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-owners-cabin_toilet",
      "name": "Owner's Cabin_Toilet",
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
        "yaw": -2.7573552275216997,
        "pitch": 0.9471653802561519,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": -2.2981555978509896,
          "pitch": 0.40832511542411964,
          "rotation": 0,
          "target": "7-owners-cabin_head"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-laundry",
      "name": "Laundry",
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
      "id": "11-share-head--shower",
      "name": "Share Head & Shower",
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
        "yaw": 1.6936905848692092,
        "pitch": 0.5512729181300582,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": 2.8257333594923892,
          "pitch": 0.40206847109551447,
          "rotation": 0,
          "target": "13-twin-cabin_stb"
        },
        {
          "yaw": -0.9787855971132213,
          "pitch": 0.33009539426752355,
          "rotation": 0,
          "target": "3-hallway_fwd"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-twin-cabin_port",
      "name": "Twin Cabin_Port",
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
        "yaw": 1.7682157758362074,
        "pitch": 0.7070754768763372,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": -2.6926357815381206,
          "pitch": 0.37125749682322784,
          "rotation": 0,
          "target": "2-hallway_aft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-twin-cabin_stb",
      "name": "Twin Cabin_STB",
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
        "yaw": 2.16688438742717,
        "pitch": 0.5572953178028399,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": -2.057282739983023,
          "pitch": 0.43478908588541465,
          "rotation": 0,
          "target": "2-hallway_aft"
        },
        {
          "yaw": -0.22732119380120075,
          "pitch": 0.3372667428412832,
          "rotation": 0,
          "target": "11-share-head--shower"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-vip-cabin",
      "name": "VIP Cabin",
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
        "yaw": 1.5937608635407194,
        "pitch": 0.442670994236547,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": -0.9759992592954916,
          "pitch": 0.4276552681146182,
          "rotation": 0,
          "target": "3-hallway_fwd"
        },
        {
          "yaw": -0.14786267730819702,
          "pitch": 0.31629966174424595,
          "rotation": 0,
          "target": "16-vip-cabin_shower"
        },
        {
          "yaw": -2.97884338562114,
          "pitch": 0.24238457904425204,
          "rotation": 0,
          "target": "15-vip-cabin_head"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-vip-cabin_head",
      "name": "VIP Cabin_Head",
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
      "linkHotspots": [
        {
          "yaw": -1.925323088960205,
          "pitch": 0.5869185529969538,
          "rotation": 0,
          "target": "14-vip-cabin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-vip-cabin_shower",
      "name": "VIP Cabin_Shower",
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
        "yaw": 2.1382377508699815,
        "pitch": 0.3582347080742423,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": -1.4000492952159966,
          "pitch": 0.6073016254320418,
          "rotation": 0,
          "target": "14-vip-cabin"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Sarah B Interior Update",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
