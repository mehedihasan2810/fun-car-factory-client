import "./AddToy.css";
const AddToy = () => {
  return (
    <div className="add-toy-container center-container">
      <form>
        <div className="row">
          <div className="control">
            <label htmlFor="name">Toy Name: </label>
            <input type="text" name="name" id="name" placeholder="Toy Name" />
          </div>
          <div className="control">
            <label htmlFor="text">text: </label>
            <input type="text" name="text" id="text" placeholder="text" />
          </div>
        </div>
        <div className="row">
          <div className="control">
            <label htmlFor="name">Toy Name: </label>
            <input type="text" name="name" id="name" placeholder="Toy Name" />
          </div>
          <div className="control">
            <label htmlFor="text">text: </label>
            <input type="text" name="text" id="text" placeholder="text" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
