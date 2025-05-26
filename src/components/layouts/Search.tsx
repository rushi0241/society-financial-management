import { Form, FormControl } from "react-bootstrap";
interface SearchProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}
const Search = ({ searchTerm, setSearchTerm }: SearchProps) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex flex-col items-center justify-center w-full">
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Form>
      </div>
    </div>
  );
};
export default Search;
