import SpinerImg from "../layout/assets/loading.gif";

function Spiner() {
  return (
    <div className="w-100 mt-20">
      <img
        src={SpinerImg}
        alt="Loading..."
        className="text-center mx-auto"
        width={80}
      />
    </div>
  );
}

export default Spiner;
