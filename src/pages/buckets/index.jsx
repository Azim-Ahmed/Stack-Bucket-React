//imported reuseable components
import Nav from "../../components/nav";
// Import Assets

import editIcon from "../../assets/icons/edit-icon.png";
import deleteIcon from "../../assets/icons/delete-icon.png";
import printerIcon from "../../assets/icons/printer-icon.png";
import Create from "../../components/create";
import Table from "../../components/table";

function BucketPage() {
  return (
    <div>
      {/* Navigation Bar */}
      <Nav />
      {/* Main Content Body */}
      <main className="container __margin--ylg">
        {/* Add New Bucket Section */}

        <Create label="Create new bucket" />
        {/* Buckets Table */}
        <div className="section table __shadow--sm">
          <Table />
        </div>
      </main>
    </div>
  );
}

export default BucketPage;
