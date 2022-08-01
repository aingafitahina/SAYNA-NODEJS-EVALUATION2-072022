
const queryback = ["SELECT nom, prenom, avis, note FROM commentaire, formation WHERE typeformation='backend' AND typeformation=formation_typeformation LIMIT 1",
    "SELECT nom, prenom, avis, note FROM commentaire, formation WHERE typeformation='backend' AND typeformation=formation_typeformation LIMIT 1 OFFSET 1",
    "SELECT nom, prenom, avis, note FROM commentaire, formation WHERE typeformation='backend' AND typeformation=formation_typeformation LIMIT 1 OFFSET 2",
    "SELECT nom, prenom, avis, note FROM commentaire, formation WHERE typeformation='backend' AND typeformation=formation_typeformation LIMIT 1 OFFSET 3"
]



const queryfront = ["SELECT nom, prenom, avis, note FROM commentaire, formation WHERE typeformation='frontend' AND typeformation=formation_typeformation LIMIT 1",
    "SELECT nom, prenom, avis, note FROM commentaire, formation WHERE typeformation='frontend' AND typeformation=formation_typeformation LIMIT 1 OFFSET 1",
    "SELECT nom, prenom, avis, note FROM commentaire, formation WHERE typeformation='frontend' AND typeformation=formation_typeformation LIMIT 1 OFFSET 2",
    "SELECT nom, prenom, avis, note FROM commentaire, formation WHERE typeformation='frontend' AND typeformation=formation_typeformation LIMIT 1 OFFSET 3"
]

const querymarketing = ["SELECT nom, prenom, avis, note FROM commentaire, formation WHERE typeformation='backend' AND typeformation=formation_typeformation LIMIT 1",
    "SELECT nom, prenom, avis, note FROM commentaire, formation WHERE typeformation='backend' AND typeformation=formation_typeformation LIMIT 1 OFFSET 1",
    "SELECT nom, prenom, avis, note FROM commentaire, formation WHERE typeformation='backend' AND typeformation=formation_typeformation LIMIT 1 OFFSET 2",
    "SELECT nom, prenom, avis, note FROM commentaire, formation WHERE typeformation='backend' AND typeformation=formation_typeformation LIMIT 1 OFFSET 3"
]

const queryux = ["SELECT nom, prenom, avis, note FROM commentaire, formation WHERE typeformation='backend' AND typeformation=formation_typeformation LIMIT 1",
    "SELECT nom, prenom, avis, note FROM commentaire, formation WHERE typeformation='backend' AND typeformation=formation_typeformation LIMIT 1 OFFSET 1",
    "SELECT nom, prenom, avis, note FROM commentaire, formation WHERE typeformation='backend' AND typeformation=formation_typeformation LIMIT 1 OFFSET 2",
    "SELECT nom, prenom, avis, note FROM commentaire, formation WHERE typeformation='backend' AND typeformation=formation_typeformation LIMIT 1 OFFSET 3"
]

const insertquery = "INSERT INTO commentaire  (nom, prenom, avis, note, formation_typeformation) VALUES (?, ?, ?, ?, ?)"

const bestcomment = ["SELECT nom, prenom, avis, note FROM commentaire, formation WHERE typeformation=formation_typeformation ORDER BY note DESC LIMIT 1 OFFSET 0"]

module.exports = { queryback,queryfront,querymarketing, queryux,insertquery, bestcomment }