export type DataStructure = {
  id: string;
  title: string;
  content: string;
  from: string;
  type: "text" | "image";
}

export const tributeData: DataStructure[] = [
  {
    id: "1",
    title: "Memories of Our Journey, from the word go till this moment",
    from: "Ada Jie",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in dictum sem, at dignissim arcu.\n\n" +
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n\n" +
      "Suspendisse potenti. Donec nec laoreet ligula. Sed sed nisl at nunc faucibus dignissim.\n\n" +
      "Curabitur ut felis ac quam convallis varius. Praesent feugiat, nisi at interdum imperdiet, justo ex consequat odio, at vestibulum felis sapien vel libero.",
    type: "text",
  },
  {
    id: "2",
    title: "A Tribute in Image",
    from: "Ozor",
    content: "/sample.png", // This image is in the public folder.
    type: "image",
  },
  {
    id: "3",
    title: "Another Beautiful Memory",
    from: "malesuada",
    content:
      "Aliquam tincidunt, sapien a sollicitudin congue, lorem mi accumsan nulla, vitae blandit velit leo id nibh.\n\n" +
      "Mauris dictum justo sit amet urna fermentum, sit amet hendrerit dui dictum.\n\n" +
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed sed nisl at nunc faucibus dignissim.\n\n" +
      "Aliquam tincidunt, sapien a sollicitudin congue, lorem mi accumsan nulla, vitae blandit velit leo id nibh.",
    type: "text",
  },
  {
    id: "4",
    title: "A Tribute in Image",
    from: "Chinedu",
    content: "/condo/condo_1.webp",
    type: "image",
  },
];


export const condolenceData: DataStructure[] = [
  {
    id: "1",
    title: "Memories of Our Journey, from the word go till this moment",
    from: "Ada Jie",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in dictum sem, at dignissim arcu.\n\n" +
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n\n" +
      "Suspendisse potenti. Donec nec laoreet ligula. Sed sed nisl at nunc faucibus dignissim.\n\n" +
      "Curabitur ut felis ac quam convallis varius. Praesent feugiat, nisi at interdum imperdiet, justo ex consequat odio, at vestibulum felis sapien vel libero.",
    type: "text",
  },
  {
    id: "2",
    title: "A Tribute in Image",
    from: "Ozor",
    content: "/sample.png", // This image is in the public folder.
    type: "image",
  },
  {
    id: "3",
    title: "Another Beautiful Memory",
    from: "malesuada",
    content:
      "Aliquam tincidunt, sapien a sollicitudin congue, lorem mi accumsan nulla, vitae blandit velit leo id nibh.\n\n" +
      "Mauris dictum justo sit amet urna fermentum, sit amet hendrerit dui dictum.\n\n" +
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed sed nisl at nunc faucibus dignissim.\n\n" +
      "Aliquam tincidunt, sapien a sollicitudin congue, lorem mi accumsan nulla, vitae blandit velit leo id nibh.",
    type: "text",
  },
  {
    id: "4",
    title: "A Tribute in Image",
    from: "Chinedu",
    content: "/condo/condo_1.webp",
    type: "image",
  },
];
