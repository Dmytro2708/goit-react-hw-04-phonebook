import { FilterInput } from "./Filter.styled";


export function Filter({ filter }) {
  return (
    <>
      <h3>Find contacts by name</h3>
      <FilterInput type="text" name="filter" onChange={filter} />
    </>
  );
}
