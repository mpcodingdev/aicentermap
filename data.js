// Data for European AI Research Centers - Top 70+ Institutes
const aiResearchCenters = {
    "United Kingdom": [
        {
            name: "DeepMind",
            city: "London",
            description: "World-leading AI research lab known for AlphaGo and groundbreaking work in reinforcement learning and AI systems.",
            coordinates: [51.5074, -0.1278],
            website: "https://deepmind.com/"
        },
        {
            name: "University of Oxford - Department of Computer Science",
            city: "Oxford",
            description: "Leading research in AI safety, machine learning, and computer vision with world-class publications.",
            coordinates: [51.7592, -1.2546],
            website: "https://www.cs.ox.ac.uk/research/ai_ml/"
        },
        {
            name: "University of Cambridge - Computer Laboratory",
            city: "Cambridge",
            description: "Pioneering research in AI, machine learning, and natural language processing with strong industry connections.",
            coordinates: [52.2110, 0.0919],
            website: "https://www.cst.cam.ac.uk/"
        },
        {
            name: "Alan Turing Institute",
            city: "London",
            description: "UK's national institute for data science and artificial intelligence, bringing together top researchers.",
            coordinates: [51.5299, -0.1277],
            website: "https://www.turing.ac.uk/"
        },
        {
            name: "University College London - AI Centre",
            city: "London",
            description: "Leading research center with strengths in machine learning, computer vision, and natural language processing.",
            coordinates: [51.5246, -0.1339],
            website: "https://www.ucl.ac.uk/ai-centre/",
            rating: 9.0
        },
        {
            name: "University of Edinburgh - School of Informatics",
            city: "Edinburgh",
            description: "One of Europe's largest and most influential academic AI research centers with pioneering work in NLP.",
            coordinates: [55.9445, -3.1872],
            website: "https://www.ed.ac.uk/informatics",
            rating: 9.2
        },
        {
            name: "Imperial College London - AI Research Centre",
            city: "London",
            description: "Leading research in AI, machine learning, and data science with strong industry partnerships.",
            coordinates: [51.4988, -0.1749],
            website: "https://www.imperial.ac.uk/artificial-intelligence/"
        },
        {
            name: "University of Manchester - Department of Computer Science",
            city: "Manchester",
            description: "Pioneering research in AI, machine learning, and computer vision with historical significance in AI development.",
            coordinates: [53.4668, -2.2339],
            website: "https://www.cs.manchester.ac.uk/research/expertise/artificial-intelligence/"
        }
    ],
    "Germany": [
        {
            name: "Max Planck Institute for Intelligent Systems",
            city: "Tübingen",
            description: "Elite research institute focusing on fundamental AI research, machine learning, and robotics.",
            coordinates: [48.5379, 9.0573],
            website: "https://is.mpg.de/"
        },
        {
            name: "German Research Center for Artificial Intelligence (DFKI)",
            city: "Kaiserslautern",
            description: "One of the world's largest AI research centers with multiple locations across Germany.",
            coordinates: [49.4249, 7.7537],
            website: "https://www.dfki.de/en/web",
            rating: 8.8
        },
        {
            name: "Technical University of Munich - Department of Informatics",
            city: "Munich",
            description: "Leading research in AI, machine learning, and robotics with strong industry partnerships.",
            coordinates: [48.1496, 11.5678],
            website: "https://www.cit.tum.de/en/cit/home",
            rating: 8.9
        },
        {
            name: "Cyber Valley",
            city: "Stuttgart/Tübingen",
            description: "Europe's largest research consortium in AI with focus on intelligent systems and machine learning.",
            coordinates: [48.7758, 9.1829],
            website: "https://cyber-valley.de/en"
        },
        {
            name: "Berlin Institute for the Foundations of Learning and Data (BIFOLD)",
            city: "Berlin",
            description: "Research institute focusing on machine learning, big data, and AI applications.",
            coordinates: [52.5200, 13.4050],
            website: "https://bifold.berlin/"
        },
        {
            name: "Fraunhofer Institute for Intelligent Analysis and Information Systems",
            city: "Sankt Augustin",
            description: "Applied research in AI, machine learning, and data analytics with industry applications.",
            coordinates: [50.7762, 7.1870],
            website: "https://www.iais.fraunhofer.de/en.html"
        },
        {
            name: "Bosch Center for Artificial Intelligence",
            city: "Renningen",
            description: "Industrial research center developing AI solutions for various applications and industries.",
            coordinates: [48.7758, 8.9268],
            website: "https://www.bosch-ai.com/"
        }
    ],
    "France": [
        {
            name: "INRIA - French Institute for Research in Computer Science and Automation",
            city: "Paris",
            description: "France's leading research institution for AI and computer science with world-class publications.",
            coordinates: [48.8566, 2.3522],
            website: "https://www.inria.fr/en"
        },
        {
            name: "PRAIRIE - PaRis AI Research InstitutE",
            city: "Paris",
            description: "Elite research institute focused on fundamental and applied research in AI and data science.",
            coordinates: [48.8566, 2.3522],
            website: "https://prairie-institute.fr/home/"
        },
        {
            name: "Sorbonne Center for Artificial Intelligence (SCAI)",
            city: "Paris",
            description: "Interdisciplinary research center bringing together top AI researchers from Sorbonne University.",
            coordinates: [48.8512, 2.3408],
            website: "https://scai.sorbonne-universite.fr/"
        },
        {
            name: "MILA-PSL",
            city: "Paris",
            description: "Joint AI laboratory between PSL University and Mila (Quebec AI Institute) with cutting-edge research.",
            coordinates: [48.8584, 2.3536],
            website: "https://mila.quebec/en/"
        },
        {
            name: "ANITI - Artificial and Natural Intelligence Toulouse Institute",
            city: "Toulouse",
            description: "Interdisciplinary institute focused on AI research and applications in various domains.",
            coordinates: [43.6047, 1.4442],
            website: "https://aniti.univ-toulouse.fr/en/"
        },
        {
            name: "LIUM - Computer Science Laboratory of Le Mans University",
            city: "Le Mans",
            description: "Research in natural language processing, speech recognition, and machine learning.",
            coordinates: [48.0193, 0.1602],
            website: "https://lium.univ-lemans.fr/en/"
        },
        {
            name: "Sorbonne University - ISIR (Institute for Intelligent Systems and Robotics)",
            city: "Paris",
            coordinates: [48.8469, 2.3559],
            description: "Research in robotics, AI, and human-machine interaction",
            website: "https://www.isir.upmc.fr",
            rating: 8.7
        },
        {
            name: "University of Nice Sophia Antipolis - I3S Laboratory",
            city: "Nice",
            coordinates: [43.7102, 7.2620],
            description: "Research in machine learning, computer vision, and pattern recognition",
            website: "https://www.i3s.unice.fr",
            rating: 8.5
        }
    ],
    "Switzerland": [
        {
            name: "ETH Zurich - AI Center",
            city: "Zurich",
            description: "World-class AI research center at one of Europe's top technical universities with pioneering work in machine learning.",
            coordinates: [47.3769, 8.5417],
            website: "https://ai.ethz.ch/"
        },
        {
            name: "IDSIA - Swiss AI Lab",
            city: "Lugano",
            description: "Renowned research institute with groundbreaking work in deep learning and neural networks.",
            coordinates: [46.0037, 8.9511],
            website: "http://www.idsia.ch/"
        },
        {
            name: "EPFL Artificial Intelligence Laboratory",
            city: "Lausanne",
            description: "Leading research laboratory working on machine learning, computer vision, and computational neuroscience.",
            coordinates: [46.5196, 6.5656],
            website: "https://www.epfl.ch/labs/lapis/"
        },
        {
            name: "University of Geneva - Computer Vision and Multimedia Laboratory",
            city: "Geneva",
            description: "Research in computer vision, multimedia analysis, and machine learning applications.",
            coordinates: [46.2044, 6.1432],
            website: "https://www.unige.ch/cvml/"
        },
        {
            name: "University of Basel - Department of Mathematics and Computer Science",
            city: "Basel",
            coordinates: [47.5596, 7.5806],
            description: "Research in machine learning, computer vision, and AI",
            website: "https://dmi.unibas.ch",
            rating: 8.6
        },
        {
            name: "University of Fribourg - DIUF",
            city: "Fribourg",
            coordinates: [46.7930, 7.1517],
            description: "Research in AI, machine learning, and data analytics",
            website: "https://www.unifr.ch/inf",
            rating: 8.3
        }
    ],
    "Netherlands": [
        {
            name: "AMLAB - Amsterdam Machine Learning Lab",
            city: "Amsterdam",
            description: "Top-tier research lab at the University of Amsterdam with influential work in machine learning theory.",
            coordinates: [52.3676, 4.9041],
            website: "https://amlab.science.uva.nl/"
        },
        {
            name: "Delft University of Technology - AI Labs",
            city: "Delft",
            description: "Leading research in AI, robotics, and computer vision with applications in various domains.",
            coordinates: [52.0022, 4.3736],
            website: "https://www.tudelft.nl/en/ai/"
        },
        {
            name: "CLAIRE - Confederation of Laboratories for AI Research in Europe",
            city: "The Hague",
            description: "Network of elite AI research laboratories across Europe with headquarters in The Hague.",
            coordinates: [52.0799, 4.3113],
            website: "https://claire-ai.org/"
        },
        {
            name: "Eindhoven Artificial Intelligence Systems Institute",
            city: "Eindhoven",
            description: "Research institute focusing on AI systems and their applications in industry and society.",
            coordinates: [51.4416, 5.4697],
            website: "https://www.tue.nl/en/research/institutes/eindhoven-artificial-intelligence-systems-institute/"
        },
        {
            name: "Radboud AI for Health",
            city: "Nijmegen",
            description: "Research lab focusing on AI applications in healthcare and medicine.",
            coordinates: [51.8125, 5.8372],
            website: "https://www.ai-for-health.nl/"
        },
        {
            name: "CWI - Centrum Wiskunde & Informatica",
            city: "Amsterdam",
            coordinates: [52.3564, 4.9508],
            description: "Research in algorithms, machine learning, and data science",
            website: "https://www.cwi.nl",
            rating: 8.8
        },
        {
            name: "University of Groningen - Bernoulli Institute",
            city: "Groningen",
            coordinates: [53.2194, 6.5665],
            description: "Research in AI, data science, and computational intelligence",
            website: "https://www.rug.nl/research/bernoulli",
            rating: 8.4
        }
    ],
    "Italy": [
        {
            name: "Italian Institute of Technology - Center for Human Technologies",
            city: "Genoa",
            description: "Leading research in robotics, AI, and human-machine interaction with world-class publications.",
            coordinates: [44.4056, 8.9463],
            website: "https://www.iit.it/centers/cth"
        },
        {
            name: "CINI National Laboratory of Artificial Intelligence and Intelligent Systems",
            city: "Rome",
            description: "National laboratory coordinating top AI research across Italian universities.",
            coordinates: [41.9028, 12.4964],
            website: "https://www.consorzio-cini.it/index.php/en/labaiis-home"
        },
        {
            name: "University of Bologna - Department of Computer Science and Engineering",
            city: "Bologna",
            description: "Research in AI, machine learning, and computer vision with international recognition.",
            coordinates: [44.4949, 11.3426],
            website: "https://disi.unibo.it/en/index.html"
        },
        {
            name: "Politecnico di Milano - Artificial Intelligence Lab",
            city: "Milan",
            description: "Research in AI, machine learning, and intelligent systems with strong industry connections.",
            coordinates: [45.4781, 9.2287],
            website: "https://www.ai.polimi.it/"
        },
        {
            name: "University of Pisa - Department of Computer Science",
            city: "Pisa",
            coordinates: [43.7228, 10.4017],
            description: "Research in AI, machine learning, and natural language processing",
            website: "https://www.di.unipi.it/en",
            rating: 8.5
        },
        {
            name: "University of Turin - Department of Computer Science",
            city: "Turin",
            coordinates: [45.0703, 7.6869],
            description: "Research in AI, logic programming, and intelligent systems",
            website: "http://www.di.unito.it/do/home.pl",
            rating: 8.3
        }
    ],
    "Spain": [
        {
            name: "Barcelona Supercomputing Center",
            city: "Barcelona",
            description: "Elite research center with focus on high-performance computing and AI applications.",
            coordinates: [41.3851, 2.1734],
            website: "https://www.bsc.es/"
        },
        {
            name: "Artificial Intelligence Research Institute (IIIA-CSIC)",
            city: "Barcelona",
            description: "Leading research center focused on AI, machine learning, and multi-agent systems with influential publications.",
            coordinates: [41.3010, 2.0899],
            website: "https://www.iiia.csic.es/en/"
        },
        {
            name: "ELLIS Alicante",
            city: "Alicante",
            description: "Part of the European ELLIS network, focusing on human-centered AI and machine learning.",
            coordinates: [38.3452, -0.4815],
            website: "https://ellisalicante.org/en/"
        },
        {
            name: "Andalusian Research Institute in Data Science and Computational Intelligence (DaSCI)",
            city: "Granada",
            description: "Research in data science, computational intelligence, and AI applications with international recognition.",
            coordinates: [37.1773, -3.5986],
            website: "https://dasci.es/en/"
        },
        {
            name: "Universidad Politécnica de Madrid - Artificial Intelligence Center",
            city: "Madrid",
            description: "Leading research in AI, machine learning, and natural language processing with strong industry connections.",
            coordinates: [40.4167, -3.7033],
            website: "https://www.upm.es/internacional/UPM/Centres/CeDInt"
        },
        {
            name: "Barcelona Supercomputing Center - Computer Sciences Department",
            city: "Barcelona",
            coordinates: [41.3897, 2.1132],
            description: "Research in high-performance computing, AI, and data analytics",
            website: "https://www.bsc.es",
            rating: 8.7
        },
        {
            name: "University of the Basque Country - BCAM",
            city: "Bilbao",
            coordinates: [43.2630, -2.9350],
            description: "Research in applied mathematics and machine learning",
            website: "http://www.bcamath.org",
            rating: 8.4
        }
    ],
    "Sweden": [
        {
            name: "KTH Royal Institute of Technology - Division of Robotics, Perception and Learning",
            city: "Stockholm",
            description: "Top-tier research in robotics, computer vision, and machine learning with international recognition.",
            coordinates: [59.3293, 18.0686],
            website: "https://www.kth.se/rpl"
        },
        {
            name: "WASP - Wallenberg AI, Autonomous Systems and Software Program",
            city: "Linköping",
            description: "Sweden's largest individual research program, focusing on AI and autonomous systems with world-class output.",
            coordinates: [58.3932, 15.5760],
            website: "https://wasp-sweden.org/"
        },
        {
            name: "Chalmers AI Research Centre (CHAIR)",
            city: "Gothenburg",
            description: "Interdisciplinary AI research center working on fundamental research and applications.",
            coordinates: [57.6887, 11.9773],
            website: "https://www.chalmers.se/en/centres/chair/"
        },
        {
            name: "Uppsala University - Department of Information Technology",
            city: "Uppsala",
            coordinates: [59.8586, 17.6389],
            description: "Research in AI, machine learning, and visual information",
            website: "https://www.it.uu.se",
            rating: 8.6
        },
        {
            name: "Linköping University - Division of Artificial Intelligence and Integrated Computer Systems",
            city: "Linköping",
            coordinates: [58.3978, 15.5760],
            description: "Research in AI systems and autonomous agents",
            website: "https://liu.se/en/research/artificial-intelligence",
            rating: 8.4
        }
    ],
    "Finland": [
        {
            name: "Finnish Center for Artificial Intelligence (FCAI)",
            city: "Helsinki",
            description: "Flagship AI research center bringing together top researchers from multiple Finnish institutions.",
            coordinates: [60.1699, 24.9384],
            website: "https://fcai.fi/"
        },
        {
            name: "Aalto University - Department of Computer Science",
            city: "Espoo",
            description: "Leading research in machine learning, data science, and AI applications with international recognition.",
            coordinates: [60.1841, 24.8301],
            website: "https://www.aalto.fi/en/department-of-computer-science"
        },
        {
            name: "University of Helsinki - Department of Computer Science",
            city: "Helsinki",
            description: "Research in AI, machine learning, and data science with strong international collaborations.",
            coordinates: [60.2055, 24.9613],
            website: "https://www.helsinki.fi/en/faculty-science/faculty/computer-science"
        }
    ],
    "Denmark": [
        {
            name: "Pioneer Centre for AI",
            city: "Copenhagen",
            description: "Danish national AI research center with focus on ethical and responsible AI development.",
            coordinates: [55.6761, 12.5683],
            website: "https://www.aicentre.dk/"
        },
        {
            name: "University of Copenhagen - Department of Computer Science",
            city: "Copenhagen",
            description: "Leading research in AI, machine learning, and natural language processing with influential publications.",
            coordinates: [55.6802, 12.5725],
            website: "https://di.ku.dk/english/"
        },
        {
            name: "Technical University of Denmark - DTU Compute",
            city: "Lyngby",
            description: "Research in AI, machine learning, and cognitive systems with strong industry partnerships.",
            coordinates: [55.7863, 12.5222],
            website: "https://www.compute.dtu.dk/english"
        }
    ],
    "Belgium": [
        {
            name: "KU Leuven - DTAI Research Group",
            city: "Leuven",
            description: "Top-tier research group in declarative languages and artificial intelligence with international recognition.",
            coordinates: [50.8798, 4.7005],
            website: "https://dtai.cs.kuleuven.be/"
        },
        {
            name: "Université Libre de Bruxelles - Machine Learning Group",
            city: "Brussels",
            description: "Leading research in machine learning, deep learning, and AI applications with influential publications.",
            coordinates: [50.8133, 4.3817],
            website: "https://mlg.ulb.ac.be/"
        },
        {
            name: "Ghent University - IDLab",
            city: "Ghent",
            description: "Research in AI, data science, and internet technology with applications in various domains.",
            coordinates: [51.0500, 3.7303],
            website: "https://www.ugent.be/ea/idlab/en"
        },
        {
            name: "Free University of Brussels - AI Lab",
            city: "Brussels",
            coordinates: [50.8503, 4.3517],
            description: "Research in evolutionary computation and machine learning",
            website: "https://ai.vub.ac.be",
            rating: 8.5
        },
        {
            name: "University of Antwerp - Computer Science Department",
            city: "Antwerp",
            coordinates: [51.2213, 4.4051],
            description: "Research in AI and computational linguistics",
            website: "https://www.uantwerpen.be/en/research-groups/ai-lab",
            rating: 8.2
        }
    ],
    "Austria": [
        {
            name: "Austrian Research Institute for Artificial Intelligence (OFAI)",
            city: "Vienna",
            description: "Leading research institute focusing on symbolic AI, machine learning, and natural language processing.",
            coordinates: [48.2082, 16.3738],
            website: "https://www.ofai.at/index.html"
        },
        {
            name: "JKU Linz - Institute for Machine Learning",
            city: "Linz",
            description: "Top-tier research in machine learning, deep learning, and AI applications with international recognition.",
            coordinates: [48.3369, 14.3225],
            website: "https://www.jku.at/en/institute-for-machine-learning/"
        },
        {
            name: "Graz University of Technology - Institute of Computer Graphics and Vision",
            city: "Graz",
            description: "Research in computer vision, machine learning, and visual computing with international recognition.",
            coordinates: [47.0707, 15.4395],
            website: "https://www.tugraz.at/institutes/icg/home/"
        }
    ],
    "Ireland": [
        {
            name: "ADAPT Centre",
            city: "Dublin",
            description: "Leading research center focusing on digital content technology and AI applications with international recognition.",
            coordinates: [53.3498, -6.2603],
            website: "https://www.adaptcentre.ie/"
        },
        {
            name: "Insight SFI Research Centre for Data Analytics",
            city: "Dublin",
            description: "One of Europe's largest data analytics research organizations with significant AI research output.",
            coordinates: [53.3410, -6.2526],
            website: "https://www.insight-centre.org/"
        },
        {
            name: "CeADAR - Ireland's Centre for Applied AI",
            city: "Dublin",
            description: "National center for applied AI research and innovation with industry partnerships.",
            coordinates: [53.3074, -6.2207],
            website: "https://www.ceadar.ie/"
        }
    ],
    "Norway": [
        {
            name: "Norwegian Open AI Lab",
            city: "Trondheim",
            description: "Leading research center at Norwegian University of Science and Technology with influential AI research.",
            coordinates: [63.4187, 10.4018],
            website: "https://www.ntnu.edu/ailab"
        },
        {
            name: "NORA - Norwegian Artificial Intelligence Research Consortium",
            city: "Oslo",
            description: "Network connecting AI research institutions across Norway with collaborative projects.",
            coordinates: [59.9139, 10.7522],
            website: "https://www.nora.ai/"
        }
    ],
    "Czech Republic": [
        {
            name: "Czech Institute of Informatics, Robotics and Cybernetics",
            city: "Prague",
            description: "Leading research institute focusing on AI, robotics, and machine learning with international recognition.",
            coordinates: [50.1004, 14.3900],
            website: "https://www.ciirc.cvut.cz/en/"
        },
        {
            name: "Institute of Computer Science, Czech Academy of Sciences",
            city: "Prague",
            description: "Research in AI, machine learning, and knowledge representation with international collaborations.",
            coordinates: [50.0755, 14.4378],
            website: "https://www.cs.cas.cz/en"
        }
    ],
    "Poland": [
        {
            name: "IDEAS NCBR",
            city: "Warsaw",
            description: "Top research center dedicated to AI and digital economy, focusing on fundamental and applied research.",
            coordinates: [52.2297, 21.0122],
            website: "https://ideas-ncbr.pl/en/"
        },
        {
            name: "Polish Academy of Sciences - Institute of Computer Science",
            city: "Warsaw",
            description: "Research institute working on theoretical and practical aspects of AI and computer science.",
            coordinates: [52.2153, 21.0068],
            website: "https://ipipan.waw.pl/en/"
        }
    ],
    "Hungary": [
        {
            name: "Institute for Computer Science and Control (SZTAKI)",
            city: "Budapest",
            description: "Leading research institute focusing on AI, machine learning, and intelligent systems with international recognition.",
            coordinates: [47.4979, 19.0402],
            website: "https://www.sztaki.hu/en"
        },
        {
            name: "Artificial Intelligence National Laboratory",
            city: "Budapest",
            description: "National laboratory coordinating AI research across Hungarian institutions.",
            coordinates: [47.4925, 19.0513],
            website: "https://mi.nemzetilabor.hu/en"
        }
    ],
    "Portugal": [
        {
            name: "INESC-ID",
            city: "Lisbon",
            description: "Leading research institution focused on computer science and AI with strong international collaborations.",
            coordinates: [38.7223, -9.1393],
            website: "https://www.inesc-id.pt/"
        },
        {
            name: "LIACC - Artificial Intelligence and Computer Science Laboratory",
            city: "Porto",
            description: "Research laboratory focusing on AI, machine learning, and intelligent systems.",
            coordinates: [41.1579, -8.6291],
            website: "https://www.liacc.up.pt/en/"
        },
        {
            name: "NOVA LINCS - Laboratory for Computer Science and Informatics",
            city: "Lisbon",
            description: "Research laboratory focusing on AI, machine learning, and knowledge-based systems.",
            coordinates: [38.6609, -9.2057],
            website: "https://nova-lincs.di.fct.unl.pt/"
        }
    ],
    "Croatia": [
        {
            name: "CAIR - Center for Artificial Intelligence and Robotics",
            city: "Zagreb",
            description: "Research center focused on AI, robotics, and computer vision applications.",
            coordinates: [45.8150, 15.9819],
            website: "https://www.fer.unizg.hr/en/research/research_laboratories/lamor"
        }
    ],
    "Slovenia": [
        {
            name: "Jožef Stefan Institute",
            city: "Ljubljana",
            description: "Slovenia's leading research institution with strong focus on AI and intelligent systems.",
            coordinates: [46.0569, 14.5058],
            website: "https://www.ijs.si/ijsw/JSI"
        },
        {
            name: "University of Ljubljana - Laboratory for Cognitive Modeling",
            city: "Ljubljana",
            description: "Research in cognitive modeling, machine learning, and AI applications.",
            coordinates: [46.0501, 14.5051],
            website: "https://www.fri.uni-lj.si/en/laboratory/lkm"
        }
    ],
    "Bulgaria": [
        {
            name: "INSAIT - Institute for Computer Science, Artificial Intelligence and Technology",
            city: "Sofia",
            description: "Research institute aiming to establish itself as a world-class AI research center in Eastern Europe.",
            coordinates: [42.6977, 23.3219],
            website: "https://insait.ai/"
        }
    ],
    "Romania": [
        {
            name: "Romanian Institute of Science and Technology",
            city: "Cluj-Napoca",
            description: "Research institute focusing on AI, machine learning, and computational intelligence.",
            coordinates: [46.7712, 23.6236],
            website: "https://rist.ro/en/"
        },
        {
            name: "University Politehnica of Bucharest - Artificial Intelligence and Multi-Agent Systems Laboratory",
            city: "Bucharest",
            description: "Research in AI, multi-agent systems, and machine learning applications.",
            coordinates: [44.4268, 26.0465],
            website: "https://aimas.cs.pub.ro/en/"
        }
    ],
    "Ukraine": [
        {
            name: "Ukrainian Catholic University - Machine Learning Lab",
            city: "Lviv",
            description: "Research laboratory focusing on machine learning, computer vision, and natural language processing.",
            coordinates: [49.8397, 24.0297],
            website: "https://apps.ucu.edu.ua/en/mllab/"
        }
    ],
    "Belarus": [
        {
            name: "Belarusian State University - Research Institute for Applied Problems of Mathematics and Informatics",
            city: "Minsk",
            description: "Research institute focusing on AI, machine learning, and data analysis.",
            coordinates: [53.9045, 27.5615],
            website: "https://bsu.by/en/structural-divisions/institutes/research-institute-for-applied-problems-of-mathematics-and-informatics"
        }
    ],
    "Estonia": [
        {
            name: "Institute of Computer Science, University of Tartu",
            city: "Tartu",
            description: "Leading research center in AI, machine learning, and data science in the Baltic region.",
            coordinates: [58.3800, 26.7209],
            website: "https://cs.ut.ee/en"
        }
    ],
    "Lithuania": [
        {
            name: "Vilnius University - Faculty of Mathematics and Informatics",
            city: "Vilnius",
            description: "Research in AI, machine learning, and data science with international collaborations.",
            coordinates: [54.6872, 25.2797],
            website: "https://mif.vu.lt/en/"
        }
    ],
    "Latvia": [
        {
            name: "Institute of Electronics and Computer Science",
            city: "Riga",
            description: "Research in AI, machine learning, and intelligent systems applications.",
            coordinates: [56.9496, 24.1052],
            website: "https://www.edi.lv/en/"
        }
    ],
    "Greece": [
        {
            name: "Institute of Informatics and Telecommunications - NCSR Demokritos",
            city: "Athens",
            description: "Research institute with significant AI and machine learning research activities.",
            coordinates: [37.9838, 23.7275],
            website: "https://www.iit.demokritos.gr/"
        },
        {
            name: "Aristotle University of Thessaloniki - Artificial Intelligence and Information Analysis Laboratory",
            city: "Thessaloniki",
            description: "Research in AI, machine learning, and data analysis with applications in various domains.",
            coordinates: [40.6339, 22.9540],
            website: "https://aiia.csd.auth.gr/"
        }
    ],
    "Albania": [
        {
            name: "University of Tirana - Department of Computer Science",
            city: "Tirana",
            coordinates: [41.3275, 19.8187],
            description: "Research in artificial intelligence and computer science",
            website: "https://www.unitir.edu.al",
            rating: 7.5
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
    ],
    "Iceland": [
        {
            name: "University of Iceland - School of Engineering and Natural Sciences",
            city: "Reykjavik",
            coordinates: [64.1396, -21.9519],
            description: "Research in AI and computer science",
            website: "https://www.hi.is/en/school_of_engineering_and_natural_sciences",
            rating: 8.1
        }
    ],
    "Kosovo": [
        {
            name: "University of Prishtina - Faculty of Electrical and Computer Engineering",
            city: "Pristina",
            coordinates: [42.6629, 21.1655],
            description: "Research in computer science and intelligent systems",
            website: "https://fiek.uni-pr.edu",
            rating: 7.3
        }
    ],
    "Luxembourg": [
        {
            name: "University of Luxembourg - SnT",
            city: "Luxembourg City",
            coordinates: [49.5034, 6.1296],
            description: "Research in AI, cybersecurity, and data science",
            website: "https://wwwen.uni.lu/snt",
            rating: 8.3
        }
    ],
    "Malta": [
        {
            name: "University of Malta - Department of AI",
            city: "Msida",
            coordinates: [35.9019, 14.4847],
            description: "Research in AI and cognitive science",
            website: "https://www.um.edu.mt/science/ai",
            rating: 7.7
        }
    ],
    "Moldova": [
        {
            name: "Technical University of Moldova - FCIM",
            city: "Chisinau",
            coordinates: [47.0244, 28.8404],
            description: "Research in computer science and intelligent systems",
            website: "https://utm.md/en",
            rating: 7.4
        }
    ],
    "Montenegro": [
        {
            name: "University of Montenegro - Faculty of Electrical Engineering",
            city: "Podgorica",
            coordinates: [42.4415, 19.2439],
            description: "Research in AI and computational intelligence",
            website: "https://www.ucg.ac.me/etf",
            rating: 7.5
        }
    ],
    "North Macedonia": [
        {
            name: "Ss. Cyril and Methodius University - FINKI",
            city: "Skopje",
            coordinates: [42.0041, 21.4072],
            description: "Research in computer science and artificial intelligence",
            website: "https://finki.ukim.mk",
            rating: 7.6
        }
    ],
    "Serbia": [
        {
            name: "University of Belgrade - School of Electrical Engineering",
            city: "Belgrade",
            coordinates: [44.8048, 20.4781],
            description: "Research in AI, robotics, and intelligent systems",
            website: "https://www.etf.bg.ac.rs",
            rating: 8.0
        }
    ],
    "Slovakia": [
        {
            name: "Slovak Academy of Sciences - Institute of Informatics",
            city: "Bratislava",
            coordinates: [48.1486, 17.1077],
            description: "Research in AI and machine learning",
            website: "https://www.sav.sk/?lang=en",
            rating: 7.9
        }
    ],
    "Turkey": [
        {
            name: "Koç University - Artificial Intelligence Laboratory",
            city: "Istanbul",
            coordinates: [41.0082, 29.0582],
            description: "Research in machine learning, computer vision, and natural language processing",
            website: "https://ai.ku.edu.tr",
            rating: 8.4
        },
        {
            name: "Middle East Technical University - KOVAN Research Lab",
            city: "Ankara",
            coordinates: [39.8915, 32.7817],
            description: "Research in robotics, AI, and cognitive systems",
            website: "http://kovan.ceng.metu.edu.tr",
            rating: 8.2
        },
        {
            name: "Boğaziçi University - Computer Engineering Department",
            city: "Istanbul",
            coordinates: [41.0850, 29.0514],
            description: "Research in AI, machine learning, and natural language processing",
            website: "https://www.cmpe.boun.edu.tr",
            rating: 8.3
        },
        {
            name: "Istanbul Technical University - Artificial Intelligence and Data Science Application and Research Center",
            city: "Istanbul",
            coordinates: [41.1055, 29.0230],
            description: "Research in AI applications, data science, and machine learning",
            website: "https://www.itu.edu.tr",
            rating: 8.1
        }
    ]
}; 