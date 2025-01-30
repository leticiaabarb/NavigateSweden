import React, { useState } from "react";

const FaqBot: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const faqs = [
    {
      category: "Daily Life",
      question: "Where can I find a grocery store?",
      answer: "Try ICA or Coop. They are common grocery stores in Sweden.",
    },
    {
      category: "Housing",
      question: "How do I find housing?",
      answer: "Check out websites like Blocket or BostadsPortal for housing.",
    },
    {
      category: "Jobs",
      question: "What are some popular job boards?",
      answer: "LinkedIn and Arbetsförmedlingen are good places to start.",
    },
  ];

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const groupedFAQs = filteredFAQs.reduce((acc: any, faq) => {
    acc[faq.category] = acc[faq.category] || [];
    acc[faq.category].push(faq);
    return acc;
  }, {});

  return (
    <div>
      <p>Type your question below to find answers:</p>
      <input
        type="text"
        placeholder="Search FAQs..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      {Object.keys(groupedFAQs).length > 0 ? (
        Object.keys(groupedFAQs).map((category) => (
          <div key={category} className="faq-category">
            <h2>{category}</h2>
            {groupedFAQs[category].map((faq: any, index: number) => (
              <Faq key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        ))
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

const Faq: React.FC<{ question: string; answer: string }> = ({
  question,
  answer,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ marginBottom: "10px" }}>
      <h3
        onClick={() => setIsOpen(!isOpen)}
        style={{
          cursor: "pointer",
          color: isOpen ? "#007acc" : "#333",
        }}
      >
        {question} {isOpen ? "🔽" : "▶️"}
      </h3>
      {isOpen && <p style={{ marginLeft: "20px", color: "#555" }}>{answer}</p>}
    </div>
  );
};

export default FaqBot;
