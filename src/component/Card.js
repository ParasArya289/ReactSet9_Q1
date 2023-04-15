export const Card = ({ data }) => {
  return (
    <div
      style={{
        minWidth: "450px",
        border: "2px dotted",
        margin: "2rem",
        borderRadius: "12px"
      }}
    >
      <h3>{data?.subject}</h3>
      <p>
        <i>
          {data?.sender ? "From:" : "To:"} {data?.sender ?? data?.to}
        </i>
      </p>
      <p>{data?.message}</p>
    </div>
  );
};
