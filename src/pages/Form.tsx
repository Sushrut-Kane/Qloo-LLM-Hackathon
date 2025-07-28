import React, { useState, ChangeEvent, FormEvent } from 'react';
type FormProps = {
  onSubmit: (data: { name: string; email: string; interests: string }) => void;
};
const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interests: '',
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Get Started</h2>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="name">Name</label>
        <input
          className="w-full border px-3 py-2"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="email">Email</label>
        <input
          className="w-full border px-3 py-2"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="interests">Interests</label>
        <textarea
          className="w-full border px-3 py-2"
          id="interests"
          name="interests"
          value={formData.interests}
          onChange={handleChange}
          placeholder="e.g., AI, Music, Travel"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
