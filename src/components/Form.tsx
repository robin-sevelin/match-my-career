import { FormEvent } from 'react';
import { EducationForm } from './EducationForm';
import { EducationTypes } from './EducationTypes';

export const Form = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('hej');
  };
  return (
    <>
      <h2>search route</h2>
      <form onSubmit={handleSubmit}>
        <EducationForm />
        <EducationTypes />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};
