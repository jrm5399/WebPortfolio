import React from "react";
import SkillCard from "./SkillCard";

const Skills: React.FC = () => {
  const skills = [
    {
      name: "Python",
      imageUrl: "python-logo.png",
      description: `Computer Vision:
  - Extensive work on image processing, object detection, segmentation, and recognition.
  - Used libraries and frameworks like OpenCV, scikit-image, TensorFlow, and YOLO.
  - Developed algorithms for real-time card and cell part detection.
  - Employed synthetic image generation techniques to enhance model robustness.

Machine Learning:
----------------
  - Strong foundation in machine learning with Python.
  - Used scikit-learn, TensorFlow, and PyTorch.
  - Expertise in classification, regression, clustering, and NLP.
  - Familiarity with traditional ML algorithms and deep learning models.

Data Manipulation and Analysis:
------------------------------
  - Proficient in data manipulation using Pandas and NumPy.
  - Skilled in preprocessing, feature engineering, and dataset preparation.
  - Applied exploratory data analysis, statistical analysis, and data visualization.

Model Evaluation and Deployment:
-------------------------------
  - Extensive experience in evaluating model performance.
  - Employed appropriate metrics and cross-validation techniques.
  - Successfully deployed ML models in production environments.
  - Integrated models with web applications for inference.

Deep Learning:
-------------
  - Explored various neural network architectures.
  - Used TensorFlow and PyTorch for training and fine-tuning.
  - Achieved state-of-the-art results in computer vision, NLP, and speech recognition.

Notable Projects:
----------------
  - Real-time card and cell detection using YOLO CNN architecture.
  - Synthetic image generation for custom datasets.
  - Time series forecasting with LSTM models for accurate predictions.
  - Worked with BERT to learn Transformer architecture.

Overall:
-------
  - Proficient in data-oriented and machine learning practices.
  - Strong Python skills and familiarity with AI libraries.
  - Passionate about leveraging AI for advancements in different industries.`,
      libraries: [
        "scikit-learn",
        "openCV",
        "Tensor Flow",
        "PyTorch",
        "Pandas",
        "NumPy",
        "MatPlotLib",
        "SeaBorn",
        "PyPlot",
        "PySpark",
        "SciPy",
      ],
      YoE: "6 Years",
    },
    {
      name: "C",
      imageUrl: "c-logo.png",
      description: `
During my undergraduate studies, I extensively explored diverse algorithmic domains, honing my expertise and gaining valuable hands-on experience. Key areas of focus included:

Lists:
- Mastering efficient algorithms for list data structures, including insertion, deletion, and retrieval operations.
- Empowered me to manipulate data effectively.

Graphs:
- Delving into techniques like breadth-first search (BFS) and depth-first search (DFS).
- Acquired the skills to analyze and navigate complex networks.
- Facilitating effective problem-solving in graph-related scenarios.

Dynamic Memory Allocation:
- Embracing the challenge of managing memory dynamically.
- Developed algorithms that optimized resource utilization.
- Gracefully handled varying data sizes.
- Contributing to efficient memory management.

Sorting Algorithms:
- Immersed in the realm of sorting algorithms, such as bubble sort, insertion sort, selection sort, merge sort, and quicksort.
- Became adept at organizing and arranging data in ascending or descending order.

Tree-Based Algorithms:
- Exploring intricate tree structures.
- Embraced algorithms for tree traversal (pre-order, in-order, and post-order), insertion, deletion, and balancing.
- Enabling efficient data organization and hierarchical representation.

Dynamic Programming:
- Tackled complex challenges using dynamic programming techniques.
- Breaking down intricate problems into manageable subproblems.
- Skillfully combining their solutions.
- Developed optimized algorithms for tasks like the knapsack problem, Fibonacci sequence, and matrix chain multiplication.

These algorithmic explorations during my undergraduate tenure enriched my understanding of fundamental computational concepts, sharpening my problem-solving skills and equipping me 
with a solid foundation to tackle new challenges and drive innovative solutions.`,
      libraries: ["stdio.h", "stdlib.h", "math.h", "string.h", "assert.h"],
      YoE: "4 Years",
    },
    {
      name: "React JS",
      imageUrl: "react-logo.png",
      description: `With over two years of hands-on experience in JavaScript, particularly with a strong focus on React JS, I have honed my skills in web development and crafted numerous custom websites using React and TypeScript. One notable example is the very website you are currently visiting.

My journey with React JS has been filled with exciting challenges and rewarding outcomes. I possess a deep understanding of React's component-based architecture and its ecosystem of libraries and tools. Leveraging my proficiency in JavaScript and TypeScript, I have successfully implemented dynamic user interfaces, state management, and efficient data flow within complex web applications.

Through my experience, I have gained expertise in building responsive and interactive web experiences. I have mastered the art of composing reusable and modular React components, ensuring clean and maintainable codebases. Additionally, I have leveraged advanced features like React Hooks and Context API to enhance the performance and scalability of my applications.

Moreover, I have embraced modern web development practices, such as using webpack for bundling, integrating third-party libraries, and staying up-to-date with the latest web standards and best practices. I am particularly interested in exploring web scraping techniques, allowing me to extract and process data from various sources to create valuable insights and applications.

With a keen eye for UI/UX design principles and a focus on delivering intuitive user experiences, I strive to create visually appealing and user-friendly websites. I am well-versed in CSS frameworks like Bootstrap and have a solid understanding of responsive design principles to ensure seamless experiences across different devices.

I am excited to continue my journey with React JS, staying up-to-date with the latest advancements in the framework and exploring emerging technologies and techniques. With my proven track record and passion for crafting exceptional web experiences, I am confident in my ability to contribute to the success of future web projects.`,
      libraries: ["Boot Strap", "Router", "Query", "Axios"],
      YoE: "2 Years",
    },
    {
      name: "Java",
      imageUrl: "java-logo.png",
      description: `In my journey with Java, I focused on mastering object-oriented design principles and delving into various algorithms. Some of the key areas I worked on include:

- Object-Oriented Design: Java's strong support for object-oriented programming allowed me to deepen my understanding of encapsulation, inheritance, polymorphism, and abstraction. I honed my skills in designing robust and maintainable software systems using object-oriented principles.

- Bloom Filters: I explored the fascinating world of probabilistic data structures, with a specific focus on Bloom filters. I implemented Bloom filters to efficiently determine set membership, enabling me to handle large datasets with minimal false positives.

- Binary Search Trees (BSTs): I delved into the intricacies of BSTs, studying their properties and implementing various operations like insertion, deletion, and search. BSTs provided me with efficient data organization and retrieval, enabling faster search and sorted traversal.

- Graph Algorithms: Java's extensive libraries empowered me to work with graph algorithms more effectively. I utilized libraries like java.util.graph and implemented algorithms such as depth-first search (DFS), breadth-first search (BFS), Dijkstra's algorithm, and topological sorting.

- Dynamic Programming: I further expanded my skills in dynamic programming with Java. By breaking down complex problems into smaller subproblems and utilizing memoization or tabulation, I developed optimized algorithms for tasks such as the knapsack problem, longest common subsequence, and matrix chain multiplication.

My experience with Java and its rich ecosystem of libraries and frameworks enabled me to develop efficient and scalable solutions. The combination of object-oriented design principles, algorithmic knowledge, and the versatility of Java empowered me to tackle diverse challenges and build robust software systems.`,
      libraries: ["java.util", "java.io"],
      YoE: "2 Years",
    },
    {
      name: "C++",
      imageUrl: "c++-logo.png",
      description: `Continuing my exploration of algorithms, I furthered my expertise in C++. Some of the key areas I focused on include:

Graph Algorithms:
----------------
 I delved deeper into graph algorithms, building on my previous knowledge from C. With C++, I leveraged the object-oriented nature of the language to implement graph data structures and algorithms, such as breadth-first search (BFS), depth-first search (DFS), Dijkstra's algorithm, and minimum spanning tree algorithms.

Dynamic Programming: 
-------------------
I continued to tackle complex problems using dynamic programming techniques in C++. With the ability to write more concise and expressive code, I developed optimized algorithms for tasks like the knapsack problem, longest common subsequence, and matrix chain multiplication.

Sorting Algorithms:
------------------
 I further expanded my understanding of sorting algorithms in C++, implementing efficient techniques like quicksort, mergesort, heapsort, and radix sort. I explored the standard template library (STL) and its sorting algorithms like std::sort, std::partial_sort, and std::nth_element.

Data Structures:
---------------
 Building on my knowledge of data structures in C, I learned to leverage the power of C++'s standard library to utilize container classes like std::vector, std::list, std::set, std::map, and std::unordered_map. These data structures provided me with more efficient and convenient ways to store and manipulate data.

Object-Oriented Programming:
---------------------------
 With C++, I embraced the object-oriented paradigm to design and implement reusable and modular algorithms. I leveraged classes, inheritance, and polymorphism to create well-structured and maintainable code.

My experience with algorithms in C++ enhanced my problem-solving skills and deepened my understanding of data structures and algorithmic concepts. The combination of C++'s features and the extensive standard library empowered me to write efficient, readable, and maintainable code.`,
      libraries: [
        "iostream",
        "vector",
        "string",
        "algorithm",
        "map",
        "set",
        "queue",
        "stack",
        "fstream",
      ],
      YoE: "1 Year",
    },
    {
      name: "Haskell",
      imageUrl: "haskell-logo.png",
      description: `In my exploration of Haskell, I immersed myself in the world of functional programming, gaining a deep understanding of its principles and techniques. Functional programming is a paradigm that emphasizes immutability, pure functions, and higher-order abstractions. Here are some key aspects of my experience with functional programming in Haskell:

- Immutable Data: In Haskell, data is immutable, meaning once a value is assigned, it cannot be changed. This immutability promotes referential transparency and eliminates concerns of unexpected side effects, making code more predictable and easier to reason about.

- Pure Functions: Pure functions in Haskell do not have side effects and always produce the same output for a given input. They facilitate writing code that is easier to test, understand, and reason about. I honed my skills in writing pure functions and leveraging their composability to build complex systems.

- Higher-Order Functions: Haskell's support for higher-order functions allows functions to take other functions as arguments or return functions as results. This powerful feature enables the creation of reusable and modular code. I explored higher-order functions extensively and leveraged them for tasks such as function composition, filtering, mapping, and folding.

- Type System: Haskell has a strong and expressive type system that helps catch errors at compile-time and ensures type safety. I familiarized myself with type inference, algebraic data types, type classes, and type signatures. Leveraging the type system, I developed robust code that guarantees correctness and helps prevent runtime errors.

- Recursion: Recursion is a fundamental concept in functional programming, and Haskell provides excellent support for recursive algorithms. I sharpened my skills in writing recursive functions and explored various recursion schemes like folds, unfolds, and mutual recursion.

- Function Composition: Haskell encourages function composition, allowing the creation of new functions by combining existing ones. I embraced the concept of function composition and utilized it to build pipelines of transformations and computations, leading to concise and expressive code.

Functional programming in Haskell offered me a fresh perspective on software development, enabling me to write code that is concise, modular, and highly reusable. It empowered me to solve complex problems by leveraging the power of pure functions, immutability, and higher-order abstractions.`,
      libraries: ["Prelude"],
      YoE: "less than 1 Year",
    },
    {
      name: "Erlang",
      imageUrl: "erlang-logo.png",
      description: `In my exploration of Erlang, I delved into the world of highly concurrent and fault-tolerant systems. Erlang is renowned for its ability to handle massive concurrency and its built-in support for distribution and fault tolerance. Here are some key aspects of my experience with Erlang:

- Process Model: Erlang follows a lightweight process model, where each process operates independently and has its own memory space. I extensively worked with Erlang processes, understanding how to spawn, monitor, and communicate between processes using message passing and pattern matching. This process-centric approach allowed me to build highly concurrent and scalable systems.

- PIDs and OTP: PIDs (Process Identifiers) are unique identifiers assigned to each Erlang process. I became proficient in working with PIDs, using them for process monitoring, linking, and sending/receiving messages. Additionally, I explored the OTP (Open Telecom Platform) framework, which provides a set of libraries and design principles for building robust and fault-tolerant Erlang applications.

- Concurrency and Parallelism: Erlang excels in handling concurrent and parallel computations. I harnessed Erlang's lightweight processes and message passing to design and implement concurrent algorithms and systems. This allowed me to achieve high throughput, efficient resource utilization, and smooth scalability.

- Fault Tolerance: Erlang is renowned for its built-in support for fault tolerance. I gained hands-on experience in building fault-tolerant systems using Erlang's supervision principles, where processes are organized into a hierarchical structure, and failures are isolated and handled gracefully. I utilized supervisors and restart strategies to ensure system resilience and availability.

- Distributed Computing: Erlang provides robust support for distributed computing, allowing seamless communication and coordination among nodes in a distributed system. I leveraged Erlang's distribution features to build distributed applications, ensuring fault tolerance, load balancing, and scalability across multiple nodes.

Erlang's unique features and design principles, coupled with its focus on concurrency, fault tolerance, and distribution, empowered me to develop highly reliable and scalable systems. My experiences with Erlang's process model, PID handling, fault tolerance mechanisms, and distributed computing have greatly enhanced my understanding of concurrent and fault-tolerant programming paradigms.`,
      libraries: ["O&M", "Standard"],
      YoE: "less than 1 Year",
    },
    {
      name: "CUDA",
      imageUrl: "cuda-logo.jpeg",
      description: `
- Utilized CUDA technology to enable local execution of YOLO (You Only Look Once) models.
- Leveraged CUDA's parallel computing platform to accelerate the performance of object detection models.
- Achieved real-time inference and improved efficiency by optimizing YOLO models with CUDA.
- Processed large-scale image datasets with remarkable speed by integrating CUDA with YOLO models.
- Demonstrated proficiency in utilizing GPU-accelerated computing for deep learning tasks and optimizing computer vision solutions locally.`,
      libraries: ["N/A"],
      YoE: "1 year",
    },
    {
      name: "cuDNN",
      imageUrl: "cudnn-logo.png",
      description: `
- Employed cuDNN (CUDA Deep Neural Network) to accelerate deep learning tasks on GPUs.
- Leveraged cuDNN's high-performance primitives and optimized algorithms to enhance the speed and efficiency of deep neural networks.
- Integrated cuDNN with frameworks like TensorFlow and PyTorch to accelerate training and inference of deep learning models.
- Utilized cuDNN's features such as optimized convolution operations and automatic memory management to improve the performance of neural network computations.
- Demonstrated proficiency in utilizing cuDNN to achieve faster training and inference times, enabling efficient deep learning workflows.`,
      libraries: ["N/A"],
      YoE: "1 year",
    },
    {
      name: "My-SQL",
      imageUrl: "sql-logo.png",
      description: `
- Retrieve relevant data using SQL queries from databases and tables.
- Specify desired columns and apply filters to extract specific data points for analysis.
- Join multiple tables to consolidate information from different sources.
- Utilize aggregation functions (SUM, COUNT, AVG, etc.) and GROUP BY to calculate summary statistics and key metrics.
- Explore relationships and patterns through subqueries and joins.
- Perform complex calculations and transformations to manipulate data for advanced analysis.
- Employ data manipulation operations (INSERT, UPDATE, DELETE) for data quality and integrity.
- Continuously enhance SQL skills to efficiently retrieve and transform data for advanced analytics and modeling tasks.
- Support data analytics initiatives at FCX by extracting valuable insights from gathered data.`,
      libraries: ["N/A"],
      YoE: "2 Years",
    },
    {
      name: "PySpark",
      imageUrl: "pyspark-logo.jpg",
      description: `During my enrollment in the Parallel Processes class CDA 5121 at UCF, I had the opportunity to extensively work with PySpark. The course primarily emphasized parallelization techniques for handling large datasets. Through hands-on projects and assignments, I gained practical experience in leveraging PySpark's power to process and analyze data in parallel, enabling efficient computation on massive scales. This hands-on exposure to PySpark in a real-world context has equipped me with the skills and knowledge to tackle complex data processing challenges using distributed computing frameworks.`,
      libraries: ["sql", "SparkConf"],
      YoE: "less than 1 Year",
    },
    {
      name: "Hadoop",
      imageUrl: "hadoop-logo.png",
      description: `During my Parallel Processes class CDA 5121 at UCF, I gained hands-on experience with Apache Hadoop, a distributed computing framework. Here are some highlights of my experience with Hadoop in that class:

- [Distributed Computing]: I learned how Hadoop facilitates parallel processing across a cluster of machines, enabling efficient data processing on a large scale.

- [Hadoop Ecosystem]: I explored key components of the Hadoop ecosystem, including HDFS, MapReduce, and YARN, which allowed me to handle distributed storage, data processing, and resource management.

- [Data Processing]: Using Hadoop's MapReduce paradigm, I developed algorithms to process and analyze large datasets, extracting valuable insights from structured and unstructured data.

- [Data Storage and Retrieval]: I became proficient in storing and retrieving data in Hadoop's distributed file system (HDFS), ensuring data durability and optimizing retrieval performance.

- [Real-World Applications]: Through projects in the class, I applied Hadoop to analyze log files, perform sentiment analysis on social media data, and implement recommendation systems, showcasing its capabilities in solving real-world problems.

My experience with Hadoop in the Parallel Processes class equipped me with valuable skills in distributed computing and data processing at scale. It provided a solid foundation for handling big data challenges and leveraging Hadoop's capabilities to drive impactful solutions.`,
      libraries: ["Apache-Spark"],
      YoE: "less than 1 Year",
    },
  ];

  return (
    <div>
      <div className="skills-section">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
