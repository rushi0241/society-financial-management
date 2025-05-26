import Table from "react-bootstrap/Table";
import { useGetFamiliesQuery } from "../../app/services/familyApi";
interface Props {
  searchTerm: string;
}

const FamilyList = ({ searchTerm }: Props) => {
  let srNo = 1;
  const { data: families = [], isLoading, error } = useGetFamiliesQuery();
  if (isLoading) return <p>Loading families...</p>;
  if (error) return <p>Failed to load families.</p>;

  const filteredFamilies = families.filter(
    (f: any) =>
      f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.apartment.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Table striped bordered hover>
      <thead style={{ position: "sticky", top: 0 }}>
        <tr>
          <th style={{ width: "70px", textAlign: "center" }}>Sr. No.</th>
          <th>Name</th>
          <th>Apartment</th>
          <th>Members</th>
        </tr>
      </thead>
      <tbody>
        {filteredFamilies.map((fam) => (
          <tr key={fam.id}>
            <td className="text-center">{srNo++}</td>
            <td>{fam.name}</td>
            <td>{fam.apartment}</td>
            <td>{fam.members}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default FamilyList;
