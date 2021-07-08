'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "3c1221137e3a5a12a08db760d535eec2",
".git/config": "51030db491cae256b27ab7b65c162cc5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "bd950665acd49c59fb7ee2580553c290",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "631fd6cee5f753635e6d645f85c14394",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8c4fc74b0dea23df5bbaff923dab8bdc",
".git/logs/refs/heads/main": "8b9aa38e98102a26cecfcb27f1aa87e6",
".git/logs/refs/remotes/origin/master": "a328a4626b9655b52bc7f61c2e387e39",
".git/objects/01/7938f151cac3032753c3a08c0b2fa869d07b75": "db3468ea410fb76f3d354718ca198676",
".git/objects/07/197051ac66db9da6b352aad690dc58754dafa5": "ed24b41771bc350e60d8663e5ae0e7fa",
".git/objects/07/d5acc778ae29ef4d8744ac3da305f62e5cb8fb": "79c7ff8d80baa21f181f76886a9e1a2e",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "92a1272697ebd8e8828980bccd9688af",
".git/objects/09/83dc794cd6319cfbedb8d1ea0332cf0deb3ccb": "555de42c459919aa3744a5c3f95f671b",
".git/objects/0b/e682cf85c011687c8d31eea744d132b53f5ece": "c89da4441dc5a87f3835a757067c8c6e",
".git/objects/10/1dfa34e364c0df8d63a2fc24561e0bae8a2dbb": "d43e7edd96246449e31771a2b4f76444",
".git/objects/12/a964c215256436b4cd6d06732c99889eb1d2e9": "ad439f7e522ba46cc022375473a570f2",
".git/objects/15/853bc5b1e909613ad2ebce461ca43fa127a486": "e61627ad7a65c872cf0e9d1f35cd9cf7",
".git/objects/15/b5c0d2e1b5e3feacff7135ee0205774b171477": "76e71bbf58311ee02b6703328ab38445",
".git/objects/16/10d48d94277e1d1af8ac90f79eb8570395efb6": "56b891735ebbd77b06ed1abc28400adb",
".git/objects/1a/186f9f920ef9bf5b0b1a3128d5450dba2e9ec4": "fe19c344abf6fcd5e2343f8b9b9bae03",
".git/objects/1b/85ab9d2ff228e78bfb3dffb9b10fc4a878ab9a": "fda8cfc551a189e427ac6d28ce3386df",
".git/objects/1c/ee16b2d505f5eaa2e3a4102222ea4e7416a9f9": "398f2474af8ebcfe8635ddad3bd539c5",
".git/objects/1d/ec9a6f1673d760c6b1961d6cf87109dcbfdfa8": "e0288e3871d51b87655511947d824d30",
".git/objects/1e/9b4498cec640997f683055392e14f714916842": "c28b3ba1951fe4f53ba468958e4591e3",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/5a918cad4777b37c0f2502605f931e6640c973": "b40eadec6b6611de272f796fb127b38a",
".git/objects/23/2736137cdd696d88597d39473ec42e39f813a9": "c02a37e50fe84a33f793913d56aa2d44",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/a4222cfd0dcd7c7a47cd9389aca4cc73e1517b": "e25ef920ecfa0c421174912114c171f8",
".git/objects/28/197a59740ff7af41d7609a3ed83a3ad3850d4a": "b68183dd7d7640db7d589750c5268204",
".git/objects/2a/9cd53fd3251c516daba301a019a25b8bbee6a5": "e2dd172720e6841640c42e124a8764c5",
".git/objects/2c/9f24c95514d35ae5e44fe4157e00ea3e67e07f": "8916e5ba0e4e7d25dbd18baeedb988bb",
".git/objects/30/2007f05f055b1403ae79393abe03c816c083ac": "0ed57d6ec77274bcef091a18c49457f1",
".git/objects/31/86d1a0b29d552a57862e41bdcba3eaf4d3b08f": "56bdfb0dc2fc3de1f879e4bbb2a70fb7",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/38/f516bbb67e0d7a63fa37ac46dda81c82f8c203": "84f6bf88e7febafedc82dc77df7a6ac7",
".git/objects/3a/035513e4b42731b46c90a6a18d41196626dfdb": "0921294d4de9c2274304a44495b74c5c",
".git/objects/3a/bade686ba6fa6f53c575d85ef5bc583b97d4e8": "aa80a8a595ed964ee419209f6e578649",
".git/objects/3c/fafe2e113d8ab63f6083d65bed2d83a9ad20c6": "a8796cf5c7b7c69a83544e9f81e3b4a8",
".git/objects/42/d507aa828e631ac8f949673ee2cedd7304a266": "ef02bd9c81acba62c9a705b817710162",
".git/objects/45/d196af61a2be022371890bb750fef0071b6c37": "3067c6ca85757d2887cbf183ee226a0b",
".git/objects/48/bb867ff4e829c1eb778c2373acde253db3d795": "a3f5fc06a52be7bce9055e28db32a220",
".git/objects/49/5f3cdb060bdbccf089ecad7228af0c24e6d7ef": "722f36856630aad119d7b6785162cc74",
".git/objects/4e/0d4e4507921ed5ce1359167284ccc4387129dd": "56218479ad326b3c20ff924b2d14a10f",
".git/objects/50/1665e6ff52561d81bc3d37b56ae11cb1e3e98e": "5a0821da90d04ceab5c6b4afe558dd21",
".git/objects/52/1d5d980f9cc3ec79ebbadcc7730ef283bc5c9a": "9b5005a2e53cb1d514f6103ce7ce2055",
".git/objects/53/88eb80ea658c42cbad3c2507419db329af0dff": "236f2cb0d2a3685edc01524c1134f9bf",
".git/objects/58/0b1e59f9ea5a0b9b5edbf7ef3f36bca35f7368": "11ca22e9017df4a586fd8e62d3131477",
".git/objects/58/efd70500df20d0c4eb222ebe4168ac968e182d": "70cff9cabdbdf7bb64e6ff9908317de3",
".git/objects/58/f710e61e84adefbb22a6fbcc1c47a16b06aa45": "6325a57d47b747baa187b2e263929241",
".git/objects/5b/b52ce4f58ac91217e78ae3a0a0ab043ee8e91f": "b408b29e8b9bd28c564651f03d34d002",
".git/objects/5c/3be645db4a4c6cb9e0b6bfd8029600cb056504": "ecbe14602e4d0d0e188bf04929b33c65",
".git/objects/5e/f14b33c1fb2343867bce11ad8844ffe4012bd2": "378df32b575e1593c05bf760598afb90",
".git/objects/62/ce024d30df1e8c62d7e2f66a67371bdcce1d31": "8ec3e3f1240fe26f2a25cc88b4b4486a",
".git/objects/66/3e5cc37b5e981f2ad1ee54caafc4000d541862": "f5b6d0606ac0c55c1549dbfa769bc518",
".git/objects/66/f6ff156dcb69140e73d25242c65b2ea27db031": "8acb3e6876f701d60b8639f449b3acb5",
".git/objects/67/8a3f6f61ffb2bb7c689dea1c7e7749b81efc17": "692f3677b6320feabace093242869232",
".git/objects/67/adac06c15ad82a225c25e0f37439848b5af680": "863d9217a10e271f442cd3d3db65ec10",
".git/objects/68/97cde0dd3988758f871d28282905e1b3330159": "3e9565a7888c61654d58768f83f1f8c6",
".git/objects/69/2487f48f6e0f68bcaa5251503c27d92acc8fae": "93c5ce9423a7892f3b6a073cef3e64c8",
".git/objects/6d/099dc82c22b095c0982e0cc30764e43f9652c0": "788467c666a24c9573cb063a216396a9",
".git/objects/70/2b55ca525736e152168798384b529cd9805bc8": "39bac560d66dfab3eb3a4e39f9acbd1c",
".git/objects/71/a606d2566286c6ac5b8e3692ee2fbd2811a619": "61d6f051d99e96218770bc5833de1ddb",
".git/objects/72/76aa5638e7f8552cbced28ffb979d75b1986a1": "e7dfa98b36b2a96f5e51454a464a8215",
".git/objects/73/12b6a0db8180d8dbb76c5d9e9c1c5cdc692a27": "d31af96df3c08bfd44ef2f2e73466db1",
".git/objects/73/d31c83c67a60d1e1541fa570957cca529f7028": "1baed2b2abe076e6c520d008489e6e2b",
".git/objects/76/e2ffc4b497d02f90352af677b9c92b8523004e": "67bbf131d474232aeb755461a2589d3b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/7d8414beb1f4dc4195191da4b46bc25673a3cc": "c785ee36f7511fceddc80e1f24b60359",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "c7cb43116911123623109dfabc3d5545",
".git/objects/84/9a5ea657977e49a88d01eceb564a9be903d5c4": "ae7d09d578ba0c4ab7363374e975daf4",
".git/objects/85/b4182a13a87548347caea043389939f9c1981d": "b20b9471294c0f371a09929b613fbe2f",
".git/objects/87/0ed910b86eb4cbf05f865291fb624634d48bea": "218a9b1816404a95da9298e9e8e24e4f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/928be0ea88b8418d2c12b8c0e4d1f6681ad38a": "0e891e830f249e2e3e557433545c8b68",
".git/objects/8c/e4d3fda2223daed9bc565cfcaa7c801c36115f": "b97ddde7c97da4c3f8bc555c45a26b73",
".git/objects/8e/e1f8da09d69d455612c7de14d19d2dd0f000c1": "03d0bdb06d94f46f52a2f0add2acaa5d",
".git/objects/8f/f3eae8ab215b7e3d9a8d5572f5ecc5d6ed1ed2": "ab1a4937e0010eb132280fe9c678cbe1",
".git/objects/8f/fd7add6cec25c5f019d68f2926a89a1b4cbde3": "309d9cdf1b2ce38c10add846a97d9b41",
".git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "be1bc3e11d0c0b656515e7f4197a90d5",
".git/objects/93/eb6acffe5839c8669a695af22137e8017e727e": "f29b203493d74349b44db0b4391cb52f",
".git/objects/95/ca8b6df48cd3531977dd8e8052f762a690fac4": "051d506e66e8a483b39e6ed0a93acd36",
".git/objects/98/376a7fff3a95cff74627d48ec76b288814a587": "7f4e96a6512a0838b6c6b5d7772a9105",
".git/objects/99/3b967395ad877b5def6dfc2378021baa085f8c": "fb1d1a6ccf2d8e6e3b30fe295d075b63",
".git/objects/99/54920d24a09441a754ca36450da4599a9d1571": "cf28a6565fe3ead9e4d11078dd038339",
".git/objects/9c/0b9e69889570cb6a304350f5e54d3d711447b5": "8169b3ed36eb6c52b193d7d63c625a36",
".git/objects/9f/c2db864d5f38f9bb671e23dbb211d29ef38cbf": "0497faa00f18ce0980ffce8422c19c46",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/34cb5bdc7faa4bbe9483dcb7cbf1653416e569": "0c039234acc5770ac20776a9aa7a4f0b",
".git/objects/ad/9671a24849a0e2f10eb26afe10137aac0bb66c": "5763f5876df63c99133337a003d27082",
".git/objects/af/38bd9615e4a40093b3bec6953399e67607cea7": "ba4b33c2ec023ef3afb88a8098086894",
".git/objects/af/c837e5ff7acd78e29fa9a701da082f5db5e72e": "3f2b7afbc701ef42b28165c5063ed0c2",
".git/objects/b6/c72b94280bb7769da7aa31d6498d36b3c518bb": "076f40d780c1598b1cf2f1ebcd3d7949",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "7632aefdc3d9f020d7b2725c48622a3c",
".git/objects/b8/8349d4545da2ca7948a897d89d4bb3248a8ff4": "d7f20855835682220a6abe5d4b47cf94",
".git/objects/be/940e0bc62b06766a7f1a937b0d12ecfb750a90": "bb962c56d9907b75d41cc00971c4c0b4",
".git/objects/be/e68193d8fec43f00a87f9cda063239ba242c03": "ade98324a2e46b5bceed2b3c76218ce2",
".git/objects/bf/05c70f91afb0b3772b70ade90dfb9f01d00938": "ea09a3c0bd7a94567af673c1df2ed3f7",
".git/objects/c0/802c5fba60f87fff58866a802530a8c179ea20": "a4de48639936aa7dad077eee23fda26c",
".git/objects/c1/b0421e1ad75390e6396f000b2d64ffe6c7b70a": "bb121cc606ea99212a369c66b900e20a",
".git/objects/c1/c768a02cd5e5ca8298255d7a5a03fad615eed6": "33cc58ccd12eab4580bb07c836f66616",
".git/objects/c4/4977cd5f0ed2a06d004433e1672f806bf35274": "1cfee1847d82dc2c921fd52112141e4e",
".git/objects/cb/3416283fbe73fbe0ef239a0ea3d3dd5a419530": "ca51edbd6d7612427b70c0de99e2a26a",
".git/objects/cc/a1b95727921564f20765ce46463b7c765f9709": "93691601a0690de0fe5c6e7648c3def0",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "e96f96a6941aeae74366875f450c7680",
".git/objects/cd/e171ef2abc24fa428b031d84ec6dd4e55dd286": "90301ee686364d58a515eeda08780ca8",
".git/objects/ce/e9d165d1e5eedbc10c2d84a73cd10774885ede": "a66daa54200b4072e883aa03c2f34915",
".git/objects/cf/decfd4af76c56d1367f2adf65cbc6ed9bb69c1": "3d0ce8100c786698c93ea8032ac2f4e3",
".git/objects/d1/30817bc929a87ee1de4fac70e65a76ae3c6e5b": "853888ebe84ca52db79e0217c1b3c087",
".git/objects/d1/6165a12130694337e427eea54244f3a58a983f": "342f00bfefef621893fa7b484b5a20b9",
".git/objects/d1/ec42a5bdfec976bcdc69773bf2095889224cd1": "053a3982140ec076ac0fec7ca5a41f9d",
".git/objects/d1/ec5b86e9d5f4379ca2b5d4e131103ee4c1c5f6": "59aa2cbc81470f05eb9c3d56803ef020",
".git/objects/d3/34df341a141c81e9eef39323480a36a858199b": "823b8981819c9cf4a2a9c544457689f9",
".git/objects/de/885f950c7ce25b3fc399286d9b767468245aa9": "52dd494fb0a901a0e6af242aef203f12",
".git/objects/df/799b86d235275519961779914fb47d12905032": "737a229bda1317cd202a837fc4af1988",
".git/objects/e0/91c278e4ed543858c797bd358f5e8ffe1ec581": "ada10ce1cbb424a5094913a7bf391930",
".git/objects/e0/fbd627182e6046509cd0c89f67cee40c5b9d07": "3b80ebf7ca1e10484c1fa34e1fa490b1",
".git/objects/e3/a7fbb0cfdffbad27af9710d42b96e3e6533962": "70bb7db6e327587f949013f7ff1c5815",
".git/objects/e3/db8936d8c94af33b17eeca766f68eaaa0f5c61": "c98a3998537e23dff7eef9d54600363b",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/db3ec61a197dc8c85ffcedabfae94281909e42": "a4207a9ce3ab7f2d221d837fa80f86a1",
".git/objects/e6/9edc9a26eb5877077a912cfbaa242c2215e5b0": "93870a73b7f08db5734fdc6950d444e5",
".git/objects/e6/bfb07cbe8112a47137177a04e64dbc493ff88a": "cd6a42d9b022dbf9f4a4d217be53c106",
".git/objects/e9/fb830b14844539b39ac4c9d416f1c28402d237": "fbd71272c689da6c204544ce33b973f5",
".git/objects/ec/c88caca39115143751b0be9fdec4f8a0a48b30": "f6b908cd9829009ac8ac0a24a106ea9a",
".git/objects/ed/d621b67412db0c96bf3b1a5fb2cb6efdbab48d": "0de56d4fba2f23000eb8bb23d9e46292",
".git/objects/ef/b3c2d0e595fbae3065901b1f77ad25fdcefa89": "63651b5f758f7f5395bba8287f4df504",
".git/objects/f0/adab531cdb75498088738063d24a33ef2929a1": "1ad314ac05bf9884a74e0dae09f8276d",
".git/objects/f0/c07f6a96e444864dc1a79d458ad3e14a2031c0": "3b97b5139f37d7067f3fb76526f18e26",
".git/objects/f1/58339c49f252144b0e665ab8aed9b52b99dca3": "fba69544fe09d78646ccfa6606e51ef6",
".git/objects/f1/98d2f359d291b66e3a5aa79ef2529b554f22ce": "079ecdad20a46b44f1476dd029fe319b",
".git/objects/f5/616b6e18abd18e61ab0d6c90516669f7f51284": "244c3d6e761a667e0cbc3bb246d48f20",
".git/objects/f6/fe6983f05b84b7d62fc0a8e20557e3ad715cfd": "3e121b7208478f5f36514e9a0ae88694",
".git/objects/f7/547db6768c493a13ebb043fc79c22d3177b55b": "e14d83109ab0532cd96b1c6a1b7d1b72",
".git/objects/fb/38a589ba9e1f17869f8218270f753ac93da245": "cb87d69c43cd28c35157eddcfa78adb4",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "b8ce98ec65dcd147260107f147b24778",
".git/objects/fe/5d16550bd3470757386d2c0a50c266963bd444": "fa602575e7a1d894743f32a8c10de4c1",
".git/objects/ff/7785382aef2204b9fe47b95751f8312862c6b2": "938197216e513664f2ac36c109dbde4a",
".git/ORIG_HEAD": "545c6e41b467580cfdd17012b8105737",
".git/refs/heads/main": "e2acba45fca3b59ca1a3e5c3a7a3db0c",
".git/refs/remotes/origin/master": "e2acba45fca3b59ca1a3e5c3a7a3db0c",
"assets/AssetManifest.json": "96d2833d90f606621e50ce9a97ff1f78",
"assets/assets/animations/upload.json": "5cc5e68ae1ee00d4f605baead14f4329",
"assets/assets/images/enderchest.png": "0e884cd33dc9821e450f79fa7c00964c",
"assets/assets/images/enderchestlogo.png": "eb857c97a680c886a38e578b98ec5ea3",
"assets/assets/images/logo2.png": "6fe8ddf76da37d6092f7e70221f0c157",
"assets/assets/svgs/logo.svg": "5e14d3fbc62f9d0651950656c6cb5dd2",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "5625c66ccee0480bedc797d6bc766490",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/logo2.png": "6fe8ddf76da37d6092f7e70221f0c157",
"index.html": "ab442edbb6ade503c28685b111ae78f5",
"/": "ab442edbb6ade503c28685b111ae78f5",
"main.dart.js": "eaccb117648a877c5d3ca8057d29ac56",
"manifest.json": "9dd32ab24831d1f03f825fe3c4a6f30c",
"README.md": "46ff76e36cfa046f3760e8cd54206357",
"version.json": "66ec05f3c3f69545e0353398e8c6220c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
