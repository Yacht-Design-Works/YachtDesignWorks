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
        "yaw": 1.7323061809648337,
        "pitch": 0.45173515243699214,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": 0.8363414640560052,
          "pitch": 0.3338570059101631,
          "rotation": 3.141592653589793,
          "target": "1-galley"
        },
        {
          "yaw": 1.934413280236317,
          "pitch": 0.17491143581501234,
          "rotation": 3.141592653589793,
          "target": "2-helm-lounge"
        },
        {
          "yaw": 1.3488433183131256,
          "pitch": 0.24369497405519525,
          "rotation": 2.356194490192345,
          "target": "3-hallway_aft"
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
        "yaw": -0.8106693770296296,
        "pitch": 0.5222794992627726,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": 0.3436207434780538,
          "pitch": 0.32695611861924334,
          "rotation": 3.141592653589793,
          "target": "0-salon"
        },
        {
          "yaw": -1.115443388743433,
          "pitch": 0.15049122246943725,
          "rotation": 3.141592653589793,
          "target": "2-helm-lounge"
        },
        {
          "yaw": -1.778539991312151,
          "pitch": 0.2758097780597417,
          "rotation": 2.356194490192345,
          "target": "3-hallway_aft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-helm-lounge",
      "name": "Helm Lounge",
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
        "yaw": 0.8908072962153959,
        "pitch": 0.5345945834840808,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": 1.0727440916914475,
          "pitch": 0.23008774493407103,
          "rotation": 3.141592653589793,
          "target": "3-hallway_aft"
        },
        {
          "yaw": 0.5245627411597091,
          "pitch": 0.1770027548744828,
          "rotation": 3.141592653589793,
          "target": "1-galley"
        },
        {
          "yaw": 0.15835545400528162,
          "pitch": 0.2524233168832506,
          "rotation": 3.141592653589793,
          "target": "0-salon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-hallway_aft",
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
        "yaw": 0.5936509544697177,
        "pitch": 0.4070561973763027,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": 0.9859025402233605,
          "pitch": 0.3320899127227328,
          "rotation": 3.141592653589793,
          "target": "4-hallway_fwd"
        },
        {
          "yaw": -1.8871638345046975,
          "pitch": 0.5890954742947958,
          "rotation": 0,
          "target": "5-owners-cabin_stbd"
        },
        {
          "yaw": 0.7615155976031609,
          "pitch": 0.2789086998938828,
          "rotation": 4.71238898038469,
          "target": "11-twim-cabin_port"
        },
        {
          "yaw": 1.5746606190971786,
          "pitch": 0.272580436925443,
          "rotation": 1.5707963267948966,
          "target": "12-twim-cabin_stbd"
        },
        {
          "yaw": 0.8552861506013301,
          "pitch": 0.0711183208352395,
          "rotation": 4.71238898038469,
          "target": "14-laundry"
        },
        {
          "yaw": 0.99501400313879,
          "pitch": 0.04084558571598862,
          "rotation": 0,
          "target": "15-vip-cabin"
        },
        {
          "yaw": -0.486720668311623,
          "pitch": -0.3423431638947214,
          "rotation": 5.497787143782138,
          "target": "1-galley"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-hallway_fwd",
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
        "yaw": 1.6736120863669237,
        "pitch": 0.5638533614421952,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": 1.6982843959659268,
          "pitch": 0.49802149401017815,
          "rotation": 3.141592653589793,
          "target": "3-hallway_aft"
        },
        {
          "yaw": 1.7172548312261462,
          "pitch": 0.23393949631984512,
          "rotation": 0,
          "target": "5-owners-cabin_stbd"
        },
        {
          "yaw": 1.9779760013162484,
          "pitch": 0.24831599765557932,
          "rotation": 0.7853981633974483,
          "target": "11-twim-cabin_port"
        },
        {
          "yaw": 1.590516280032606,
          "pitch": 0.24996112506006263,
          "rotation": 4.71238898038469,
          "target": "12-twim-cabin_stbd"
        },
        {
          "yaw": 1.2487175914244784,
          "pitch": 0.4795794849593431,
          "rotation": 5.497787143782138,
          "target": "13-share-head--shower"
        },
        {
          "yaw": -2.6527641957457355,
          "pitch": 0.7644921291896303,
          "rotation": 6.283185307179586,
          "target": "14-laundry"
        },
        {
          "yaw": -1.2734700948689408,
          "pitch": 0.31062142758533007,
          "rotation": 0,
          "target": "15-vip-cabin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-owners-cabin_stbd",
      "name": "Owner's Cabin_STBD",
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
        "yaw": 1.6525334492114494,
        "pitch": 0.5580856421470255,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": 1.9058224020104069,
          "pitch": 0.2438582259487454,
          "rotation": 0,
          "target": "3-hallway_aft"
        },
        {
          "yaw": 1.1306175950749306,
          "pitch": 0.20294768113540407,
          "rotation": 3.141592653589793,
          "target": "6-owners-cabin_port"
        },
        {
          "yaw": -0.629399386608398,
          "pitch": 0.3456922217397125,
          "rotation": 0,
          "target": "7-owners-cabin_walkin-closet"
        },
        {
          "yaw": 0.8121457393639719,
          "pitch": 0.15833458139243106,
          "rotation": 4.71238898038469,
          "target": "9-owners-cabin_head"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-owners-cabin_port",
      "name": "Owner's Cabin_PORT",
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
        "yaw": 1.8248931871513552,
        "pitch": 0.3926404495105089,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": 1.2228002083383505,
          "pitch": 0.22331229184481316,
          "rotation": 5.497787143782138,
          "target": "3-hallway_aft"
        },
        {
          "yaw": 2.0578619112571293,
          "pitch": 0.2328509078175376,
          "rotation": 3.141592653589793,
          "target": "5-owners-cabin_stbd"
        },
        {
          "yaw": 2.328522643008359,
          "pitch": 0.11814540120538908,
          "rotation": 1.5707963267948966,
          "target": "7-owners-cabin_walkin-closet"
        },
        {
          "yaw": -2.3006375389965754,
          "pitch": 0.34631871240486944,
          "rotation": 0,
          "target": "9-owners-cabin_head"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-owners-cabin_walkin-closet",
      "name": "Owner's Cabin_Walkin-Closet",
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
        "yaw": 1.7804182658413223,
        "pitch": 0.4033303444305574,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": -0.609915253670259,
          "pitch": 0.3985645882995481,
          "rotation": 0,
          "target": "5-owners-cabin_stbd"
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
        "yaw": 1.8742148079330736,
        "pitch": 0.8466990954474998,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": -1.9476804348804464,
          "pitch": 0.6387712057535193,
          "rotation": 0,
          "target": "9-owners-cabin_head"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-owners-cabin_head",
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
        "yaw": 1.9220040000402028,
        "pitch": 0.6437843437242101,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": 0.8189382276687986,
          "pitch": 0.3038833982057696,
          "rotation": 0,
          "target": "8-owners-cabin_shower"
        },
        {
          "yaw": -2.4672170686070682,
          "pitch": 0.5262492205784834,
          "rotation": 0,
          "target": "10-owners-cabin_toilet"
        },
        {
          "yaw": -0.9277177606430165,
          "pitch": 0.5602697173468769,
          "rotation": 6.283185307179586,
          "target": "6-owners-cabin_port"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-owners-cabin_toilet",
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
        "yaw": 0.45647920946066733,
        "pitch": 1.1289138170623367,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": 2.4862782508090806,
          "pitch": 0.7955686409004823,
          "rotation": 0,
          "target": "9-owners-cabin_head"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-twim-cabin_port",
      "name": "Twim Cabin_PORT",
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
        "yaw": 1.3012078663008886,
        "pitch": 0.6047302647463653,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": -2.9156740095246274,
          "pitch": 0.46999177660162594,
          "rotation": 1.5707963267948966,
          "target": "3-hallway_aft"
        },
        {
          "yaw": -3.1212195946994754,
          "pitch": 0.49142791275902376,
          "rotation": 4.71238898038469,
          "target": "4-hallway_fwd"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-twim-cabin_stbd",
      "name": "Twim Cabin_STBD",
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
        "yaw": 2.020838496765676,
        "pitch": 0.5764731635318405,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": -2.0809011747718245,
          "pitch": 0.41087580462313866,
          "rotation": 4.71238898038469,
          "target": "3-hallway_aft"
        },
        {
          "yaw": -1.6409420428542951,
          "pitch": 0.4096483672472502,
          "rotation": 7.853981633974483,
          "target": "4-hallway_fwd"
        },
        {
          "yaw": -0.44935767404371774,
          "pitch": 0.3763846534581141,
          "rotation": 0,
          "target": "13-share-head--shower"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-share-head--shower",
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
        "yaw": 1.0320242932557413,
        "pitch": 0.9665576699898821,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": -2.629088016410929,
          "pitch": 0.6428870717241573,
          "rotation": 0,
          "target": "12-twim-cabin_stbd"
        },
        {
          "yaw": -1.6173786826937953,
          "pitch": 0.29927785754691527,
          "rotation": 4.71238898038469,
          "target": "3-hallway_aft"
        },
        {
          "yaw": -1.3834365160097661,
          "pitch": 0.3116229720203769,
          "rotation": 1.5707963267948966,
          "target": "4-hallway_fwd"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-laundry",
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
        "yaw": -2.034948662222627,
        "pitch": 1.1952776034282788,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": 0.43753476370493516,
          "pitch": 0.4834220663510802,
          "rotation": 1.5707963267948966,
          "target": "3-hallway_aft"
        },
        {
          "yaw": -0.39650112765623646,
          "pitch": 0.48132270371829833,
          "rotation": 4.71238898038469,
          "target": "4-hallway_fwd"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-vip-cabin",
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
        "yaw": 1.3456393875347672,
        "pitch": 0.46751733527373673,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": -1.364066902980305,
          "pitch": 0.41572286727491736,
          "rotation": 0,
          "target": "4-hallway_fwd"
        },
        {
          "yaw": -3.0153086812775403,
          "pitch": 0.2996907107887594,
          "rotation": 0,
          "target": "17-vip-cabin_head"
        },
        {
          "yaw": -0.6459348459867531,
          "pitch": 0.4121312781064148,
          "rotation": 0,
          "target": "16-vip-cabin_shower"
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
        "yaw": 0.4880330257948575,
        "pitch": 1.1425648007586258,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": -1.5465402972046682,
          "pitch": 0.6684585888909051,
          "rotation": 0,
          "target": "15-vip-cabin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-vip-cabin_head",
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
        "yaw": 1.7295401596065494,
        "pitch": 0.7888187068826547,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": -1.0885418375125688,
          "pitch": 0.8370272288591689,
          "rotation": 0,
          "target": "15-vip-cabin"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "20230710 SarahB_Interior Updates",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
