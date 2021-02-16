import Nav from "../../components/nav";

// Import Assets
import deleteIcon from "../../assets/icons/delete-icon.png";
import printerIcon from "../../assets/icons/printer-white-icon.png";
import downArrowIcon from "../../assets/icons/down-arrow-white-icon.png";
import Create from "../../components/create";
import Table from "../../components/table";

function BucketDetailPage() {
  return (
    <div>
      {/* Navigation Bar */}
      <Nav />
      {/* Main Content Body */}
      <main className="container __margin--ylg">
        {/* Create New Item */}
        <Create extra label="Add New Item" />
        {/* Item Table */}
        <section className="section table __shadow--sm">
          <Table />
        </section>
        {/* Item Table Completed */}
        <section className="section table table--success __shadow--sm">
          <Table />
        </section>
      </main>
    </div>
  );
}

export default BucketDetailPage;
