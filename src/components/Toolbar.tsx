const Toolbar = ({ onBlock, onUnblock, onDelete, onDeleteUnverified }: any) => {
  return (
    <div className="d-flex gap-2 mb-2">

      {/* IMPORTANT: NO row buttons, only toolbar */}
      <button className="btn btn-warning btn-sm" onClick={onBlock}>
        Block
      </button>

      <button className="btn btn-success btn-sm" onClick={onUnblock}>
        Unblock
      </button>

      <button className="btn btn-danger btn-sm" onClick={onDelete}>
        Delete
      </button>

      <button className="btn btn-secondary btn-sm" onClick={onDeleteUnverified}>
        Delete Unverified
      </button>

    </div>
  );
};

export default Toolbar;