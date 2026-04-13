import React, { useState } from "react";

export default function FeedbackForm() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [responseId, setResponseId] = useState<number | null>(null);

  const submitFeedback = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title,
          body: message,
          userId: 1
        })
      });

      const data = await response.json();
      setResponseId(data.id);
      setIsSubmitted(true);

    } catch (err) {
      console.error("POST failed", err);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center p-6">
        <h2 className="text-xl font-bold text-green-600 mb-2">
          Thank you for your feedback!
        </h2>
        <p>Your message was saved with ID: {responseId}</p>
      </div>
    );
  }

  return (
    <form 
      onSubmit={submitFeedback}
      className="flex flex-col gap-4 bg-white p-6 rounded-xl shadow-md border"
    >
      <h2 className="text-xl font-bold text-center">Send Feedback</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded"
        required
      />

      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border p-2 rounded h-32"
        required
      />

      <button 
        type="submit"
        className="bg-blue-600 text-white p-2 rounded font-bold hover:bg-blue-700"
      >
        Submit Feedback
      </button>
    </form>
  );
}
