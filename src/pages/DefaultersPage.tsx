import DefaulterList from "../components/maintenance/DefaulterList";

const DefaultersPage = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-3 text-primary">
        Defaulters -{" "}
        {new Date().toLocaleString("en-IN", { month: "long", year: "numeric" })}
      </h2>
      <DefaulterList />
    </div>
  );
};

export default DefaultersPage;
