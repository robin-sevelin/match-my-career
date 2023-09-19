// import { SearchContext } from '../contexts/SearchContext';
// import { ChangeEvent, useContext } from 'react';
// import { ActionType } from '../reducers/SearchReducer';
// import { useLoaderData } from 'react-router-dom';
// import { IFormValueLoader } from '../loaders/educationLoader';

// export const EducationForm = () => {
//   const { dispatch } = useContext(SearchContext);
//   const { educationForms } = useLoaderData() as IFormValueLoader;

//   return (
//     <>
//       <select
//         onChange={(e: ChangeEvent<HTMLSelectElement>) =>
//           dispatch({
//             type: ActionType.ADDED_EDUCATION_FORM,
//             payload: e.target.value,
//           })
//         }
//       >
//         <option value=''>Utbildningsform</option>
//         {educationForms.map((res) => (
//           <option key={res.key}>{res.value}</option>
//         ))}
//       </select>
//     </>
//   );
// };
