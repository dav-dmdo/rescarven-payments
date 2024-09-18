
const GridPruebas = () => {
  return (
    <>
      <div className="container-fluid bg-primary bg-gradient p-3 text-center">
        <div className="row bg-primary-subtle m-1 p-1">
          <div className="col bg-primary bg-gradient border border-2 border-info">
            Columna 1
          </div>
          <div className="col bg-primary bg-gradient border border-2 border-info">
            Columna 2
          </div>
        </div>
        <div className="row bg-primary-subtle m-1 p-1">
          <div className="col bg-primary bg-gradient border border-2 border-info">
            Columna 1
          </div>
          <div className="col bg-primary bg-gradient border border-2 border-info">
            Columna 2
          </div>
          <div className="col bg-primary bg-gradient border border-2 border-info">
            Columna 3
          </div>
        </div>
        <div className="row bg-primary-subtle m-1 p-1">
          <div className="col bg-primary bg-gradient border border-2 border-info">
            Columna 1
          </div>
          <div className="col bg-primary bg-gradient border border-2 border-info">
            Columna 2
          </div>
          <div className="col bg-primary bg-gradient border border-2 border-info">
            Columna 3
          </div>
          <div className="col bg-primary bg-gradient border border-2 border-info">
            Columna 4
          </div>
          <div className="col bg-primary bg-gradient border border-2 border-info">
            Columna 5
          </div>
        </div>
      </div>

      <div className="container-fluid text-center">
        <div className="row bg-danger p-1 m-1 border border-2">
          <div className="col-6 col-sm-4 col-lg-8 bg-secondary text-light fs-6 border border-2 border-info">
            .col-sm-4
          </div>
          <div className="col-6 col-sm-8 col-lg-4 bg-secondary text-light fs-6 border border-2 border-info">
            .col-sm-8
          </div>
        </div>
      </div>
    </>
  );
};

export default GridPruebas;
