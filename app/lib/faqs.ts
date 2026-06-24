export type FAQ = {
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    question: "What courses do you offer?",
    answer:
      "We offer English Language, MS Office, Front End Development, Back End Development, MERN Stack Development, and WordPress Development courses.",
  },
  {
    question: "Who can join these courses?",
    answer:
      "Students, job seekers, freelancers, professionals, and beginners can join our courses.",
  },
  {
    question: "Do I need prior computer knowledge?",
    answer:
      "No. Most courses are beginner-friendly and start from the fundamentals.",
  },
  {
    question: "What is the duration of the courses?",
    answer:
      "Course duration varies from 1 month to 6 months depending on the selected program.",
  },
  {
    question: "How many days are classes conducted?",
    answer: "Classes are conducted 3 days a week.",
  },
  {
    question: "What are the available class days?",
    answer:
      "Monday, Wednesday, Friday or Tuesday, Thursday, Saturday.",
  },
  {
    question: "What are the available timing slots?",
    answer:
      "3:00 PM to 5:00 PM, 5:00 PM to 7:00 PM, and 7:00 PM to 9:00 PM.",
  },
  {
    question: "How long is each class?",
    answer: "Each class duration is 2 hours.",
  },
  {
    question: "Do you provide practical training?",
    answer:
      "Yes. All courses include practical assignments, exercises, and real-world projects.",
  },
  {
    question: "Will I work on projects?",
    answer:
      "Yes. Front End, Back End, MERN Stack and WordPress students will complete practical projects and portfolio work.",
  },
  {
    question: "Do you provide job guidance?",
    answer:
      "Yes. We help students with portfolio building, job profiles, interview preparation, and career guidance.",
  },
  {
    question: "Do you provide freelancing guidance?",
    answer:
      "Yes. Advanced students receive basic freelancing and client handling guidance.",
  },
  {
    question: "Do you offer WordPress training?",
    answer:
      "Yes. We teach Elementor, custom theme development, plugin customization, and business website creation.",
  },
  {
    question: "What is included in the MS Office with AI course?",
    answer:
      "The course covers Word, Excel, PowerPoint, AI productivity tools, smart documentation, and workplace automation basics.",
  },
  {
    question: "How can I know the course fee?",
    answer:
      "For course fee details, please visit our campus or contact us directly.",
  },
  {
    question: "Where is the institute located?",
    answer: "B-53 Aleemabad, Malir, Karachi.",
  },
  {
    question: "How can I contact the institute?",
    answer:
      "Phone: 0300-0000000. Email: info@excellencecomputerinstitute.com.",
  },
  {
    question: "Do you offer certificates?",
    answer:
      "Students who successfully complete the course requirements may receive a course completion certificate.",
  },
  {
    question: "Can school and college students join?",
    answer:
      "Yes. Our courses are designed for school students, college students, and adults.",
  },
  {
    question: "Why choose Excellence Computer Institute?",
    answer:
      "We focus on practical learning, career-oriented skills, real projects, modern technologies, and student success.",
  },
];

export function faqJsonLd(items: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
