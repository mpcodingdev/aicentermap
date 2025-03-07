// Data for European AI Research Centers
const europeanResearchCenters = {
    "United Kingdom": [
        {
            name: "DeepMind",
            city: "London",
            coordinates: [51.5074, -0.1278],
            description: "World-leading AI research lab known for AlphaGo and groundbreaking work in reinforcement learning and AI systems.",
            website: "https://deepmind.com/",
            rating: 9.9
        },
        {
            name: "University of Oxford - Department of Computer Science",
            city: "Oxford",
            coordinates: [51.7577, -1.2618],
            description: "World-leading research in AI, machine learning, and robotics.",
            website: "https://www.cs.ox.ac.uk/",
            rating: 9.8
        },
        {
            name: "University of Cambridge - Department of Computer Science and Technology",
            city: "Cambridge",
            coordinates: [52.2053, 0.1218],
            description: "Pioneering research in machine learning and artificial intelligence.",
            website: "https://www.cst.cam.ac.uk/",
            rating: 9.7
        },
        {
            name: "University College London - AI Centre",
            city: "London",
            coordinates: [51.5246, -0.1339],
            description: "Cutting-edge research in machine learning and AI applications.",
            website: "https://www.ucl.ac.uk/ai-centre/",
            rating: 9.5
        },
        {
            name: "University of Edinburgh - School of Informatics",
            city: "Edinburgh",
            coordinates: [55.9445, -3.1872],
            description: "One of Europe's largest and most influential academic AI research centers with pioneering work in NLP.",
            website: "https://www.ed.ac.uk/informatics",
            rating: 9.6
        },
        {
            name: "Imperial College London - AI Research Centre",
            city: "London",
            coordinates: [51.4988, -0.1749],
            description: "Research in AI, machine learning, and data science.",
            website: "https://www.imperial.ac.uk/artificial-intelligence/",
            rating: 9.4
        }
    ],
    "Switzerland": [
        {
            name: "ETH Zurich - AI Center",
            city: "Zurich",
            coordinates: [47.3769, 8.5417],
            description: "World-class AI research center at one of Europe's top technical universities with pioneering work in machine learning.",
            website: "https://ai.ethz.ch/",
            rating: 9.7
        },
        {
            name: "EPFL Artificial Intelligence Laboratory",
            city: "Lausanne",
            coordinates: [46.5196, 6.5656],
            description: "Leading research laboratory working on machine learning, computer vision, and computational neuroscience.",
            website: "https://www.epfl.ch/labs/lapis/",
            rating: 9.5
        },
        {
            name: "IDSIA - Dalle Molle Institute for Artificial Intelligence",
            city: "Lugano",
            coordinates: [46.0037, 8.9511],
            description: "Research institute focusing on machine learning, deep learning, and reinforcement learning.",
            website: "http://www.idsia.ch/",
            rating: 9.3
        }
    ],
    "Germany": [
        {
            name: "Max Planck Institute for Intelligent Systems",
            city: "Tübingen",
            coordinates: [48.5379, 9.0573],
            description: "Leading research in machine learning, computer vision, and robotics.",
            website: "https://is.mpg.de/",
            rating: 9.5
        },
        {
            name: "German Research Center for Artificial Intelligence (DFKI)",
            city: "Kaiserslautern",
            coordinates: [49.4254, 7.7553],
            description: "One of the world's largest AI research centers with multiple locations across Germany.",
            website: "https://www.dfki.de/en/web",
            rating: 9.3
        },
        {
            name: "Technical University of Munich - Department of Informatics",
            city: "Munich",
            coordinates: [48.1496, 11.5678],
            description: "Research in AI, machine learning, and computer vision.",
            website: "https://www.in.tum.de/en/in/research/research-areas/artificial-intelligence-machine-learning/",
            rating: 9.2
        },
        {
            name: "Bosch Center for Artificial Intelligence",
            city: "Renningen",
            coordinates: [48.7784, 8.9252],
            description: "Industrial research center focusing on applied AI and machine learning.",
            website: "https://www.bosch-ai.com/",
            rating: 9.0
        }
    ],
    "France": [
        {
            name: "INRIA - French Institute for Research in Computer Science and Automation",
            city: "Paris",
            coordinates: [48.8566, 2.3522],
            description: "National research institution focusing on computer science and applied mathematics.",
            website: "https://www.inria.fr/en",
            rating: 9.4
        },
        {
            name: "Paris Artificial Intelligence Research Institute (PRAIRIE)",
            city: "Paris",
            coordinates: [48.8649, 2.3800],
            description: "Collaborative research institute bringing together academic and industrial partners.",
            website: "https://prairie-institute.fr/",
            rating: 9.2
        },
        {
            name: "Sorbonne University - ISIR (Institute for Intelligent Systems and Robotics)",
            city: "Paris",
            coordinates: [48.8462, 2.3371],
            description: "Research in robotics, AI, and machine learning.",
            website: "https://www.isir.upmc.fr/",
            rating: 9.0
        }
    ],
    "Netherlands": [
        {
            name: "University of Amsterdam - AMLAB",
            city: "Amsterdam",
            coordinates: [52.3676, 4.9041],
            description: "Research in machine learning, computer vision, and natural language processing.",
            website: "https://amlab.science.uva.nl/",
            rating: 9.1
        },
        {
            name: "Delft University of Technology - AI Research Group",
            city: "Delft",
            coordinates: [51.9981, 4.3768],
            description: "Research in AI, machine learning, and computer vision.",
            website: "https://www.tudelft.nl/en/ai/",
            rating: 9.0
        },
        {
            name: "Radboud University - Donders Institute for Brain, Cognition and Behaviour",
            city: "Nijmegen",
            coordinates: [51.8125, 5.8372],
            description: "Research in cognitive neuroscience, AI, and machine learning.",
            website: "https://www.ru.nl/donders/",
            rating: 8.9
        }
    ],
    "Italy": [
        {
            name: "Italian Institute of Technology - Center for Human Technologies",
            city: "Genoa",
            coordinates: [44.4056, 8.9463],
            description: "Research in robotics, AI, and machine learning.",
            website: "https://www.iit.it/",
            rating: 9.0
        },
        {
            name: "University of Bologna - Department of Computer Science and Engineering",
            city: "Bologna",
            coordinates: [44.4949, 11.3426],
            description: "Research in AI, machine learning, and computer vision.",
            website: "https://disi.unibo.it/en/index.html",
            rating: 8.8
        }
    ],
    "Spain": [
        {
            name: "Barcelona Supercomputing Center",
            city: "Barcelona",
            coordinates: [41.3887, 2.1162],
            description: "Research in high-performance computing, AI, and data science.",
            website: "https://www.bsc.es/",
            rating: 9.0
        },
        {
            name: "Artificial Intelligence Research Institute (IIIA-CSIC)",
            city: "Barcelona",
            coordinates: [41.5007, 2.0905],
            description: "Research in AI, machine learning, and multi-agent systems.",
            website: "https://www.iiia.csic.es/",
            rating: 8.9
        }
    ],
    "Sweden": [
        {
            name: "KTH Royal Institute of Technology - Division of Robotics, Perception and Learning",
            city: "Stockholm",
            coordinates: [59.3498, 18.0707],
            description: "Research in robotics, computer vision, and machine learning.",
            website: "https://www.kth.se/rpl/",
            rating: 9.0
        },
        {
            name: "Chalmers University of Technology - Department of Computer Science and Engineering",
            city: "Gothenburg",
            coordinates: [57.6885, 11.9754],
            description: "Research in AI, machine learning, and computer vision.",
            website: "https://www.chalmers.se/en/departments/cse/",
            rating: 8.8
        }
    ],
    "Finland": [
        {
            name: "Finnish Center for Artificial Intelligence (FCAI)",
            city: "Helsinki",
            coordinates: [60.1699, 24.9384],
            description: "Collaborative research center focusing on AI and machine learning.",
            website: "https://fcai.fi/",
            rating: 8.9
        },
        {
            name: "Aalto University - Department of Computer Science",
            city: "Espoo",
            coordinates: [60.1841, 24.8301],
            description: "Research in AI, machine learning, and data science.",
            website: "https://www.aalto.fi/en/department-of-computer-science",
            rating: 8.8
        }
    ],
    "Denmark": [
        {
            name: "Technical University of Denmark - DTU Compute",
            city: "Lyngby",
            coordinates: [55.7856, 12.5187],
            description: "Research in AI, machine learning, and computer vision.",
            website: "https://www.compute.dtu.dk/",
            rating: 8.9
        },
        {
            name: "University of Copenhagen - Department of Computer Science",
            city: "Copenhagen",
            coordinates: [55.6802, 12.5725],
            description: "Research in AI, machine learning, and natural language processing.",
            website: "https://di.ku.dk/english/",
            rating: 8.8
        }
    ],
    "Belgium": [
        {
            name: "KU Leuven - Department of Computer Science",
            city: "Leuven",
            coordinates: [50.8798, 4.7005],
            description: "Research in AI, machine learning, and computer vision.",
            website: "https://www.kuleuven.be/english/research/liris/",
            rating: 8.9
        },
        {
            name: "Université Libre de Bruxelles - Artificial Intelligence Lab",
            city: "Brussels",
            coordinates: [50.8503, 4.3517],
            description: "Research in AI, machine learning, and multi-agent systems.",
            website: "https://ai.ulb.ac.be/",
            rating: 8.7
        }
    ],
    "Austria": [
        {
            name: "Vienna University of Technology - Institute of Visual Computing & Human-Centered Technology",
            city: "Vienna",
            coordinates: [48.1986, 16.3672],
            description: "Research in computer vision, machine learning, and human-computer interaction.",
            website: "https://www.informatik.tuwien.ac.at/",
            rating: 8.8
        },
        {
            name: "Institute of Science and Technology Austria (ISTA)",
            city: "Klosterneuburg",
            coordinates: [48.3089, 16.2573],
            description: "Research in computer science, data science, and machine learning.",
            website: "https://ist.ac.at/en/home/",
            rating: 8.7
        }
    ],
    "Ireland": [
        {
            name: "Insight Centre for Data Analytics",
            city: "Dublin",
            coordinates: [53.3498, -6.2603],
            description: "Research in data analytics, AI, and machine learning.",
            website: "https://www.insight-centre.org/",
            rating: 8.7
        },
        {
            name: "Trinity College Dublin - ADAPT Centre",
            city: "Dublin",
            coordinates: [53.3439, -6.2546],
            description: "Research in AI, natural language processing, and digital content technology.",
            website: "https://www.adaptcentre.ie/",
            rating: 8.6
        }
    ],
    "Norway": [
        {
            name: "Norwegian University of Science and Technology - Department of Computer Science",
            city: "Trondheim",
            coordinates: [63.4187, 10.4023],
            description: "Research in AI, machine learning, and computer vision.",
            website: "https://www.ntnu.edu/idi",
            rating: 8.7
        },
        {
            name: "University of Oslo - Department of Informatics",
            city: "Oslo",
            coordinates: [59.9139, 10.7522],
            description: "Research in AI, machine learning, and robotics.",
            website: "https://www.mn.uio.no/ifi/english/",
            rating: 8.6
        }
    ],
    "Czech Republic": [
        {
            name: "Czech Technical University - Department of Cybernetics",
            city: "Prague",
            coordinates: [50.1030, 14.3912],
            description: "Research in AI, robotics, and computer vision.",
            website: "https://cyber.felk.cvut.cz/",
            rating: 8.5
        },
        {
            name: "Czech Academy of Sciences - Institute of Computer Science",
            city: "Prague",
            coordinates: [50.0755, 14.4378],
            description: "Research in AI, machine learning, and theoretical computer science.",
            website: "https://www.cs.cas.cz/en",
            rating: 8.4
        }
    ],
    "Poland": [
        {
            name: "IDEAS NCBR",
            city: "Warsaw",
            coordinates: [52.2297, 21.0122],
            description: "Top research center dedicated to AI and digital economy, focusing on fundamental and applied research.",
            website: "https://ideas-ncbr.pl/en/",
            rating: 8.5
        },
        {
            name: "Polish Academy of Sciences - Institute of Computer Science",
            city: "Warsaw",
            coordinates: [52.2153, 21.0068],
            description: "Research institute working on theoretical and practical aspects of AI and computer science.",
            website: "https://ipipan.waw.pl/en/",
            rating: 8.3
        }
    ],
    "Hungary": [
        {
            name: "Institute for Computer Science and Control (SZTAKI)",
            city: "Budapest",
            coordinates: [47.4979, 19.0402],
            description: "Leading research institute focusing on AI, machine learning, and intelligent systems with international recognition.",
            website: "https://www.sztaki.hu/en",
            rating: 8.4
        },
        {
            name: "Artificial Intelligence National Laboratory",
            city: "Budapest",
            coordinates: [47.4925, 19.0513],
            description: "National laboratory coordinating AI research across Hungarian institutions.",
            website: "https://mi.nemzetilabor.hu/en",
            rating: 8.3
        }
    ],
    "Portugal": [
        {
            name: "INESC-ID",
            city: "Lisbon",
            coordinates: [38.7371, -9.1389],
            description: "Research institute focusing on AI, machine learning, and information systems.",
            website: "https://www.inesc-id.pt/",
            rating: 8.4
        },
        {
            name: "University of Lisbon - LASIGE",
            city: "Lisbon",
            coordinates: [38.7578, -9.1573],
            description: "Research laboratory focusing on AI, software engineering, and information systems.",
            website: "https://www.lasige.pt/",
            rating: 8.3
        }
    ],
    "Greece": [
        {
            name: "NCSR Demokritos - Institute of Informatics and Telecommunications",
            city: "Athens",
            coordinates: [37.9838, 23.7275],
            description: "Research institute focusing on AI, machine learning, and telecommunications.",
            website: "https://www.iit.demokritos.gr/",
            rating: 8.3
        },
        {
            name: "Aristotle University of Thessaloniki - Artificial Intelligence and Information Analysis Laboratory",
            city: "Thessaloniki",
            coordinates: [40.6339, 22.9446],
            description: "Research laboratory focusing on AI, machine learning, and data analysis.",
            website: "https://aiia.csd.auth.gr/",
            rating: 8.2
        }
    ],
    "Bulgaria": [
        {
            name: "INSAIT - Institute for Computer Science, Artificial Intelligence and Technology",
            city: "Sofia",
            coordinates: [42.6977, 23.3219],
            description: "Research institute aiming to establish itself as a world-class AI research center in Eastern Europe.",
            website: "https://insait.ai/",
            rating: 8.9
        }
    ],
    "Romania": [
        {
            name: "Romanian Institute of Science and Technology",
            city: "Cluj-Napoca",
            coordinates: [46.7712, 23.6236],
            description: "Research institute focusing on AI, machine learning, and computer science.",
            website: "https://rist.ro/",
            rating: 8.1
        },
        {
            name: "University Politehnica of Bucharest - Artificial Intelligence and Multi-Agent Systems Laboratory",
            city: "Bucharest",
            coordinates: [44.4268, 26.0465],
            description: "Research laboratory focusing on AI, multi-agent systems, and machine learning.",
            website: "https://aimas.cs.pub.ro/",
            rating: 8.0
        }
    ],
    "Estonia": [
        {
            name: "University of Tartu - Institute of Computer Science",
            city: "Tartu",
            coordinates: [58.3780, 26.7290],
            description: "Research institute focusing on AI, machine learning, and data science.",
            website: "https://cs.ut.ee/en",
            rating: 8.2
        }
    ],
    "Latvia": [
        {
            name: "University of Latvia - Institute of Mathematics and Computer Science",
            city: "Riga",
            coordinates: [56.9496, 24.1052],
            description: "Research institute focusing on AI, machine learning, and theoretical computer science.",
            website: "https://www.lumii.lv/",
            rating: 8.0
        }
    ],
    "Lithuania": [
        {
            name: "Vilnius University - Faculty of Mathematics and Informatics",
            city: "Vilnius",
            coordinates: [54.6872, 25.2797],
            description: "Research faculty focusing on AI, machine learning, and data science.",
            website: "https://mif.vu.lt/en/",
            rating: 8.0
        }
    ],
    "Slovenia": [
        {
            name: "Jožef Stefan Institute - Department of Intelligent Systems",
            city: "Ljubljana",
            coordinates: [46.0420, 14.4879],
            description: "Research department focusing on AI, machine learning, and intelligent systems.",
            website: "https://dis.ijs.si/",
            rating: 8.1
        }
    ],
    "Croatia": [
        {
            name: "University of Zagreb - Faculty of Electrical Engineering and Computing",
            city: "Zagreb",
            coordinates: [45.8011, 15.9714],
            description: "Research faculty focusing on AI, machine learning, and computer vision.",
            website: "https://www.fer.unizg.hr/en",
            rating: 8.0
        }
    ],
    "Slovakia": [
        {
            name: "Slovak Academy of Sciences - Institute of Informatics",
            city: "Bratislava",
            coordinates: [48.1486, 17.1077],
            description: "Research institute focusing on AI, machine learning, and theoretical computer science.",
            website: "https://www.ui.sav.sk/",
            rating: 7.9
        }
    ],
    "Armenia": [
        {
            name: "YerevaNN Research Lab",
            city: "Yerevan",
            coordinates: [40.1872, 44.5152],
            description: "Independent research lab focusing on deep learning and NLP",
            website: "https://yerevann.com",
            rating: 7.8
        }
    ],
    "Azerbaijan": [
        {
            name: "Azerbaijan National Academy of Sciences - Institute of Information Technology",
            city: "Baku",
            coordinates: [40.3777, 49.8920],
            description: "Research in AI, data science and information technologies",
            website: "https://ict.az/en",
            rating: 7.4
        }
    ],
    "Bosnia and Herzegovina": [
        {
            name: "University of Sarajevo - Faculty of Electrical Engineering",
            city: "Sarajevo",
            coordinates: [43.8563, 18.3995],
            description: "Research in AI and intelligent systems",
            website: "https://www.etf.unsa.ba",
            rating: 7.6
        }
    ],
    "Cyprus": [
        {
            name: "CYENS Centre of Excellence",
            city: "Nicosia",
            coordinates: [35.1856, 33.3823],
            description: "Research in AI, interactive media, and computational intelligence",
            website: "https://www.cyens.org.cy",
            rating: 7.8
        }
    ],
    "Georgia": [
        {
            name: "Georgian Technical University - AI Research Center",
            city: "Tbilisi",
            coordinates: [41.7225, 44.7925],
            description: "Research in machine learning and AI applications",
            website: "https://gtu.ge/Eng",
            rating: 7.5
        }
    ]
}; 