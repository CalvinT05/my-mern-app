import { Link } from "react-router-dom";

const Tabs = () => {
  return (
    <div className="tab-buttons">
      <Link to="/league">League Page</Link>
      <Link to="/overwatch">Overwatch Page</Link>
      <Link to="/other">Other Page</Link>
    </div>
  );
};

export default Tabs;
