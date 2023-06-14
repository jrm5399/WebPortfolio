import React from "react";
import SkillCard from "./SkillCard";

const Skills: React.FC = () => {
  const skills = [
    {
      name: "Python",
      imageUrl: "python-logo.png",
      description: `In Python, I have honed my expertise in data-oriented and machine learning practices, with a primary focus on computer vision. My journey in AI has involved a deep dive into cutting-edge techniques and frameworks, enabling me to develop robust solutions for a wide range of AI-based applications. Here are some key aspects of my experience in AI with Python:

- Computer Vision: Computer vision has been at the forefront of my AI endeavors. I have delved into the world of image processing, object detection, segmentation, and recognition using popular libraries and frameworks like OpenCV, scikit-image, TensorFlow, and the YOLO architecture. Leveraging Python's powerful image processing capabilities, I have developed algorithms to extract meaningful information from images and videos, enabling applications such as facial recognition, object tracking, and augmented reality.

- Machine Learning: My expertise extends to machine learning, where I have applied various algorithms and techniques to analyze and make predictions from data. Python's rich ecosystem of libraries, such as scikit-learn, TensorFlow, and PyTorch, has been instrumental in my machine learning endeavors. I have worked on tasks like classification, regression, clustering, and natural language processing, utilizing both traditional machine learning algorithms and cutting-edge deep learning models.

- Data Manipulation and Analysis: Python's libraries, including Pandas and NumPy, have been invaluable in my data-oriented AI projects. I have gained proficiency in data manipulation, preprocessing, and feature engineering, allowing me to effectively handle and prepare datasets for training machine learning models. Exploratory data analysis, statistical analysis, and data visualization have also been essential components of my AI workflow.

- Model Evaluation and Deployment: Evaluating and deploying machine learning models is crucial for real-world applications. I have extensive experience in evaluating model performance using appropriate metrics and cross-validation techniques. Additionally, I have deployed machine learning models in production environments, leveraging frameworks like Flask and Django to develop APIs for model inference and integration with web applications.

- Deep Learning: Deep learning has played a significant role in my AI journey. I have explored neural networks, convolutional neural networks (CNNs), recurrent neural networks (RNNs), and generative models. Leveraging libraries like TensorFlow and PyTorch, I have trained and fine-tuned deep learning models on large-scale datasets, achieving state-of-the-art results in various domains, including computer vision, natural language processing, and speech recognition.

My expertise in data-oriented and machine learning practices, coupled with my proficiency in Python and its AI libraries, has equipped me to tackle complex AI challenges and develop innovative solutions. I am passionate about leveraging the power of AI to drive advancements in various industries, and I am excited to continue exploring new AI-based applications with Python.`,
      libraries: [
        "scikit-learn",
        "openCV",
        "Tensor Flow",
        "PyTorch",
        "Pandas",
        "NumPy",
        "MatPlotLib",
        "SeaBorn",
      ],
    },
    {
      name: "C",
      imageUrl: "c-logo.png",
      description: `During my undergraduate studies, I extensively explored diverse algorithmic domains, honing my expertise and gaining valuable hands-on experience. Key areas of focus included:

- [Lists]: Mastering efficient algorithms for list data structures, including insertion, deletion, and retrieval operations, empowered me to manipulate data effectively.

- [Graphs]: Delving into techniques like breadth-first search (BFS) and depth-first search (DFS), I acquired the skills to analyze and navigate complex networks, facilitating effective problem-solving in graph-related scenarios.

- [Dynamic Memory Allocation]: Embracing the challenge of managing memory dynamically, I developed algorithms that optimized resource utilization and gracefully handled varying data sizes, contributing to efficient memory management.

- [Sorting Algorithms]: Immersed in the realm of sorting algorithms, such as bubble sort, insertion sort, selection sort, merge sort, and quicksort, I became adept at organizing and arranging data in ascending or descending order.

- [Tree-Based Algorithms]: Exploring intricate tree structures, I embraced algorithms for tree traversal (pre-order, in-order, and post-order), insertion, deletion, and balancing, enabling efficient data organization and hierarchical representation.

- [Dynamic Programming]: With a passion for problem-solving, I tackled complex challenges using dynamic programming techniques. By breaking down intricate problems into manageable subproblems and skillfully combining their solutions, I developed optimized algorithms for tasks like the knapsack problem, Fibonacci sequence, and matrix chain multiplication.

These algorithmic explorations during my undergraduate tenure enriched my understanding of fundamental computational concepts, sharpening my problem-solving skills and equipping me with a solid foundation to tackle new challenges and drive innovative solutions.`,
      libraries: ["stdio.h", "stdlib.h", "math.h", "string.h", "assert.h"],
    },
    {
      name: "C++",
      imageUrl: "c++-logo.png",
      description: `Continuing my exploration of algorithms, I furthered my expertise in C++. Some of the key areas I focused on include:

- Graph Algorithms: I delved deeper into graph algorithms, building on my previous knowledge from C. With C++, I leveraged the object-oriented nature of the language to implement graph data structures and algorithms, such as breadth-first search (BFS), depth-first search (DFS), Dijkstra's algorithm, and minimum spanning tree algorithms.

- Dynamic Programming: I continued to tackle complex problems using dynamic programming techniques in C++. With the ability to write more concise and expressive code, I developed optimized algorithms for tasks like the knapsack problem, longest common subsequence, and matrix chain multiplication.

- Sorting Algorithms: I further expanded my understanding of sorting algorithms in C++, implementing efficient techniques like quicksort, mergesort, heapsort, and radix sort. I explored the standard template library (STL) and its sorting algorithms like std::sort, std::partial_sort, and std::nth_element.

- Data Structures: Building on my knowledge of data structures in C, I learned to leverage the power of C++'s standard library to utilize container classes like std::vector, std::list, std::set, std::map, and std::unordered_map. These data structures provided me with more efficient and convenient ways to store and manipulate data.

- Object-Oriented Programming: With C++, I embraced the object-oriented paradigm to design and implement reusable and modular algorithms. I leveraged classes, inheritance, and polymorphism to create well-structured and maintainable code.

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
