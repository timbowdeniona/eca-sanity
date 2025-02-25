import type { Meta, StoryObj } from "@storybook/react";

import { Header } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Header",
  component: Header,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    image: "/images/logo.png",
    imageAlt: "AQA",
    links: [
      {
        id: "8bff8d56-ec61-43ab-859e-cb60e924826f",
        type: "link",
        text: "Subjects",
        link: "/",
        links: [
          {
            id: "e2654131-b200-4d2a-864f-c55a3303c3f3",
            text: "Subjects",
            links: [
              {
                id: "7688a008-3a08-4784-be73-d11485853774",
                type: "link",
                text: "Accounting",
                link: "/",
              },
              {
                id: "b0c4898f-6f14-4ee3-a750-b52315cf4206",
                type: "link",
                text: "Art and Design",
                link: "/",
              },
              {
                id: "36167935-a69d-40e5-abc3-51c86994818c",
                type: "link",
                text: "Business",
                link: "/",
              },
              {
                id: "1fc96786-1800-4f70-a6c4-c32aa85ded4a",
                type: "link",
                text: "Computer Science and IT",
                link: "/",
              },
              {
                id: "d97af7f3-14c7-4fa0-988f-0510c83120db",
                type: "link",
                text: "Dance",
                link: "/",
              },
              {
                id: "8ef19328-5606-42b3-829f-0a5c2db3924a",
                type: "link",
                text: "Design and Technology",
                link: "/",
              },
              {
                id: "a89721fc-1398-4a1e-979e-d6d9cd06f998",
                type: "link",
                text: "Drama",
                link: "/",
              },
              {
                id: "75bb653e-a22c-4750-b448-bcf1f3616781",
                type: "link",
                text: "Mathematics",
                link: "/",
              },
            ],
          },
          {
            id: "bc14a806-f83f-480e-ba78-5478e8b34289",
            text: "",
            links: [
              {
                id: "744c0848-a619-4ba6-884f-0ae85e7c711f",
                type: "link",
                text: "Economics",
                link: "/",
              },
              {
                id: "edbf148d-8bc7-40d0-9196-436da8346f52",
                type: "link",
                text: "English",
                link: "/",
              },
              {
                id: "7078c36c-c668-4358-a495-7f1e4e629e21",
                type: "link",
                text: "Food",
                link: "/",
              },
              {
                id: "94df752c-1b0c-4923-9a27-c03753aa4e90",
                type: "link",
                text: "Geography",
                link: "/",
              },
              {
                id: "c3209602-0b63-4274-87cc-ffa50c1c4af3",
                type: "link",
                text: "History",
                link: "/",
              },
              {
                id: "f70c77f1-09cf-4507-9a75-9a01cdea66a4",
                type: "link",
                text: "Languages",
                link: "/",
              },
              {
                id: "d49672ec-cc0d-4515-99b4-9964de27eaee",
                type: "link",
                text: "Law",
                link: "/",
              },
              {
                id: "3189296a-4e9a-4405-9a1d-8dd028b3e1e8",
                type: "link",
                text: "Media Studies",
                link: "/",
              },
            ],
          },
          {
            id: "3b561b04-6af9-4c95-a0e8-63e81ea01790",
            text: "",
            links: [
              {
                id: "ed07b6de-204d-43ee-af4e-f5d65afde562",
                type: "link",
                text: "Music",
                link: "/",
              },
              {
                id: "d102a918-8cf4-400e-a850-129901e267e1",
                type: "link",
                text: "Physical Education",
                link: "/",
              },
              {
                id: "3bab4429-8e6a-4599-968d-a2e88dd2c9db",
                type: "link",
                text: "Politics",
                link: "/",
              },
              {
                id: "fdcf19a9-3ce5-4534-91b3-c5c44c2efa57",
                type: "link",
                text: "Psychology",
                link: "/",
              },
              {
                id: "85e37d0b-3c04-4748-9f4f-c902aa1d26a9",
                type: "link",
                text: "Religious Studies",
                link: "/",
              },
              {
                id: "e6a5f648-da8b-4465-8c8c-0eba2f5002b2",
                type: "link",
                text: "Science",
                link: "/",
              },
              {
                id: "422cb995-7ca3-4662-bad0-9c918875c271",
                type: "link",
                text: "Sociology",
                link: "/",
              },
            ],
          },
          {
            id: "fe8a965f-6e61-424d-92bc-10c316e0f45b",
            text: "",
            links: [
              {
                id: "4d9c0b7e-e60a-49de-a8f6-77b66746785e",
                type: "emphasizedLink",
                text: "All courses",
                link: "/",
              },
            ],
          },
        ],
      },
      {
        id: "2d68eef4-fd3d-43e7-a07c-2eeee4e9e2dc",
        type: "link",
        text: "Qualifications",
        link: "/",
        links: [
          {
            id: "c67f574d-c391-41d4-a8fd-c4c0699dd25a",
            text: "GCSEs",
            links: [
              {
                id: "4aa6a029-c0da-4097-8fd8-1c285d4b33f3",
                type: "link",
                text: "Biology (8461)",
                link: "/",
              },
              {
                id: "fe0f1436-35df-4769-b560-e848bcaf943a",
                type: "link",
                text: "Chemistry (8462)",
                link: "/",
              },
              {
                id: "e0f9a290-33a4-41b9-a004-c470565f240d",
                type: "link",
                text: "Combined Science: Trilogy (8664)",
                link: "/",
              },
              {
                id: "d620428d-aa7b-42ab-9666-4f2b349d4eb3",
                type: "link",
                text: "English Literature (8702)",
                link: "/",
              },
              {
                id: "f81da59b-bdb0-4f11-99e0-7443aa5b278b",
                type: "link",
                text: "Geography (8035)",
                link: "/",
              },
              {
                id: "4950b1ba-8a2f-44c8-81d6-e7d90556648f",
                type: "link",
                text: "History (8145)",
                link: "/",
              },
              {
                id: "ad39edd1-0cae-4b2d-ba73-7beba5bc1e4d",
                type: "link",
                text: "Mathematics (8300)",
                link: "/",
              },
            ],
          },
          {
            id: "4f44818a-c6df-43cf-a224-45948ed09513",
            text: "AS and A-levels",
            links: [
              {
                id: "460963e3-7bbd-4f3f-b3cc-09b186c9cdbf",
                type: "link",
                text: "Biology (7401, 7402)",
                link: "/",
              },
              {
                id: "b8d6bdb7-08e6-458f-95d0-c11e20a10a4a",
                type: "link",
                text: "Business (7131, 7132)",
                link: "/",
              },
              {
                id: "ae36d334-82c6-4da5-a187-3ac55c969c63",
                type: "link",
                text: "Chemistry (7404, 7405)",
                link: "/",
              },
              {
                id: "3489535f-ab08-4ebd-b3e8-836dced22138",
                type: "link",
                text: "Geography (7037)",
                link: "/",
              },
              {
                id: "939f5a2f-71f9-4592-9c2f-a5490cbc2505",
                type: "link",
                text: "History (7041, 7042)",
                link: "/",
              },
              {
                id: "2a6fbb0b-5d09-417f-b4e5-a53c8e88b7f4",
                type: "link",
                text: "Physics (7407, 7408)",
                link: "/",
              },
              {
                id: "bd820eb3-ec76-4705-8294-ee5633c595ef",
                type: "link",
                text: "Psychology (7191,7192)",
                link: "/",
              },
            ],
          },
          {
            id: "89ce6aa2-bb3a-4737-a186-99c4963b7f60",
            text: "Other qualifications",
            links: [
              {
                id: "fcd07f78-f475-4f67-b375-36903c3a27a3",
                type: "link",
                text: "Applied Generals",
                link: "/",
              },
              {
                id: "ea389e9d-cc4e-4662-bf56-81aa1f13e144",
                type: "link",
                text: "AQA Certificate Mathematics",
                link: "/",
              },
              {
                id: "5ae071e8-c833-4600-9044-3255f2953d88",
                type: "link",
                text: "Entry Level Certificates",
                link: "/",
              },
              {
                id: "eebf25d9-81eb-4a55-b642-8bafab348b18",
                type: "link",
                text: "Level 3 Extended Project Qualification",
                link: "/",
              },
              {
                id: "f817084d-bcb4-42a3-8deb-b95a6fbd6e73",
                type: "link",
                text: "Unit Award Scheme",
                link: "/",
              },
            ],
          },
          {
            id: "78f7edf1-d605-4d08-bd86-f112d4c78b65",
            text: "",
            links: [
              {
                id: "9d5fab5f-b94b-468d-b9d2-9f1d00aa0f20",
                type: "emphasizedLink",
                text: "All qualifications",
                link: "/",
              },
            ],
          },
        ],
      },
      {
        id: "1360cd04-917f-4944-bcb8-12f11aa8e961",
        type: "link",
        text: "Professional Development",
        link: "/",
        links: [
          {
            id: "d569ab84-952a-4d85-9d90-64139b75504e",
            text: "Our training",
            links: [
              {
                id: "cf88fb04-4761-4ec7-a5d3-d46a4b0cd75b",
                type: "link",
                text: "Course finder",
                link: "/",
              },
              {
                id: "e2bcf853-7f3d-444c-8a39-cf72e0ad9e37",
                type: "link",
                text: "About our training",
                link: "/",
              },
              {
                id: "268466e6-bab9-4bb3-babb-09dacac37651",
                type: "link",
                text: "Online training",
                link: "/",
              },
              {
                id: "84ec1b31-5a42-470e-a1a9-1d25be9c5dcc",
                type: "link",
                text: "Face-to-face training",
                link: "/",
              },
              {
                id: "635205c7-cd52-47dd-b640-733247ddae83",
                type: "link",
                text: "Inside Assessment",
                link: "/",
              },
            ],
          },
          {
            id: "ed2702d7-78fc-49ce-a1d2-22ce6dd879b3",
            text: "Courses by theme",
            links: [
              {
                id: "0f2aa290-e602-4b52-8713-1c8901654614",
                type: "link",
                text: "Effective exam prep",
                link: "/",
              },
              {
                id: "238123e5-c579-4dda-90ea-0d65478f9ee4",
                type: "link",
                text: "Exams officers",
                link: "/",
              },
              {
                id: "cea2da90-4cc4-4931-a453-6c8615c115db",
                type: "link",
                text: "Getting started with AQA",
                link: "/",
              },
              {
                id: "e22f0b69-8863-43a5-ab87-9ac03fe680a2",
                type: "link",
                text: "Virtual communities",
                link: "/",
              },
              {
                id: "95c9c85a-fb5a-42b8-bb07-c4b4c4ca6352",
                type: "link",
                text: "UAS new centre training",
                link: "/",
              },
            ],
          },
          {
            id: "cdad98ce-d343-416a-9a4f-409a1583c66e",
            text: "Courses by subject",
            links: [
              {
                id: "331a83ca-c942-4a0e-aefc-55e6443ad626",
                type: "link",
                text: "English",
                link: "/",
              },
              {
                id: "59c7dd0b-20bd-467b-a0b5-65092ec1198c",
                type: "link",
                text: "Mathematics",
                link: "/",
              },
              {
                id: "010b451b-a17c-4c91-ba0b-b25d3897fc6d",
                type: "link",
                text: "Science",
                link: "/",
              },
              {
                id: "8c7719a5-6663-4e61-af06-8d0a49075ab7",
                type: "link",
                text: "Languages",
                link: "/",
              },
              {
                id: "4a81454f-8565-4e8e-8583-78c468d3f085",
                type: "link",
                text: "Design and Technology",
                link: "/",
              },
              {
                id: "649a5c22-2d71-4713-be3a-8a4ca758e562",
                type: "link",
                text: "Physical Education",
                link: "/",
              },
              {
                id: "b48ebe2a-dd7b-4aed-8444-b9f9417336e8",
                type: "link",
                text: "Geography",
                link: "/",
              },
              {
                id: "1a7a41b0-c2a4-4417-b589-74e26d37eb85",
                type: "link",
                text: "History",
                link: "/",
              },
            ],
          },
          {
            id: "af57b65f-821d-4684-b048-d752ad763c8a",
            text: "",
            links: [
              {
                id: "ee89a189-9684-48fa-82aa-5676c99db902",
                type: "emphasizedLink",
                text: "All courses",
                link: "/",
              },
              {
                id: "0cfc28bc-59a6-4d2b-bd25-e90e56b52318",
                type: "link",
                text: "Log in",
                link: "/",
              },
              {
                id: "e5e63480-ba6b-4920-98ce-0f946a877fa0",
                type: "link",
                text: "Examiner vacancies",
                link: "/",
              },
            ],
          },
        ],
      },
      {
        id: "85269e50-adb6-4868-a89d-363243c6d31e",
        type: "link",
        text: "Exams admin",
        link: "/",
        links: [
          {
            id: "dbd30119-d9e0-4ab7-b894-c498ebe1b9f9",
            text: "Dates",
            links: [
              {
                id: "7d42ef7f-f2cb-4796-93a5-4b185815aeaa",
                type: "link",
                text: "Key dates",
                link: "/",
              },
              {
                id: "9e1808f1-c588-4cad-b77c-061fb997fa46",
                type: "link",
                text: "Dates and timetables",
                link: "/",
              },
            ],
          },
          {
            id: "aa951979-553c-4b21-81ad-3e3df5867cd7",
            text: "Non-exam assessment (NEA)",
            links: [
              {
                id: "6adec056-a9c2-47c6-872d-3410d86cc9ac",
                type: "link",
                text: "Deadlines for non-exam assessment",
                link: "/",
              },
              {
                id: "b2cc03ea-3f41-4a90-b39f-3a51e1bf3b9b",
                type: "link",
                text: "Record forms",
                link: "/",
              },
              {
                id: "e277f2f2-da40-487a-a42c-5746ffe68c45",
                type: "link",
                text: "Submit marks",
                link: "/",
              },
            ],
          },
          {
            id: "1bd0d42d-431e-4e32-b573-b92bd27d39c5",
            text: "Exams",
            links: [
              {
                id: "6e5ea989-ae6c-44ca-8296-bd0fd782b510",
                type: "link",
                text: "Entries",
                link: "/",
              },
              {
                id: "38b95851-0904-4cf7-9c10-b25b3bccb179",
                type: "link",
                text: "Entry fees",
                link: "/",
              },
              {
                id: "15844374-b057-44bd-a571-92fc61416676",
                type: "link",
                text: "Exams guidance",
                link: "/",
              },
              {
                id: "5474609a-b57c-4e59-b1ea-98bbf2a4dea4",
                type: "link",
                text: "Question papers and stationery",
                link: "/",
              },
              {
                id: "53ead7c5-94d3-4dbb-b0c5-46ea7f9d085d",
                type: "link",
                text: "Access arrangements",
                link: "/",
              },
              {
                id: "6925b62c-6bb2-43c2-8828-46e7d02ee27d",
                type: "link",
                text: "Special consideration",
                link: "/",
              },
            ],
          },
          {
            id: "e4240cb1-7644-4715-a499-b165b4ed02c9",
            text: "Results",
            links: [
              {
                id: "6b1eb767-589d-4dce-baae-8777881577de",
                type: "link",
                text: "Results days",
                link: "/",
              },
              {
                id: "bafc0424-98da-4439-bb22-b8626cbc7c83",
                type: "link",
                text: "Results slips",
                link: "/",
              },
              {
                id: "584ddd24-55fc-4b04-bf60-be4a8f3f1bfe",
                type: "link",
                text: "Grade boundaries",
                link: "/",
              },
              {
                id: "4c1202fc-f33b-4574-b839-98d84741e0de",
                type: "link",
                text: "Results statistics",
                link: "/",
              },
              {
                id: "9acd0c43-6c5b-4d46-9a41-7918a38b84b7",
                type: "link",
                text: "Post-results services",
                link: "/",
              },
              {
                id: "ea848414-f404-4dad-8d06-676c70ef0ae5",
                type: "link",
                text: "Exam certificates",
                link: "/",
              },
            ],
          },
        ],
      },
    ],
    tagline: "Most chosen general qualifications awarding body in England",
    topBarLinks: [
      {
        id: "e5443a27-41a8-44e1-a213-d19f01bf9590",
        type: "link",
        text: "Contact ",
        link: "/",
      },
      {
        id: "55ff9cff-1c59-40c2-ba2f-1161a88797e9",
        type: "link",
        text: "About",
        link: "/",
      },
      {
        id: "00b0a7cd-0ec6-4d7e-96c6-b720316df9c6",
        type: "link",
        text: "Join us",
        link: "/",
      },
    ],
  },
};

export const HeaderUnauthenticated: Story = {
  args: {
    image: Default.args.image,
    imageAlt: Default.args.imageAlt,
    links: Default.args.links,
    tagline: Default.args.tagline,
    topBarLinks: Default.args.topBarLinks,
  },
};
